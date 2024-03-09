from app import create_app
from dotenv import main
app = create_app()
main.load_dotenv()
if __name__ == '__main__':
    app.run()