import json
from unittest import result
from bs4 import BeautifulSoup
from flask import request
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # return render_template("popup.html")
    return 0

@app.route("/test", methods=["POST"])
def test():
    statement = request.args.get('value')
    print(statement)
    

app.run()