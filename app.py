from flask import Flask, render_template, request, jsonify
import ai_chatbot
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/call-python-function', methods=['POST'])
def call_python_function():
    data = request.json
    input_text = data.get('text', '')
    
    # Call your Python function with the input text
    result = ai_chatbot.main(input_text)
    

    # Return the result as JSON
    return jsonify({'result': result})


if __name__ == '__main__':
    app.run(debug=True)
