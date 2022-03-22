import json
from unittest import result
from bs4 import BeautifulSoup
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")


@app.route("/test", methods=["POST"])
def test():
    output = request.get_json()
    print(output)

app.run(debug=True)