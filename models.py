from email.policy import default
from app import app
from extensions import db

class Cards(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     title=db.Column(db.Text,nullable=False)
     description=db.Column(db.Text,nullable=False)
     Mebleg=db.Column(db.String(255), default="Mebleg")
     mebleg_d=db.Column(db.String(255))
     Muddet=db.Column(db.String(255), default="Muddet")
     Muddet_d=db.Column(db.String(255))
     faiz=db.Column(db.String(255), default="Illik faiz derecesi")
     faiz_d=db.Column(db.String(255))
     url=db.Column(db.Text,nullable=False)
    
     def __repr__(self):
         return self.title
  
       
     def save(self):
         db.session.add(self)
         db.session.commit()
class Credit(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     title=db.Column(db.Text,nullable=False)
     description=db.Column(db.Text,nullable=False)
     Muddet=db.Column(db.String(255), default="Muddet")
     Muddet_d=db.Column(db.String(255))
     valyuta=db.Column(db.String(255), default="Valyuta")
     valyuta_d=db.Column(db.String(255))
     Cashback=db.Column(db.String(255),default="Cashback")
     Cashback_d=db.Column(db.String(255))
     url=db.Column(db.Text,nullable=False)
     def __repr__(self):
         return self.title
     def save(self):
         db.session.add(self)
         db.session.commit()