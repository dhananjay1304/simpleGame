const startGameBtn = document.getElementById('start-game-btn');

const start = function startGame() {
    console.log('Game is starting...!');
}

// const person = {
//     name:'Max',
//     greet: function greet(){
//         console.log('hallo there!');
//     }
// } 

// person.greet();

// startGame();

// console.log(typeof startGame)

startGameBtn.addEventListener('click', start);