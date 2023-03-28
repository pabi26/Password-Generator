
let length = document.getElementById("length");
let sliderValue = document.getElementById("slider-value");

length.addEventListener("input", function() {
  sliderValue.textContent = length.value;
});

function generatePassword() {
	let lengthValue = length.value;
	let includeNumbers = document.getElementById("includeNumbers").checked;
	let includeSymbols = document.getElementById("includeSymbols").checked;

	let charset = "abcdefghijklmnopqrstuvwxyz";
	if (includeNumbers) {
		charset += "0123456789";
	}
	if (includeSymbols) {
		charset += "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`";
	}

	let password = "";
	for (let i = 0; i < lengthValue; i++) {
		password += charset.charAt(Math.floor(Math.random() * charset.length));
	}

	document.getElementById("password").value = password;
}


function copyPassword() {
	let passwordField = document.getElementById("password");
	passwordField.select();
	document.execCommand("copy");
	alert("Password copied to clipboard!");
}

