document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName('game-button');

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
       document.getElementById('result').innerText="Play again!";
       document.getElementById('result-text').innerText='DRAW';
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
    let health = document.getElementById("enemy-health")
    let logoUser=  document.getElementById('user-display');
    let logoEnemy = document.getElementById('enemy-display');
    health.value -= 10;
    document.getElementById('result-text').innerText = 'VICTORY';
    logoUser.style.color="green";
    logoEnemy.style.color="red";
    
}

function enemyWin(){
    let health = document.getElementById("user-health");
    let logoUser=  document.getElementById('user-display');
    let logoEnemy = document.getElementById('enemy-display');
    health.value -= 10;
    document.getElementById('result-text').innerText = 'DEFEAT';
    logoUser.style.color="red";
    logoEnemy.style.color="green";
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

//Sleep fucntion code: https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }

 function openPopup() {   
       document.getElementById("game-rules").style.visibility = "visible";
    }

function closePopup() {   
    document.getElementById("game-rules").style.visibility = "hidden";
}