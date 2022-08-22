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
       document.getElementById('result').innerText="It's a draw! Play again.";
    }
    //Weapon election: rock
    else if(weapon1 === 'rock' && weapon2 === 'paper'){
       enemyWin(); 
    }
    else if(weapon1 === 'rock' && weapon2 === 'scissor'){
        userWin();
    }
    else if(weapon1 === 'rock' && weapon2 === 'lizzard'){
        userWin();
    }
    else if(weapon1 === 'rock' && weapon2 === 'spock'){
        enemyWin();
    }
    //weapon election: paper
    else if(weapon1 === 'paper' && weapon2 === 'rock'){
        userWin();
    }
    else if(weapon1 === 'paper' && weapon2 === 'scissor'){
        enemyWin();
    }
    else if(weapon1 === 'paper' && weapon2 === 'lizzard'){
        enemyWin();
    }
    else if(weapon1 === 'paper' && weapon2 === 'spock'){
        userWin();
    }

    // Weapon election: scissor
    else if(weapon1 === 'scissor' && weapon2 === 'rock'){
        enemyWin();
    }
    else if(weapon1 === 'scissor' && weapon2 === 'paper'){
        userWin();
    }
    else if(weapon1 === 'scissor' && weapon2 === 'lizzard'){
        userWin();
    }
    else if(weapon1 === 'scissor' && weapon2 === 'spock'){
        enemyWin();
    }
    // Weapon election: LIZZARD
    else if(weapon1 === 'lizzard' && weapon2 === 'rock'){
        enemyWin();
    }
    else if(weapon1 === 'lizzard' && weapon2 === 'paper'){
        userWin();
    }
    else if(weapon1 === 'lizzard' && weapon2 === 'scissor'){
        enemyWin();
    }
    else if(weapon1 === 'lizzard' && weapon2 === 'spock'){
        userWin();
    }
    //Weapon election: SPOCK
    else if(weapon1 === 'spock' && weapon2 === 'rock'){
        userWin();
    }
    else if(weapon1 === 'spock' && weapon2 === 'paper'){
        enemyWin();
    }
    else if(weapon1 === 'spock' && weapon2 === 'scissor'){
        userWin();
    }
    else if(weapon1 === 'spock' && weapon2 === 'lizzard'){
        enemyWin();
    }
    else{
        alert('Unknow variable')
    }
}

function enemyWeapon(){
    weapons=['rock', 'paper', 'scissor', 'lizzard', 'spock'];
    weaponChoice = weapons[Math.floor(Math.random()*weapons.length)];
    return weaponChoice;
}

function userWin(){
    let oldScore = parseInt(document.getElementById('user-life-counter').innerText);
    document.getElementById('user-life-counter').innerText = ++oldScore;
    document.getElementById('result').innerText = 'VICTORY';
}

function enemyWin(){
    let oldScore = parseInt(document.getElementById('enemy-life-counter').innerText);
    document.getElementById('enemy-life-counter').innerText = ++oldScore;
    document.getElementById('result').innerText = 'DEFEAT';
}

function displayUserWeapon(weapon){
    if (weapon === "rock") {
        document.getElementById('user-display').innerHTML=`<i class="fa fa-hand-rock-o"></i>`
    } else if (weapon === "paper") {
        document.getElementById('user-display').innerHTML=`<i  class="fa fa-hand-paper-o" aria-hidden="true"></i>`
    } else if (weapon === "scissor") {
        document.getElementById('user-display').innerHTML=`<i class="fa fa-hand-scissors-o" aria-hidden="true"></i>`
    } else if (weapon === "lizzard") {
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
    } else if (weapon === "lizzard") {
        document.getElementById('enemy-display').innerHTML=`<i class="fa fa-hand-lizard-o" aria-hidden="true"></i> `
    } else if (weapon === "spock") {
        document.getElementById('enemy-display').innerHTML=`<i class="fa fa-hand-spock-o" aria-hidden="true"></i>`
    } else {
        alert('Unknown weapon2');
}}