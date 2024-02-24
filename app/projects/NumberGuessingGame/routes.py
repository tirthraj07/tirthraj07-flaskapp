from flask import Blueprint, render_template

ngg_bp = Blueprint('NumberGuessingGame', __name__)


@ngg_bp.route('/')
def home():
    return render_template('projects/NumberGuessingGame/index.html')