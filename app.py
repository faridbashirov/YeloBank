from flask import Flask

app = Flask(__name__,static_folder="assets")

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123@127.0.0.1:3307/Yelobank?charset=utf8mb4_ai_ci'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] =True


    

if __name__ == "__main__":
   
    from extensions import *
    from controller import *
    from models import *
    db.init_app(app)
    migrate.init_app(app)
    
    app.run(port=5000,debug=True)
