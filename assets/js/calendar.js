window.onload = getCalendarList;
//Gets calendar list

function getCalendarList() {
	var nextTasks = true;
	var timer = setInterval(function(){
		if(nextTasks) {
			nextTasks = false;
		} else {
			nextTasks = true;
		}
	}, 20000);

	gapi.client.calendar.events.list({
		'calendarId' :  'primary',
		'timeMin' : (new Date()).toISOString(),
		'showDeleted' : false,
		'singleEvents' : true,
		'maxResults' : 10,
		'orderBy' : 'startTime'
	}).then(function(response) {
		var events = response.result.items;
		console.log(response);
//These next lines will be sifting through the events and adding them to the to do list
		if(events.length>0) {
			for(i=0; i < 8; i++) {
				var event = events[i];
				var when = event.start.dateTime;
				if(!when) {
					when = event.start.date;
				}
				console.log(event.summary + ' (' + when + ')');
				if(nextTasks) {
					$("#day-task-" + i).text(event.summary + ' (' + when + ')');

				} else {
					$("#day-task-" + (i-4)).text(event.summary + ' (' + when + ')');
				}

			}
		} else {
			console.log("No upcoming events found");
			$("#day-task-0").text("No upcoming events found");
		}
	});
}
