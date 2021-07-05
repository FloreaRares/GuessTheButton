var buttonsToGenerate; //No idea of how to eliminate this variable. If i'll declare it inside startGame how can i acces it in checkWin?

function startGame() {
	var createdButtonIndex = 0;
	buttonsToGenerate = $('#numberOfButtons').val();
	for(var i = 0; i < buttonsToGenerate; ++i) {
		++createdButtonIndex;
		$('#buttonsArea').append(`
			<button type="button" class="btn btn-secondary btn-lg" id="` + createdButtonIndex + `" onClick = "return checkWin(` + createdButtonIndex + `);">Button ` + createdButtonIndex + `</button> 				   
		`);
	}
	return false;
}

function checkWin(clickedButtonId) {
	var winnerButton = Math.floor(Math.random() * 3) + 1; 
	for(var i = 1; i <= buttonsToGenerate; ++i) {
		var button = document.getElementById(i);
		if(i != winnerButton) {
			button.setAttribute("disabled", "");
		} else {
			button.setAttribute("onClick", "");
			button.setAttribute("class", "btn btn-secondary btn-lg btn-danger");
		}					
	}
	button = document.getElementById("startButton");
	button.setAttribute("disabled", "");
	button.setAttribute("onClick", "");
	button = document.getElementById("numberOfButtons");
	button.setAttribute("disabled", "");
	if((clickedButtonId == winnerButton) || (buttonsToGenerate == 1)) {
		$('#outputMessage').append(`
			<span style="font-size: 40px;"><strong>You won!</strong></span>
		`);
		setTimeout(function () {
		window.location.href = "https://www.youtube.com/watch?v=HUgMWJKn2YY&ab_channel=Lucky_Wolf"; }, 2500); 
	} else {
		$('#outputMessage').append(`
			<span style="font-size: 40px;"><strong>You lost!</strong></span>
		`);
	}
	return false;
}

function resetGame() {
	location.reload();
}
