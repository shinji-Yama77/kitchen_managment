from flask import Flask
from flask_cors import CORS


app = Flask(__name__)

# allow react server to access flask data, /* applied to all routes in flask

CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

from flask_server import routes


