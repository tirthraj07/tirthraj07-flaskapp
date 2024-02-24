from flask import Blueprint, render_template

pokedex_bp = Blueprint('Pokedex', __name__)


@pokedex_bp.route('/')
def home():
    return render_template('projects/Pokedex/index.html')