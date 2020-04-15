from utils.predict import predict
from flask import Flask, jsonify, request
from utils.upload import upload_file
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route('/',  methods=['POST'])
@cross_origin()
def classify():
    filename = upload_file(request.files['file'])
    res = predict(filename)
    return jsonify({'success': True, 'class': res})


if __name__ == '__main__':
    app.run(debug=True)
