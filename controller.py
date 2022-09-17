from flask import render_template,request,redirect

from app import app
from models import Cards
from models import Credit

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/credit")
def credit():
    card=Cards.query.all()
    return render_template("credit.html",card=card)

@app.route("/cards")
def  cards():
    credit=Credit.query.all()
    return render_template("cards.html",credit=credit)
