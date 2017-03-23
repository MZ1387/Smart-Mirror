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
	});
}