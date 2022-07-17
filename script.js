console.log('This is for Tic Tac Toe');

//Winning Logic
function checkwin() {
    if ((document.getElementById('b1').innerText === document.getElementById('b2').innerText) && (document.getElementById('b2').innerText === document.getElementById('b3').innerText) && (document.getElementById('b1').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    } else if ((document.getElementById('b4').innerText === document.getElementById('b5').innerText) && (document.getElementById('b5').innerText === document.getElementById('b6').innerText) && (document.getElementById('b4').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    } else if ((document.getElementById('b7').innerText === document.getElementById('b8').innerText) && (document.getElementById('b8').innerText === document.getElementById('b9').innerText) && (document.getElementById('b7').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    }

    else if ((document.getElementById('b1').innerText === document.getElementById('b5').innerText) && (document.getElementById('b5').innerText === document.getElementById('b9').innerText) && (document.getElementById('b1').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    }
    else if ((document.getElementById('b3').innerText === document.getElementById('b5').innerText) && (document.getElementById('b5').innerText === document.getElementById('b7').innerText) && (document.getElementById('b3').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    }

    else if ((document.getElementById('b1').innerText === document.getElementById('b4').innerText) && (document.getElementById('b4').innerText === document.getElementById('b7').innerText) && (document.getElementById('b4').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    } else if ((document.getElementById('b2').innerText === document.getElementById('b5').innerText) && (document.getElementById('b5').innerText === document.getElementById('b8').innerText) && (document.getElementById('b2').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    } else if ((document.getElementById('b3').innerText === document.getElementById('b6').innerText) && (document.getElementById('b6').innerText === document.getElementById('b9').innerText) && (document.getElementById('b3').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    }
}

//Step 2: Making a string with alternative X and O.

let XorO;
document.querySelector('#b1').addEventListener('click', function () {
    if (XorO == 'X') {
        XorO = 'O';
        document.querySelector('#b1').innerText = XorO;
    } else {
        XorO = 'X';
        document.querySelector('#b1').innerText = XorO;
    }
    checkwin();
})

document.querySelector('#b2').addEventListener('click', function () {
    if (XorO == 'X') {
        XorO = 'O';
        document.querySelector('#b2').innerText = XorO;
    } else {
        XorO = 'X';
        document.querySelector('#b2').innerText = XorO;
    }
    checkwin();
})

document.querySelector('#b3').addEventListener('click', function () {
    if (XorO == 'X') {
        XorO = 'O';
        document.querySelector('#b3').innerText = XorO;
    } else {
        XorO = 'X';
        document.querySelector('#b3').innerText = XorO;
    }
    checkwin();
})

document.querySelector('#b4').addEventListener('click', function () {
    if (XorO == 'X') {
        XorO = 'O';
        document.querySelector('#b4').innerText = XorO;
    } else {
        XorO = 'X';
        document.querySelector('#b4').innerText = XorO;
    }
    checkwin();
})

document.querySelector('#b5').addEventListener('click', function () {
    if (XorO == 'X') {
        XorO = 'O';
        document.querySelector('#b5').innerText = XorO;
    } else {
        XorO = 'X';
        document.querySelector('#b5').innerText = XorO;
    }
    checkwin();
})

document.querySelector('#b6').addEventListener('click', function () {
    if (XorO == 'X') {
        XorO = 'O';
        document.querySelector('#b6').innerText = XorO;
    } else {
        XorO = 'X';
        document.querySelector('#b6').innerText = XorO;
    }
    checkwin();
})

document.querySelector('#b7').addEventListener('click', function () {
    if (XorO == 'X') {
        XorO = 'O';
        document.querySelector('#b7').innerText = XorO;
    } else {
        XorO = 'X';
        document.querySelector('#b7').innerText = XorO;
    }
    checkwin();
})

document.querySelector('#b8').addEventListener('click', function () {
    if (XorO == 'X') {
        XorO = 'O';
        document.querySelector('#b8').innerText = XorO;
    } else {
        XorO = 'X';
        document.querySelector('#b8').innerText = XorO;
    }
    checkwin();
})

document.querySelector('#b9').addEventListener('click', function () {
    if (XorO == 'X') {
        XorO = 'O';
        document.querySelector('#b9').innerText = XorO;
    } else {
        XorO = 'X';
        document.querySelector('#b9').innerText = XorO;
    }
    checkwin();
})

//Reset
document.getElementById('resetbtn').addEventListener('click', function () {
    document.getElementById('b1').innerText = ''
    document.getElementById('b2').innerText = ''
    document.getElementById('b3').innerText = ''
    document.getElementById('b4').innerText = ''
    document.getElementById('b5').innerText = ''
    document.getElementById('b6').innerText = ''
    document.getElementById('b7').innerText = ''
    document.getElementById('b8').innerText = ''
    document.getElementById('b9').innerText = ''
    //document.getElementById('turnFor').innerHTML = 'X'
    XorO = 'O'
    document.getElementById('winner').innerText = 'This game is for two players who take turns marking the spaces in a three-by-three grid with "X" or "O". The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins.';
})

/*
//Turn for
document.querySelector('.margin').addEventListener('click', function () {
    if (XorO == 'X')
        document.querySelector('#turnFor').innerHTML = 'O';
    else {
        document.querySelector('#turnFor').innerHTML = 'X';
    }
})
*/