const panel = document.getElementById('panel');

let flag = 0;
panel.addEventListener('click', function(event) {
    let target = event.target;
    let checkClass = !target.classList.contains('red') && !target.classList.contains('black');
    if (!checkClass){
        return;
    }
    if (flag === 0){
        target.classList.add('black');
        flag = 1
    } else {
        target.classList.add('red');
        flag = 0;
    }
    game()
});

function game (){
    const one = document.getElementById('1');
    const two = document.getElementById('2');
    const three = document.getElementById('3');
    const four = document.getElementById('4');
    const five = document.getElementById('5');
    const six = document.getElementById('6');
    const seven = document.getElementById('7');
    const eight = document.getElementById('8');
    const nine = document.getElementById('9');

    if ((one.className === 'black') && (two.className === 'black') && (three.className === 'black')){
        alert('победа крестиков');
    }
    if ((one.className === 'red') && (two.className === 'red') && (three.className === 'red')){
        alert('победа ноликов');
    }
    if ((four.className === 'black') && (five.className === 'black') && (six.className === 'black')){
        alert('победа крестиков');
    }
    if ((four.className === 'red') && (five.className === 'red') && (six.className === 'red')){
        alert('победа ноликов');
    }
    if ((seven.className === 'black') && (eight.className === 'black') && (nine.className === 'black')){
        alert('победа крестиков');
    }
    if ((seven.className === 'red') && (eight.className === 'red') && (nine.className === 'red')){
        alert('победа ноликов');
    }
    if ((one.className === 'black') && (four.className === 'black') && (seven.className === 'black')){
        alert('победа крестиков');
    }
    if ((one.className === 'red') && (four.className === 'red') && (seven.className === 'red')){
        alert('победа ноликов');
    }
    if ((two.className === 'black') && (five.className === 'black') && (eight.className === 'black')){
        alert('победа крестиков');
    }
    if ((two.className === 'red') && (five.className === 'red') && (eight.className === 'red')){
        alert('победа ноликов');
    }
    if ((three.className === 'black') && (six.className === 'black') && (nine.className === 'black')){
        alert('победа крестиков');
    }
    if ((three.className === 'red') && (six.className === 'red') && (nine.className === 'red')){
        alert('победа ноликов');
    }
    if ((one.className === 'black') && (five.className === 'black') && (nine.className === 'black')){
        alert('победа крестиков');
    }
    if ((one.className === 'red') && (five.className === 'red') && (nine.className === 'red')){
        alert('победа ноликов');
    }
    if ((three.className === 'black') && (five.className === 'black') && (seven.className === 'black')){
        alert('победа крестиков');
    }
    if ((three.className === 'red') && (five.className === 'red') && (seven.className === 'red')){
        alert('победа ноликов');
    }
}