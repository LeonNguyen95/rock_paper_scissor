// Get information in localStorage
let score = JSON.parse(localStorage.getItem('score')) || {wins : 0, losses: 0, ties: 0};
updateScoreElement();
function playGame(playerMove)
{  
    const computerMove = pickComputerMove();
    let result = '';
    if (computerMove === 'Rock')
    {
        if (playerMove === 'Paper')
        {
            result = "You win!";
        }
        else if (playerMove === 'Rock')
        {
            result = 'Tie!';
        }
        else
        {
            result = "You lose!";
        }
    }
    else if (computerMove === 'Paper')
    {
        if (playerMove === 'Scissors')
        {
            result = "You win!";
        }
        else if (playerMove === 'Paper')
        {
            result = 'Tie!';
        }
        else
        {
            result = "You lose!";
        }
    }
    else if (computerMove === 'Scissors')
    {
        if (playerMove === 'Rock')
        {
            result = "You win!";
        }
        else if (playerMove === 'Scissors')
        {
            result = "Tie!";
        }
        else
        {
            result = "You lose!";
        }
    }

    if (result === "You win!")
    {
        score.wins++;
    }
    else if (result === "You lose!")
    {
        score.losses++;
    }
    else if (result === "Tie!")
    {
        score.ties++;
    }
    // Save information into localStorage
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}.png"> <img src="images/${computerMove}.png"> Computer`;
}

function pickComputerMove()
{
    let computerMove = Math.floor(Math.random() * 3);
    if (computerMove === 0)
    {
        return 'Rock';
    }
    else if (computerMove === 1)
    {
        return 'Paper';
    }
    else
    {
        return 'Scissors';
    }
}

function updateScoreElement()
{
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
}

function resetScore()
{
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = '';
}