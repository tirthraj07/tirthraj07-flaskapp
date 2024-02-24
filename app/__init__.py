from flask import Flask, Blueprint, url_for, send_from_directory



def create_app():
    app = Flask(__name__)

    from .routes import main_bp
    app.register_blueprint(main_bp)

    from .projects.routes import projects_bp
    app.register_blueprint(projects_bp, url_prefix="/projects")

    return app

if __name__ == '__main__':
    app = create_app()
    app.run()