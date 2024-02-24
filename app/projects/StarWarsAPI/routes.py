from flask import Blueprint, render_template

starwars_bp = Blueprint('StarWarsAPI', __name__)


@starwars_bp.route('/')
def home():
    return render_template('projects/StarWarsAPI/index.html')