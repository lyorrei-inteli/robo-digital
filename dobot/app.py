from flask import Flask, make_response, jsonify
from services.dobot import Dobot

app = Flask(__name__)

dobot_instance = Dobot()

dobot_instance.start_connection()

@app.route('/get_position')
def get_position():
    try:
        position = dobot_instance.device.pose()
    except:
        return "Não foi possível pegar a posição do robo"
       
    return make_response(jsonify(position), 200)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3001, debug=True)