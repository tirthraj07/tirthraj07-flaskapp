from flask import Blueprint, render_template

rps_bp = Blueprint('RockPaperScissors', __name__)


@rps_bp.route('/')
def home():
    return render_template('projects/RockPaperScissors/index.html')