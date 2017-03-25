/**
 * Gets list of Id based on maxResults requested
 * @param userId
 * @param includeSpam
 * @param labelIds
 * @param maxResults
 */
function getIdList(userId, includeSpam, labelIds, maxResults) {

    gapi.client.gmail.users.messages.list({
        'userId' : userId,
        includeSpamTrash: includeSpam,
        labelIds : labelIds,
        maxResults : maxResults
    }).then(function (response) {
        var messages = response.result.messages;
        if ( messages && messages.length > 0) {
            for (i = 0; i < messages.length; i++) {
                var message = messages[i];
                getEmailById(message.id);
            }
        }
    });
}

/**
 * returns email body, needs to pass email's unique id
 * @param emailId
 */
function getEmailById(emailId) {
    gapi.client.gmail.users.messages.get({
        'userId' : 'me',
        'id' : emailId,
        'format' : 'full'
    }).then(function (response) {
        //print output to console.
        // console.log(response.result);
        var headersArr = response.result.payload.headers;
        var date = "", sender = "", sub = "";
        for (var i = 0; i < headersArr.length; i++) {
            switch (headersArr[i].name) {
                case 'X-Received' :
                    date = headersArr[i].value.match(/(mon|tue|wed|thu|fri|sat|sun).*(\d\d:\d\d:\d\d)/gi);
                    break;
                case 'Subject' :
                    sub = headersArr[i].value;
                    break;
                case 'From' :
                    sender = headersArr[i].value;
                    break;
                default:
                    break;
            }
        }
        if(date !== "" && sender !== "" && sub !== "" && response.result.snippet !== "") {
            addEmailsToHTML(sender, sub, response.result.snippet, date);
        }
    });
}

/**
 * Adds email data into dynamically generated HTML
 * @param sender
 * @param sub
 * @param desc
 * @param date
 */
function addEmailsToHTML(sender, sub, desc, date) {
    sub = sub.substring(0, 50).split(" ").slice(0, -1).join(" ");
    desc = desc.substring(0, 80).split(" ").slice(0, -1).join(" ");
    var emailMainDiv = $('<div>').attr({'class':'row email-container well email-jumbotron jumbotron'});
    var iconDiv = $('<div>').attr({'class':'col-lg-2 col-md-2 col-sm-2 hidden-xs text-center'});
    var icon = $('<i>').attr({'class':'icon ion-email hidden-xs email-icon'});
    var emailContentDiv = $('<div>').attr({'class':'col-lg-10 col-md-10 col-sm-10 col-xs-12'}).html($('<div>').attr({'class':'row'}));
    var nameDiv = $('<div>').attr({'class':'col-md-8 col-lg-8 col-sm-12 col-xs-12 email-sender-container'});
    var nameText = $('<h3>').attr({'class':'email-sender'}).html(sender);
    var dateDiv = $('<div>').attr({'class':'col-md-4 col-lg-4 col-sm-12 col-xs-12'});
    var dateText = $('<h5>').attr({'class':'date'}).html(date);
    var subDiv = $('<div>').attr({'class':'col-md-12 email-subject-container'});
    var subText = $('<h5>').attr({'class':'email-sender'}).html($('<strong>').html(sub));
    var descDiv = $('<div>').attr({'class':'col-md-12 email-description'});
    var descText = $('<h5>').attr({'class':'email-description'}).html(desc);


    emailMainDiv
//        .append(iconDiv.html(icon))
        .append(emailContentDiv
            .append(nameDiv.html(nameText))
            .append(dateDiv.html(dateText))
            .append(subDiv.html(subText))
            .append(descDiv.html(descText))
        );

    $(".emails-container").slick('slickAdd', emailMainDiv);
    //$(".emails-container").append(emailMainDiv);
}

function removeEmailsFromHTML(numOfEmails) {
    for (var i = 0; i < numOfEmails; i++) {
        $(".emails-container").slick("slickRemove", 0);
    }
}