"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Pais, Rutas, Ciudad, Por_Visitar
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import json
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import mercadopago

api = Blueprint('api', __name__)
sdk = mercadopago.SDK("APP_USR-2926550097213535-092911-5eded40868803c83f12e9eef1afa99fa-1160956296")

# Allow CORS requests to this API
CORS(api)

@api.route('/users', methods=['POST', 'GET'])
def handle_users():
    if request.method == "POST":
        user = json.loads(request.data)
        password = user['password']
        pw_hash = current_app.bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(
            nombre=user['nombre'],
            apellidos=user['apellidos'],
            edad=user['edad'],
            email=user['email'],
            password=pw_hash,
            fecha_de_registro=user['fecha_de_registro'],
            pais_de_residencia=user['pais_de_residencia'],
            is_active=user['is_active'],
            rol=user['rol']
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "Usuario creado correctamente"}), 200
    user = User.query.all()
    if user == []:
        return jsonify({"msg": "No se encontró nungun usuario"}), 404
    response_body = list(map(lambda user: user.serialize(), user))
    return jsonify(response_body), 200

@api.route('/users/<int:user_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_user_id(user_id):
    user = User.query.filter_by(id = user_id).first()
    if user is None:
        return jsonify({"msg": "No existe el usuario"}), 404
    if request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return jsonify({"msg": "Usuario eliminado"}), 200
    if request.method == 'PUT':
        body = json.loads(request.data)
        if "nombre" in body:
            user.nombre = body['nombre']
        if "apellidos" in body:
            user.apellidos = body['apellidos']
        if "email" in body:
            user.email = body['email']
        if "password" in body:
            user.password = body['password']
        if "edad" in body:
            user.edad = body['edad']
        if "pais_de_residencia" in body:
            user.pais_de_residencia = body['pais_de_residencia']
        db.session.commit()
        return jsonify({"msg": "Sus datos fueron modificados"}), 200
    return jsonify(user.serialize()), 200

@api.route("/login", methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    user = User.query.filter_by(email=email).first()
    # pw_hash = bcrypt.generate_password_hash(password)
    # user_pw = User.query.filter_by(password=pw_hash).first()
    if user is None:
        return jsonify({"msg": "El usuario no existe"}), 404
    exist = current_app.bcrypt.check_password_hash(user.password, password)
    # user_exist = User.query.filter_by(email=email, password=pw_hash).first()
    if email == user.email and exist:
        datos = {
            "email": email,
            "rol": user.rol,
            "nombre": user.nombre
        }
        access_token = create_access_token(identity=datos)
        response_body = {"token": access_token, "id": user.id, "rol": user.rol, "nombre": user.nombre}
        return jsonify(response_body), 200
    else:
        return jsonify({"msg": "Usuario o contraseña incorrectos"}), 404
    
@api.route("/paises", methods=['GET'])
def handle_paises():
    pais = Pais.query.all()
    if pais == []:
        return jsonify({"msg": "No existen paises para mostrar"}), 404
    response_body = list(map(lambda pais: pais.serialize(), pais))
    return jsonify(response_body), 200

@api.route("/ciudad", methods=['GET'])
def handle_ciudad():
    ciudad = Ciudad.query.all()
    if ciudad == []:
        return jsonify({"msg": "No existen ciudades para mostrar"}), 404
    response_body = list(map(lambda ciudad: ciudad.serialize(), ciudad))
    return jsonify(response_body), 200

@api.route("/ciudad_por_pais/<int:pais_id>", methods=['GET'])
def ciudad_por_pais(pais_id):
    ciudad = Ciudad.query.filter_by(id_pais = pais_id).all()
    if ciudad == []:
        return jsonify({"msg": "No existen ciudades para mostrar"}), 404
    response_body = list(map(lambda ciudad: ciudad.serialize(), ciudad))
    return jsonify(response_body), 200

@api.route("/ruta", methods=['GET'])
def handle_rutas():
    ruta = Rutas.query.all()
    if ruta == []:
        return jsonify({"msg": "No hay rutas para mostrar"})
    response_body = list(map(lambda ruta: ruta.serialize(), ruta))
    return jsonify(response_body), 200

@api.route("/ruta/<int:ruta_id>", methods=['GET'])
def ruta_por_id(ruta_id):
    ruta = Rutas.query.filter_by(ruta_id=ruta_id).first()
    if ruta is None:
        return jsonify({"msg": "No hay rutas para mostrar"}), 404
    return jsonify(ruta.serialize()), 200

@api.route("/tour_por_ciudad/<int:ciudad_id>", methods=['GET'])
def tour_por_ciudad(ciudad_id):
    ruta = Rutas.query.filter_by(id_ciudad = ciudad_id).all()
    if ruta == []:
        return jsonify({"msg": "No existen ciudades para mostrar"}), 404
    response_body = list(map(lambda ruta: ruta.serialize(), ruta))
    return jsonify(response_body), 200

@api.route("/por_visitar/<int:id_usuario>", methods=['GET', 'POST'])
def handle_por_visitar(id_usuario):
    if request.method == 'POST':
        ruta = json.loads(request.data)
        nueva_ruta = Por_Visitar(
            visitada = False,
            id_usuario = id_usuario,
            id_ruta = ruta['id_ruta']
        )
        db.session.add(nueva_ruta)
        db.session.commit()
        return jsonify({"msg": "Ruta agregada corrctamente a tus rutas"}), 200
    ruta = db.session.query(Por_Visitar, Rutas).filter_by(id_usuario=id_usuario).join(Rutas).all()
    if ruta == []:
        return jsonify({"msg": "No existen rutas en tus rutas"}), 404
    response_body = list(map(lambda x: {
        "id": x[0].id,
        "id_usuario": x[0].id_usuario,
        "visitada": x[0].visitada,
        "id_ruta": x[1].id,
        "nombre_de_ruta": x[1].nombre_de_ruta,
        "distancia": x[1].distancia,
        "tiempo_de_recorrido": x[1].tiempo_de_recorrido,
        "imagen": x[1].imagen,
        "id_ciudad": x[1].id_ciudad,
        "descripcion": x[1].descripcion
    }, ruta))
    return jsonify(response_body), 200

@api.route("/mis_rutas/<int:id_ruta>/<int:id_usuario>", methods=['GET', 'DELETE'])
def handle_por_visitar_id(id_ruta, id_usuario):
    por_visitar = Por_Visitar.query.filter_by(id_ruta=id_ruta, id_usuario=id_usuario).first()
    if por_visitar is None:
        return jsonify({"msg": "No existe la ruta que deseas eliminar"}), 404
    if request.method == 'DELETE':
        db.session.delete(por_visitar)
        db.session.commit()
        return jsonify({"msg": "Ruta eliminada de tus rutas"}), 200
    if por_visitar is not None:
        return jsonify(por_visitar.serialize()), 200

#Rutas protegidas

@api.route('/paises', methods=['POST'])
@jwt_required()
def agregar_pais():
    current_user = get_jwt_identity()
    if current_user is not None:
        pais = json.loads(request.data)
        nuevo_pais = Pais(
            nombre_de_pais=pais['nombre_de_pais']
        )
        db.session.add(nuevo_pais)
        db.session.commit()
        return jsonify({"msg": "Pais agregado correctamente"}), 200
    else:
        return jsonify({"msg": "No estas autorizado para hacer esto"}), 401

@api.route("/paises/<int:pais_id>", methods=['PUT', 'DELETE', 'GET'])
@jwt_required()
def editar_eliminar_pais(pais_id):
    current_user = get_jwt_identity()
    if current_user is not None:
        pais = Pais.query.filter_by(id = pais_id).first()
        if request.method == 'DELETE':
            db.session.delete(pais)
            db.session.commit()
            return jsonify({"msg": "Pais eliminado correctamente"}), 200
        if request.method == 'PUT':
            body = json.loads(request.data)
            pais.nombre_de_pais = body['nombre_de_pais']
            db.session.commit()
            return jsonify({"msg": "Pais modificado correctamente"}), 200
        if pais is not None:
            return jsonify(pais.serialize()), 200
        else:
            return jsonify({"msg": "Ese pais no existe"}), 404
    else:
        return jsonify({"msg": "No estas autorizado para realizar esta accion"}), 401
    
@api.route("/ciudad", methods=['POST'])
@jwt_required()
def agregar_ciudad():
    current_user = get_jwt_identity()
    if current_user is not None:
        ciudad = json.loads(request.data)
        nueva_ciudad = Ciudad(
            nombre_de_ciudad = ciudad['nombre_de_ciudad'],
            id_pais = ciudad['id_pais']
        )
        db.session.add(nueva_ciudad)
        db.session.commit()
        return jsonify({"msg": "Ciudad agregada correctamente"}), 200
    else:
        return jsonify({"msg": "No estas autorizado para realizar esta accion"}), 401

@api.route("/ciudad/<int:ciudad_id>", methods=['DELETE', 'PUT'])
@jwt_required()
def editar_eliminar_ciudad(ciudad_id):
    current_user = get_jwt_identity()
    if current_user is not None:
        ciudad = Ciudad.query.filter_by(id = ciudad_id).first()
        if request.method == 'DELETE':
            db.session.delete(ciudad)
            db.session.commit()
            return jsonify({"msg": "La ciudad ha sido correctamente eliminada"}), 200
        if request.method == 'PUT':
            body = json.loads(request.data)
            if "nombre_de_ciudad" in body:
                ciudad.nombre_de_ciudad = body['nombre_de_ciudad']
            if "id_pais" in body:
                ciudad.id_pais = body['id_pais']
            db.session.commit()
            return jsonify({"msg": "Ciudad modificada correctamente"}), 200
        if ciudad is not None:
            return jsonify(ciudad.serialize()), 200
        else:
            return jsonify({"msg": "Esa ciudad no existe"}), 404
    else:
        return jsonify({"msg": "No estas autorizado para realizar esto"}), 401

@api.route("/ruta", methods=['POST'])
@jwt_required()
def agregar_ruta():
    current_user = get_jwt_identity()
    if current_user is not None:
        ruta = json.loads(request.data)
        nueva_ruta = Rutas(
            nombre_de_ruta = ruta['nombre_de_ruta'],
            distancia = ruta['distancia'],
            tiempo_de_recorrido = ruta['tiempo_de_recorrido'],
            imagen = ruta['imagen'],
            id_ciudad = ruta['id_ciudad']
        )
        db.session.add(nueva_ruta)
        db.session.commit()
        return jsonify({"msg": "Ruta creada correctamente"}), 200
    else:
        return jsonify({"msg": "No estas autorizado para realizar esta accion"}), 401

@api.route("/ruta/<int:ruta_id>", methods=['PUT', 'DELETE'])
@jwt_required()
def editar_eliminar_ruta(ruta_id):
    current_user = get_jwt_identity()
    if current_user is not None:
        ruta = Rutas.query.filter_by(id = ruta_id).first()
        if request.method == 'DELETE':
            db.session.delete(ruta)
            db.session.commit()
            return jsonify({"msg": "Ruta eliminada correctamente"}), 200
        if request.method == 'PUT':
            body = json.loads(request.data)
            if "nombre_de_ruta" in body:
                ruta.nombre_de_ruta = body['nombre_de_ruta']
            if "distancia" in body:
                ruta.distancia = body['distancia']
            if "tiempo_de_recorrido" in body:
                ruta.tiempo_de_recorrido = body['tiempo_de_recorrido']
            if "imagen" in body:
                ruta.imagen = body['imagen']
            if "id_ciudad" in body:
                ruta.id_ciudad = body['id_ciudad']
            db.session.commit()
            return jsonify({"msg": "Ruta modificada correctamente"})
        if ruta is not None:
            return jsonify(ruta.serialize()), 200
        else:
            return jsonify({"msg": "Esa ruta no existe"}), 404
    else:
        return jsonify({"msg": "No estas autorizado para realizar esto"}), 401

@api.route("/preference", methods=['POST'])
def preference():
    body = json.loads(request.data)
    plan = body["plan"]
    # Crea un ítem en la preferencia
    preference_data = {
        "items": [
            {
                "title": "PaTuristear plan",
                "quantity": 1,
                "unit_price": plan,
            }
        ],
        "auto_return": "approved",
        "back_urls": {
            "failure": "https://ideal-memory-qwq5w5556vv2xqpj-3000.app.github.dev",
            "pending": "https://ideal-memory-qwq5w5556vv2xqpj-3000.app.github.dev",
            "success": "https://ideal-memory-qwq5w5556vv2xqpj-3000.app.github.dev"
        },
        "payer": {
            "email": "test_user_94708656@testuser.com"
        }
    }

    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]
    return preference, 200

@api.route("/ciudades",methods=["GET"])
def get_ciudades():
    ciudad = db.session.query(Ciudad,Pais).join(Pais).all()
    if ciudad == []:
        return jsonify({"msg": "No existen ciudades para mostrar"}), 404
    response_body = list(map(lambda ciudad: {
        "idCiudad":ciudad[0].id,
        "nombre_de_ciudad":ciudad[0].nombre_de_ciudad,
        "idPais":ciudad[1].id,
        "nombre_de_pais":ciudad[1].nombre_de_pais,
    }, ciudad))
    return jsonify(response_body), 200

