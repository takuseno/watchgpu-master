import json

class Config:
    def __init__(self, file='config.json'):
        with open(file, 'r') as f:
            self.data = json.loads(f.read())

    def get_servers(self):
        return self.data['servers']
