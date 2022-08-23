document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener("click", function(){
        let weaponClick = this.getAttribute('data-type'); 
        
        runGame(weaponClick);
    });
           

}})

function runGame(weaponElection){
    let enemyElection=enemyWeapon();
    
    battle(weaponElection, enemyElection);

    displayUserWeapon(weaponElection);
    displayEnemyWeapon(enemyElection);
}

function battle(weapon1, weapon2){
    

    if(weapon1 === weapon2){
       document.getElementById('result-text').innerText="It's a draw! Play again.";
       document.getElementById('result').innerText='';
    }
    //Weapon election: rock
    else if(weapon1 === 'rock' && weapon2 === 'paper'){
       enemyWin(); 
       document.getElementById('result').innerText='Paper covers Rock';
    }
    else if(weapon1 === 'rock' && weapon2 === 'scissor'){
        userWin();
        document.getElementById('result').innerText= 'Rock crushes Scissors';
    }
    else if(weapon1 === 'rock' && weapon2 === 'lizard'){
        userWin();
        document.getElementById('result').innerText= 'Rock crushes Lizard';
    }
    else if(weapon1 === 'rock' && weapon2 === 'spock'){
        enemyWin();
        document.getElementById('result').innerText='Spock vaporizes Rock';
    }
    //weapon election: paper
    else if(weapon1 === 'paper' && weapon2 === 'rock'){
        userWin();
        document.getElementById('result').innerText= 'Paper covers Rock';
    }
    else if(weapon1 === 'paper' && weapon2 === 'scissor'){
        enemyWin();
        document.getElementById('result').innerText='Scissors cuts Paper';
    }
    else if(weapon1 === 'paper' && weapon2 === 'lizard'){
        enemyWin();
        document.getElementById('result').innerText= 'Lizard eats Paper';
    }
    else if(weapon1 === 'paper' && weapon2 === 'spock'){
        userWin();
        document.getElementById('result').innerText= 'Paper disproves Spock';
    }

    // Weapon election: scissor
    else if(weapon1 === 'scissor' && weapon2 === 'rock'){
        enemyWin();
        document.getElementById('result').innerText= 'Rock crushes Scissors';
    }
    else if(weapon1 === 'scissor' && weapon2 === 'paper'){
        userWin();
        document.getElementById('result').innerText= 'Scissors cuts Paper';
    }
    else if(weapon1 === 'scissor' && weapon2 === 'lizard'){
        userWin();
        document.getElementById('result').innerText= 'Scissors decapitates Lizard';
    }
    else if(weapon1 === 'scissor' && weapon2 === 'spock'){
        enemyWin();
        document.getElementById('result').innerText= 'Spock smashes Scissors';
    }
    // Weapon election: LIZARD
    else if(weapon1 === 'lizard' && weapon2 === 'rock'){
        enemyWin();
        document.getElementById('result').innerText='Rock crushes Lizard';
    }
    else if(weapon1 === 'lizard' && weapon2 === 'paper'){
        userWin();
        document.getElementById('result').innerText= 'Lizard eats Paper';
    }
    else if(weapon1 === 'lizard' && weapon2 === 'scissor'){
        enemyWin();
        document.getElementById('result').innerText= 'Scissors decapitates Lizard';
    }
    else if(weapon1 === 'lizard' && weapon2 === 'spock'){
        userWin();
        document.getElementById('result').innerText= 'Lizard poisons Spock';
    }
    //Weapon election: SPOCK
    else if(weapon1 === 'spock' && weapon2 === 'rock'){
        userWin();
        document.getElementById('result').innerText= 'Spock vaporizes Rock';
    }
    else if(weapon1 === 'spock' && weapon2 === 'paper'){
        enemyWin();
        document.getElementById('result').innerText= 'Paper disproves Spock';
    }
    else if(weapon1 === 'spock' && weapon2 === 'scissor'){
        userWin();
        document.getElementById('result').innerText='Spock smashes Scissors';
    }
    else if(weapon1 === 'spock' && weapon2 === 'lizard'){
        enemyWin();
        document.getElementById('result').innerText= 'Lizard poisons Spock';
    }
    else{
        alert('Unknow variable')
    }
}

function enemyWeapon(){
    weapons=['rock', 'paper', 'scissor', 'lizard', 'spock'];
    weaponChoice = weapons[Math.floor(Math.random()*weapons.length)];
    return weaponChoice;
}

function userWin(){
    let oldScore = parseInt(document.getElementById('user-life-counter').innerText);
    document.getElementById('user-life-counter').innerText = ++oldScore;
    document.getElementById('result-text').innerText = 'VICTORY';
}

function enemyWin(){
    let oldScore = parseInt(document.getElementById('enemy-life-counter').innerText);
    document.getElementById('enemy-life-counter').innerText = ++oldScore;
    document.getElementById('result-text').innerText = 'DEFEAT';
}

function displayUserWeapon(weapon){
    if (weapon === "rock") {
        document.getElementById('user-display').innerHTML=`<i class="fa fa-hand-rock-o"></i>`
    } else if (weapon === "paper") {
        document.getElementById('user-display').innerHTML=`<i  class="fa fa-hand-paper-o" aria-hidden="true"></i>`
    } else if (weapon === "scissor") {
        document.getElementById('user-display').innerHTML=`<i class="fa fa-hand-scissors-o" aria-hidden="true"></i>`
    } else if (weapon === "lizard") {
        document.getElementById('user-display').innerHTML=`<i class="fa fa-hand-lizard-o" aria-hidden="true"></i> `
    } else if (weapon === "spock") {
        document.getElementById('user-display').innerHTML=`<i class="fa fa-hand-spock-o" aria-hidden="true"></i>`
    } else {
        alert('Unknown weapon1');
}}

function displayEnemyWeapon(weapon){
    if (weapon === "rock") {
        document.getElementById('enemy-display').innerHTML=`<i class="fa fa-hand-rock-o"></i>`
    } else if (weapon === "paper") {
        document.getElementById('enemy-display').innerHTML=`<i  class="fa fa-hand-paper-o" aria-hidden="true"></i>`
    } else if (weapon === "scissor") {
        document.getElementById('enemy-display').innerHTML=`<i class="fa fa-hand-scissors-o" aria-hidden="true"></i>`
    } else if (weapon === "lizard") {
        document.getElementById('enemy-display').innerHTML=`<i class="fa fa-hand-lizard-o" aria-hidden="true"></i> `
    } else if (weapon === "spock") {
        document.getElementById('enemy-display').innerHTML=`<i class="fa fa-hand-spock-o" aria-hidden="true"></i>`
    } else {
        alert('Unknown weapon2');
}}