import requests
import json
import os

from flask import Flask, render_template
from jinja2 import FileSystemLoader
from config import Config

static_path = os.path.join(os.path.dirname(__file__), 'front/build/static')
app = Flask(__name__, static_url_path='/static', static_folder=static_path)
app.jinja_loader = FileSystemLoader(os.path.join(os.path.dirname(__file__),
                                    'front/build'))
config = Config()
base_url = 'http://'

@app.route('/usages')
def get_usages():
    results = {}
    for server in config.get_servers():
        address = server['address']
        port = server['port']
        url = base_url + address
        response = requests.get(base_url + address + ':' + str(port))
        data = json.loads(response.text)
        results[server['name']] = data
    return json.dumps(results)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888)
