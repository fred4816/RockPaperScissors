let human_score = 0;
let computer_score = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    random_number = Math.random();
    random_number *= choices.length;
    random_choice = Math.floor(random_number);
    
    return choices[random_choice];
}


function getHumanChoice() {
    let player_choice;

    do {
        player_choice = prompt('Enter your choice (rock, paper, scissors)').toLowerCase();
        if (player_choice !== 'rock' && player_choice !== 'paper' && player_choice !== 'scissors') {
            alert(`${player_choice} is not a valid choice. Please enter 'rock', 'paper', or 'scissors'`);
        }
    } 
    while (player_choice !== 'rock' && player_choice !== 'paper' && player_choice !== 'scissors');

    return player_choice;
}


function playRound(human_choice, computer_choice) {
    let winning_player;

    if (human_choice === 'rock') {
        if (computer_choice === 'rock') {
            winning_player = 'Both players said rock, round is a draw';
        }
        else if (computer_choice === 'paper') {
            winning_player = 'You said rock, computer said paper. Computer wins';
            ++computer_score;
        }
        else if (computer_choice === 'scissors') {
            winning_player = 'You said rock, computer said scissors. You win.';
            ++human_score;
        }
    }
    else if (human_choice === 'paper') {
        if (computer_choice === 'paper') {
            winning_player = 'Both players said paper, round is a draw';
        }
        else if (computer_choice === 'rock') {
            winning_player = 'You said paper, computer said rock. You win.';
            ++human_score;
        }
        else if (computer_choice === 'scissors') {
            winning_player = 'You said paper, computer said scissors. Computer wins';
            ++computer_score;
        }
    }
    else if (human_choice === 'scissors') {
        if (computer_choice === 'scissors') {
            winning_player = 'Both players said scissors, round is a draw';
        }
        else if (computer_choice === 'paper') {
            winning_player = 'You said scissors, computer said paper. You win.';
            ++human_score;
        }
        else if (computer_choice === 'rock') {
            winning_player = 'You said scissors, computer said rock. Computer wins';
            ++computer_score;
        }
    }

    return winning_player;
}


function gameLoop() {
    for (let i = 0; i < 10; i++) {
        computer_choice = getComputerChoice();
        human_choice = getHumanChoice();
        const result = playRound(human_choice, computer_choice);
        alert(`${result}\nUpdated scores are:\nHuman: ${human_score}\nComputer:${computer_score}`);
    }
}

gameLoop()