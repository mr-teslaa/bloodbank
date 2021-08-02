from datetime import datetime
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from bloodbank import app
from bloodbank import db
from bloodbank import login_manager
from flask_login import UserMixin

from flask_migrate import Migrate
migrate=Migrate(app, db)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    username = db.Column(db.String(20))
    mobile = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    lastdate = db.Column(db.DateTime, default=datetime.utcnow)
    numberofdonation = db.Column(db.String(1000))
    image_file = db.Column(db.String(20), nullable=False, default='default.png')
    password = db.Column(db.String(60), nullable=False)
    bloodgroup = db.Column(db.String(20), nullable=False)
    division = db.Column(db.String(20), nullable=False)
    district = db.Column(db.String(20), nullable=False)
    upazila = db.Column(db.String(20), nullable=False)

    def get_reset_token(self, expires_sec=3600):
        s = Serializer(app.config['SECRET_KEY'], expires_sec)
        return s.dumps({'user_id': self.id}).decode('utf-8')

    @staticmethod
    def verify_reset_token(token):
        s = Serializer(app.config['SECRET_KEY'])
        try:
            user_id = s.loads(token)['user_id']
        except:
            return None
        return User.query.get(user_id)

    def __repr__(self):
        return f"User('{self.name}', '{self.email}', '{self.image_file}')"
