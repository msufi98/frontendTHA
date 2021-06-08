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
	
	var seconds = {x2:0,y2:0}
	var minutes = {x2:0,y2:0}
	var hours = {x2:0,y2:0}

	//Calculating new x2 and y2 values
	seconds["x2"] = Math.sin(-(secondsDegrees +180) * Math.PI / 180)* 140 +200;
	seconds["y2"] = Math.cos(-(secondsDegrees +180) * Math.PI / 180)* 140 + 200;
	
	minutes["x2"] = Math.sin(-(minutesDegrees +180) * Math.PI / 180)* 140 +200;
	minutes["y2"] = Math.cos(-(minutesDegrees +180) * Math.PI / 180)* 140 + 200;
	
	hours["x2"] = Math.sin(-(hoursDegrees +180) * Math.PI / 180)* 140 +200;
	hours["y2"] = Math.cos(-(hoursDegrees +180) * Math.PI / 180)* 140 + 200;
	
	//console.log(x2+" "+y2)
	
	//set the second, minute and hour hand objects
	secondsHand.setAttribute("x2", seconds["x2"])
	secondsHand.setAttribute("y2", seconds["y2"])
	
	minutesHand.setAttribute("x2", minutes["x2"])
	minutesHand.setAttribute("y2", minutes["y2"])
	
	hoursHand.setAttribute("x2", hours["x2"])
	hoursHand.setAttribute("y2", hours["y2"])

	//minutesHand.style.setProperty("transform", "rotate("+minutesDegrees+"deg)")
	//hoursHand.style.setProperty("transform", "rotate("+hoursDegrees+"deg)")
	
}