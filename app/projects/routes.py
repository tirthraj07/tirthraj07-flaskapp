from flask import Blueprint, render_template

projects_bp = Blueprint('projects', __name__)

from .StarWarsAPI.routes import starwars_bp
projects_bp.register_blueprint(starwars_bp, url_prefix='/starwars')

from .PostfixConverterAndEvaluator.routes import pce_bp
projects_bp.register_blueprint(pce_bp, url_prefix='/converterandevaluator')

from .Pokedex.routes import pokedex_bp
projects_bp.register_blueprint(pokedex_bp, url_prefix='/pokedex')

from .RockPaperScissors.routes import rps_bp
projects_bp.register_blueprint(rps_bp, url_prefix='/rockpaperscissors')

from .NumberGuessingGame.routes import ngg_bp
projects_bp.register_blueprint(ngg_bp, url_prefix='/guessthenumber')


@projects_bp.route('/')
def home():
    return render_template('projects/projects.html')