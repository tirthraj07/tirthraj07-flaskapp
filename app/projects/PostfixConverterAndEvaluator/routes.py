from flask import Blueprint, render_template

pce_bp = Blueprint('PostfixConverterAndEvaluator', __name__)


@pce_bp.route('/')
def home():
    return render_template('projects/PostfixConverterAndEvaluator/index.html')

@pce_bp.route('/infixToPostfix')
def converter():
    return render_template('projects/PostfixConverterAndEvaluator/infixToPostfix.html')

@pce_bp.route('/postfixEvaluator')
def evaluator():
    return render_template('projects/PostfixConverterAndEvaluator/postfixEvaluator.html')