//Gets calendar list

function getCalendarList() {
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
			for(i=0; i < events.length; i++) {
				var event = events[i];
				var when = event.start.dateTime;
				if(!when) {
					when = event.start.date;
				}
				console.log(event.summary + ' (' + when + ')')
			}
		} else {
			console.log("No upcoming events found");
		}
	});
}