"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt

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

@api.routes("/login", ['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    pw_hash = bcrypt.generate_password_hash(password)
    user_pw = User.query.filter_by(password=pw_hash).first()
    bcrypt.check_password_hash(pw_hash, user_pw)
    user_exist = User.query.filter_by(email=email, password=pw_hash).first()
    if user_exist:
        access_token = create_access_token(identity=email)
        return jsonify({"token": access_token}), 200
    else:
        return jsonify({"msg": "Usuario o contraseña incorrectos"})
    
