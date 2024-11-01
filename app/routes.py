from flask import Flask, Blueprint, render_template, request, redirect, Response, send_from_directory, jsonify, request
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
    version = request.args.get('version')
    if version == "1": return send_from_directory('./resume','first-year-resume.pdf')
    elif version == "2": return send_from_directory('./resume','second-year-resume.pdf')

    return send_from_directory('./resume','TirthrajMahajan_Resume.pdf')  

@main_bp.route('/lp1')
def assignments():
    assignment = request.args.get('assignment')
    if assignment == "1": return send_from_directory('./lp1', '01-pass1-assembler.zip')
    elif assignment == "2": return send_from_directory('./lp1', '02-pass2-assembler.zip')
    elif assignment == "3": return send_from_directory('./lp1', '03-pass1-macroprocessor.zip')
    elif assignment == "4": return send_from_directory('./lp1', '04-pass2-macroprocessor.zip')
    elif assignment == "5": return send_from_directory('./lp1', '05-scheduling.zip')
    #elif assignment == "6": return send_from_directory('./lp1', '')
    elif assignment == "7": return send_from_directory('./lp1', '07-multi-threaded-echo-server.zip')
    elif assignment == "8": return send_from_directory('./lp1', '08-rpc-mechanism.zip')
    elif assignment == "9": return send_from_directory('./lp1', '09-election-algorithms.zip')
    return jsonify({"syntax":"assignment=?"})


@main_bp.route('/cv2')
def resume2():  # Type-docx
    return send_from_directory('./resume','TirthrajMahajan_Resume.docx')  

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
