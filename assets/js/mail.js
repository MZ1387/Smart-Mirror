/**
 * Created by rutul on 3/18/17.
 */

//
// function getEmailsIds() {
//     if(gUser) {
//         console.log(gUser.email);
//
//
//         // var q = $(this).attr("data-name");
//         // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         //     q + "&api_key=dc6zaTOxFJmzC&limit=" + respLimit;
//         // $("#resultsContainer").empty();
//         // $.ajax({
//         //     url: queryURL,
//         //     method: "GET"
//         // }).done(function(response) {
//         //     var data = response.data;
//         //     for (var i = 0; i < data.length; i++) {
//         //         addGif(data[i].rating, data[i].images.fixed_height.url, data[i].images.fixed_height.height);
//         //     }
//         // });
//         //
//         // //
//          var email = gUser.email;
//          var emailID =  "15ae30fd56dded03";
//         // var apikey = "DdG8xCrWLfQNGGwtZ1KeddL6Vem1";
//         //
//         // var queryURL = "https://www.googleapis.com/gmail/v1/users/" +
//         //         email + "/messages/" + "rutulpatel.rtl%40gmail.com"
//         //         + "?format=metadata&key=" + apikey;
//         //
//         // console.log(queryURL);
//         //
//         // $.ajax({
//         //     url: queryURL,
//         //     method: "GET"
//         // }).done(function(response) {
//         //     var data = response.data;
//         //     console.log("RESPONSE", response);
//         //     console.log("DATA", data);
//         // });
//     }
// }


console.log("MAIL.JS");
/**
 * Print all Labels in the authorized user's inbox. If no labels
 * are found an appropriate message is printed.
 */
function listLabels() {
    gapi.client.gmail.users.labels.list({
        'userId': 'me'
    }).then(function(response) {
        console.log(response);
    });
}


function getIdList() {
    console.log("CALLED - getIDList");
    gapi.client.gmail.users.messages.list({
        'userId' : 'me',
        includeSpamTrash: false,
        labelIds : 'INBOX',
        maxResults : 3
    }).then(function (response) {
        //print output to console
        console.log(response.result.messages);


        var messages = response.result.messages;
        //appendPre('Messages:');

        if ( messages && messages.length > 0) {
            for (i = 0; i < messages.length; i++) {
                var message = messages[i];
                //appendPre(message.id);
                console.log(message.id);
                getEmailById(message.id);
            }
        } else {
            //appendPre('No Labels found.');
        }
    });
}

function getEmailById(emailId) {
    console.log("CALLED - getEmailById");
    gapi.client.gmail.users.messages.get({
        'userId' : 'me',
        'id' : emailId,
        'format': 'metadata'
    }).then(function (response) {
        //print output to console.
        console.log(response);


//            var labels = response.result.messages;
//            appendPre('Messages:');
//
//            if (labels && labels.length > 0) {
//                for (i = 0; i < labels.length; i++) {
//                    var label = labels[i];
//                    appendPre(label.id)
//                }
//            } else {
//                appendPre('No Labels found.');
//            }
    });
}