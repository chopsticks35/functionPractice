function tripleFive(){
	for (i = 0; i < 3; i++) {
		console.log("Five!")
	}
}

function lastLetter(string) {
	return string[(string.length-1)]
}

function square(number) {
	return (number * number)
}

function negate(number) {
	return (number * -1)
}

function toArray(x, y, z) {
	return [x, y, z]
}

function startsWithA(string) {
	if (string[0].toLowerCase() === "a") {
		return true
	}
	else {
		return false
	}
}

function excite(string) {
	return (string + "!!!")
}

function sun(string) {
	if (string.indexOf('sun') >= 0) {
		return true
	}
	else {
		return false
	}
}

function tiny(n) {
	if (n > 0 && n < 1) {
		return true
	}
	else {
		return false
	}
}

function getSeconds(time) {
	var seconds = 0
	seconds += (((Number(time.substring(0, 2))) * 60) + Number(time.substring(3, 5)))
	return seconds
}

tripleFive();
//lastLetter();
//square();
//negate();
//toArray();
//startsWithA();
//excite();
//sun();
//tiny();
//getSeconds();