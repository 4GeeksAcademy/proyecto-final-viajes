from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(45), unique=False, nullable=False)
    apellidos = db.Column(db.String(45), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    edad = db.Column(db.Integer, unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    fecha_de_registro = db.Column(db.String(10), unique=False, nullable=False)
    pais_de_residencia = db.Column(db.String(45), unique=False, nullable=False)
    rol = db.Column(db.Integer)
    #0 = user, 1 = admin
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<{self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "email": self.email,
            "edad": self.edad,
            "fecha_de_registro": self.fecha_de_registro,
            "pais_de_residencia": self.pais_de_residencia,
            "rol": self.rol
            # do not serialize the password, its a security breach
        }
    
class Pais(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre_de_pais = db.Column(db.String(45), unique=True, nullable=False)

    def __repr__(self):
        return '<%r>' % self.nombre_de_pais
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre_de_pais": self.nombre_de_pais
        }
    
class Ciudad(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre_de_ciudad = db.Column(db.String(45), unique=False, nullable=False)
    id_pais = db.Column(db.Integer, db.ForeignKey("pais.id"))
    pais = db.relationship('Pais')

    def __repr__(self):
        return f'<{self.nombre_de_ciudad}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre_de_ciudad": self.nombre_de_ciudad,
            "id_pais": self.id_pais
        }

class Rutas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre_de_ruta = db.Column(db.String(45), unique=False, nullable=False)
    distancia = db.Column(db.String(10), unique=False, nullable=False)
    imagen = db.Column(db.String(400), unique=False, nullable=True)
    descripcion = db.Column(db.String(1000))
    tiempo_de_recorrido = db.Column(db.String(20), unique=False, nullable=False)
    id_ciudad = db.Column(db.Integer, db.ForeignKey('ciudad.id'))
    ciudad = db.relationship('Ciudad')

    def __repr__(self):
        return f'<{self.nombre_de_ruta}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre_de_ruta": self.nombre_de_ruta,
            "distancia": self.distancia,
            "tiempo_de_recorrido": self.tiempo_de_recorrido,
            "imagen": self.imagen,
            "id_ciudad": self.id_ciudad,
            "descripcion": self.descripcion
        }
    
class Por_Visitar(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    visitada = db.Column(db.Boolean, nullable=False, unique=False)
    id_usuario = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User')
    id_ruta = db.Column(db.Integer, db.ForeignKey('rutas.id'))
    ruta = db.relationship('Rutas')

    def __repr__(self):
        return f'<{self.ruta}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "visitada": self.visitada,
            "id_usuario": self.id_usuario,
            "id_ruta": self.id_ruta
        }