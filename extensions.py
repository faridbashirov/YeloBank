from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from app import app

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123@127.0.0.1:3307/Yelobank'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] =True
app.config["SECRET_KEY"]="myproject"

db=SQLAlchemy(app)
migrate = Migrate(app, db)