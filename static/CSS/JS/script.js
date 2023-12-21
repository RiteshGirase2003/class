window.onload = function() {
    let message=`
    <div class="response">
        <p> Wel-come to K2 Computer and Maths Academy.<br> How can I help you ? </p>
    </div>

    `;
    document.querySelector(".msg-container").innerHTML += message;

};

document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('send-button').addEventListener('click', function () {
        request();
    });
});

function request()
{
    const inputText = document.getElementById('inputText').value;
    if (inputText === '')
    {
        alert('No Message Type .... ');
        document.getElementById('inputText').value='';
        document.getElementById('inputText').focus();

    }
    else{
        let result=``;
        result=`
            <div class="request">
                <p> ${inputText} </p>
            </div>
        
        `;
        
        
        document.querySelector(".msg-container").innerHTML += result;
        response();
    }
}



function response() {
    // function callPythonFunction() {
    const inputText = document.getElementById('inputText').value;
   
    // Fetch API to make a POST request to your Flask endpoint
    fetch('/api/call-python-function', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
    })
    .then(response => response.json())
    .then(data => {

        
        let message=`
            <div class="response">
                <p> ${data.result} </p>
            </div>
        
        `;
        document.querySelector(".msg-container").innerHTML += message;


       
    })
    .catch(error => {
        console.error('Error:', error);
    });
    document.getElementById('inputText').value='';
    document.getElementById('inputText').focus();
}