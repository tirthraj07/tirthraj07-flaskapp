from flask import Flask, render_template, redirect, session, url_for

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('portfolio/portfolio.html')

@app.route('/keep-alive')
def keep_alive():
    return 'Server is alive'

@app.route('/projects')
def projects():
    return render_template('projects/projects.html')

#Add New Project App Routes here
@app.route('/projects/<project_name>')
def project(project_name):
    if project_name == 'starwars':
        return redirect('https://a874c400-df48-4fb6-bd71-fc8be5569d07-00-1s3v27kri7e9u.pike.replit.dev/')
    if project_name == 'converterandevaluator':
        return redirect('https://5e72066b-eb69-4bcb-ab36-78dd0e0cfd3b-00-ivx6fvaq550f.sisko.replit.dev/')
    if project_name == 'porfolio':
        return render_template('portfolio/portfolio.html')
    if project_name == 'aarogya':
        return redirect('https://3e8a8bf5-1a0c-426b-b99b-a5ff4be8819a-00-2df0mxtvt7u4d.asia-b.replit.dev/')
    if project_name == 'pokedex':
        return redirect('https://926bd42c-a2bb-4bf0-b730-3d851bf21f45-00-2p4au9x5hq3gv.asia-a.replit.dev/')
    if project_name == 'rockpaperscissors':
        return redirect('https://0db7e5d5-f165-4488-abb5-23c568f58988-00-2feq5un1tz855.sisko.replit.dev/')
    if project_name == 'guessthenumber':
        return redirect('https://0d17e48e-1343-4191-bee5-8b4ed9692e44-00-jatqcgepmxk5.pike.replit.dev/')
    return redirect('/projects')


app.run(host='0.0.0.0', port=81)
