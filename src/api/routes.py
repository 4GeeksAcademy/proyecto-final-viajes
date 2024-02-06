"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pais, Rutas, Ciudad, Por_Visitar
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import json
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)
bcrypt = Bcrypt(api)

# Allow CORS requests to this API
CORS(api)


@api.route('/users', methods=['POST', 'GET'])
def handle_users():
    if request.method == "POST":
        user = json.loads(request.data)
        password = user['password']
        pw_hash = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(
            nombre=user['nombre'],
            apellidos=user['apellidos'],
            edad=user['edad'],
            email=user['email'],
            password=pw_hash,
            fecha_de_registro=user['fecha_de_registro'],
            pais_de_residencia=user['pais_de_residencia'],
            is_active=user['is_active']
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "Usuario creado correctamente"}), 200
    user = User.query.all()
    if user == []:
        return jsonify({"msg": "El usuario no existe"}), 404
    response_body = list(map(lambda user: user.serialize(), user))
    return jsonify(response_body), 200

@api.route('/users/<int: user_id>', methods=['GET', 'PUT', 'DELETE'])
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

@api.route("/login", ['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    user = User.query.filter_by(email=email).first()
    # pw_hash = bcrypt.generate_password_hash(password)
    # user_pw = User.query.filter_by(password=pw_hash).first()
    exist = bcrypt.check_password_hash(user.password, password)
    # user_exist = User.query.filter_by(email=email, password=pw_hash).first()
    if user and exist:
        access_token = create_access_token(identity=email)
        return jsonify({"token": access_token}), 200
    else:
        return jsonify({"msg": "Usuario o contraseña incorrectos"})
    
@api.route("/paises", ['GET'])
def handle_paises():
    pais = Pais.query.all()
    if pais == []:
        return jsonify({"msg": "No existen paises para mostrar"}), 404
    response_body = list(map(lambda pais: pais.serialize(), pais))
    return jsonify(response_body), 200

@api.route("/ciudad", ['GET'])
def handle_ciudad(pais):
    ciudad = Ciudad.query.filter_by(id_pais=pais)
    if ciudad == []:
        return jsonify({"msg": "No existen ciudades para mostrar"}), 404
    response_body = list(map(lambda ciudad: ciudad.serialize(), ciudad))
    return jsonify(response_body), 200

@api.route("/ruta", ['GET'])
def handle_rutas(ciudad):
    ruta = Rutas.query.filter(id_ciudad=ciudad)
    if ruta == []:
        return jsonify({"msg": "No hay rutas para mostrar"})
    response_body = list(map(lambda ruta: ruta.serialize(), ruta))
    return jsonify(response_body), 200

@api.route("/por_visitar", ['GET', 'POST'])
def handle_por_visitar():
    if request.method == 'POST':
        ruta = json.loads(request.data)
        nueva_ruta = Por_Visitar(
            visitada = False,
            id_usuario = ruta.id_usuario,
            id_ruta = ruta.id_ruta
        )
        db.session.add(nueva_ruta)
        db.session.commit()
        return jsonify({"msg": "Ruta agregada corrctamente a tus rutas"}), 200
    rutas = Por_Visitar.query.all()
    if rutas == []:
        return jsonify({"msg": "No existen rutas en tus rutas"}), 404
    response_body = list(map(lambda ruta: rutas.serialize(), ruta))
    return jsonify(response_body), 200

@api.route("/por_visitar/<int: por_visitar_id>", ['GET', 'PUT', 'DELETE'])
def handle_por_visitar_id(por_visitar_id):
    por_visitar = Por_Visitar.query.filter_by(id=por_visitar_id).first()
    if request.method == 'DELETE':
        db.session.delete(por_visitar)
        db.session.commit()
        return jsonify({"msg": "Ruta eliminada de tus rutas"}), 200
    if request.method == 'PUT':
        body = json.loads(request.data)
