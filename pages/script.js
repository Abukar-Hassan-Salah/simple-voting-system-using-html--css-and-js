let votesA = 0;
let votesB = 0;

function vote(option) {
    if (option === 'A') {
        votesA++;
        document.getElementById('countA').innerText = votesA + ' votes';
    } else if (option === 'B') {
        votesB++;
        document.getElementById('countB').innerText = votesB + ' votes';
    }
}
