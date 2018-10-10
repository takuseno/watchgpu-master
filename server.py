import requests
import json

from flask import Flask
from flask import Blueprint
from config import Config

app = Flask(__name__, static_folder='./front/build', static_url_path='/public')
assets = Blueprint('static', __name__, static_url_path='/static',
                   static_folder='./front/build/static')
app.register_blueprint(assets)
config = Config()
base_url = 'http://'

@app.route('/usages')
def index():
    results = {}
    for server in config.get_servers():
        address = server['address']
        port = server['port']
        url = base_url + address
        response = requests.get(base_url + address + ':' + str(port))
        data = json.loads(response.text)
        results[server['name']] = data
    return json.dumps(results)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888)
