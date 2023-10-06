from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
app.debug = True
CORS(app)

@app.route('/home', methods=['POST'])
def post():
    data = request.get_json()  # Obtenha os dados JSON da solicitação POST
    print(data)  # Exiba os dados recebidos no console do servidor
    return 'Dados recebidos com sucesso'

if __name__ == '__main__':
    app.run()