from flask import Flask, Blueprint, render_template, request, redirect, Response, send_from_directory

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def home():
    return render_template('index.html')

@main_bp.route('/keep-alive')
def keep_alive():
    return 'Server is Alive'

@main_bp.route('/cv')
def resume():
    return send_from_directory('./resume','resume.pdf')  
