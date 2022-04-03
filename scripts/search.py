import json
from unittest import result
from bs4 import BeautifulSoup
from flask import request
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("popup.html")

@app.route("/test", methods=["POST"])
def test():
    data = request.get_json()
    data = jsonify(data)
    return data
    

app.run()