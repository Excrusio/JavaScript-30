const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

setDate = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	const secondsInDegrees = (seconds / 60) * 360 + 90;
	const minutesInDegrees = (minutes / 60) * 360 + 90;
	const hoursInDegrees = (hours / 12) * 360 + 90;

	console.log(`H:${hours} S:${seconds} M: ${minutes}`);
	secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;

	const dispMinutes = checkZeroes(minutes);
	const dispSeconds = checkZeroes(seconds);
	const dispHours = checkZeroes(hours);

	document.querySelector(".time").innerHTML = `H:${dispHours} M: ${dispMinutes} S:${dispSeconds}`;
};

checkZeroes = (time) => {
	if (time < 10) {
		return (time = "0" + time);
	}
	return time;
};

setInterval(setDate, 1000);
