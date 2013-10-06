/**
 * This shows some of the basic things we can do with JavaScript
 */
document.addEventListener('DOMContentLoaded', function() {

    //Add a click handler to the #click element
    document.getElementById('click').addEventListener('click', function() {
        alert('Hello');
    });

    //This button will ask a question
    document.getElementById('question').addEventListener('click', function() {
        var name = prompt('Whats your name?');

        document.getElementById('answer').innerText = 'Hi there ' + name;
    });

    //This form will double any number
    document.getElementById('maths').addEventListener('submit', function(e) {
        e.preventDefault();

        var number = document.getElementById('number').value;
        var double = number * 2;
        alert('Your number doubled is: ' + double);
    });

    document.getElementById('if').addEventListener('click', function() {
        var cool = prompt('Are you cool?');

        if(cool == 'yes') {
            alert('Nice!');
        }
        else {
            alert('Ah...');
        }
    });

    //This button will write 'no' a hundred times
    document.getElementById('loop').addEventListener('click', function() {
        var i,
            output = '';

        for(i = 0;i < 100;i++) {
            output += 'No! ';
        }

        document.getElementById('many').innerText += output;
    });

    document.getElementById('stop').addEventListener('click', function() {
        var word,
            wrongWords = document.getElementById('wrongWords');

        do {
            word = prompt('Whats the magic word?');
            wrongWords.innerHTML += word + '<br>';
        }
        while(word != 'stop');
    });
});
