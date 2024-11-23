from flask import Flask, request, jsonify

from flask_server import app



@app.route('/')
def home():
    return "hi"

@app.route('/example', methods=['GET'])
def example_route():
    return jsonify({"message": "Hello, Team"})

