from flask import Flask, Blueprint, render_template, request, redirect, Response, send_from_directory, jsonify
import os
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

@main_bp.route('/cv2')
def resume2():  # Without Photo
    return send_from_directory('./resume','resume2.pdf')  

@main_bp.route('/firebaseConfig')
def fbConfig():
    firebaseConfig = {
        'apiKey': os.getenv('FIREBASE_API_KEY'),
        'authDomain': os.getenv('FIREBASE_AUTHDOMAIN'),  # type: ignore
        'projectId': os.getenv('FIREBASE_PROJECT_ID'),
        'storageBucket': os.getenv('FIREBASE_STORAGE_BUCKET'),
        'messagingSenderId': os.getenv('FIREBASE_MESSAGING_SENDER_ID'),
        'appId': os.getenv('FIREBASE_APPID')
    }

    return jsonify(firebaseConfig),200
