// Update Clock every second
setInterval(updateClock, 1000)

function updateClock(){
	// Get Current time
	var today = new Date()
	var hours = today.getHours()
	if(hours > 12) hours = hours-12
	var mins = today.getMinutes() 
	var secs = today.getSeconds()

	console.log(" " +hours + " "+mins+" " + secs)
	
	// Calculate Degrees on a clock
	secondsDegrees = secs * 6
	minutesDegrees = mins * 6
	hoursDegrees = hours * 30 + mins/60*30
	
	//get the second, minute and hour hand objects
	secondsHand = document.getElementById("line1")
	minutesHand = document.getElementById("line2")
	hoursHand = document.getElementById("line3")

	
	
	//set the second, minute and hour hand objects
	secondsHand.style.setProperty("transform", "rotate("+secondsDegrees+"deg)")
	minutesHand.style.setProperty("transform", "rotate("+minutesDegrees+"deg)")
	hoursHand.style.setProperty("transform", "rotate("+hoursDegrees+"deg)")
	
}