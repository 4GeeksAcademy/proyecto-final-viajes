from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(45), unique=False, nullable=False)
    apellidos = db.Column(db.String(45), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    edad = db.Column(db.Integer, unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    fecha_de_registro = db.Column(db.Date, unique=False, nullable=False)
    pais_de_residencia = db.Column(db.String(45), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "email": self.email,
            "edad": self.edad,
            "fecha_de_registro": self.fecha_de_registro,
            "pais_de_residencia": self.pais_de_residencia
            # do not serialize the password, its a security breach
        }
    
class Pais(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre_de_pais = db.Column(db.String(45), unique=True, nullable=False)

    def __repr__(self):
        return f'<Pais {self.nombre_de_pais}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre_de_pais": self.nombre_de_pais
        }        