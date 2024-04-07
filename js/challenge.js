document.addEventListener('DOMContentLoaded', function () {
    let timerInterval;
    let counter = 0;
    let likes = {};

    // Timer incrementation
    function startTimer() {
        timerInterval = setInterval(function () {
            counter++;
            document.getElementById('counter').innerText = counter;
        }, 1000);
    }

    startTimer(); // Start the timer when the page loads

    // Manual counter increment/decrement
    document.getElementById('plus').addEventListener('click', function () {
        counter++;
        document.getElementById('counter').innerText = counter;
    });

    document.getElementById('minus').addEventListener('click', function () {
        counter--;
        document.getElementById('counter').innerText = counter;
    });

    // Like button functionality
    document.getElementById('heart').addEventListener('click', function () {
        if (!likes[counter]) {
            likes[counter] = 1;
        } else {
            likes[counter]++;
        }
        const likeItem = document.createElement('li');
        likeItem.innerText = `${counter} has ${likes[counter]} likes`;
        document.querySelector('.likes').appendChild(likeItem);
    });

    // Pause button functionality
    document.getElementById('pause').addEventListener('click', function () {
        clearInterval(timerInterval);
        document.getElementById('pause').disabled = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('heart').disabled = true;
        document.getElementById('submit').disabled = true;
        document.getElementById('pause').classList.add('button-red');
        document.getElementById('resume').style.display = 'inline-block';
    });

    // Resume button functionality
    document.getElementById('resume').addEventListener('click', function () {
        startTimer();
        document.getElementById('pause').disabled = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('minus').disabled = false;
        document.getElementById('heart').disabled = false;
        document.getElementById('submit').disabled = false;
        document.getElementById('pause').classList.remove('button-red');
        document.getElementById('resume').style.display = 'none';
    });

    // Comment submission
    document.getElementById('comment-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const comment = document.getElementById('comment-input').value;
        const commentItem = document.createElement('li');
        commentItem.innerText = comment;
        document.getElementById('list').appendChild(commentItem);
        document.getElementById('comment-input').value = '';
    });
});
