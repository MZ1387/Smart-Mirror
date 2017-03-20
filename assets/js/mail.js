/**
 * Created by rutul on 3/18/17.
 */


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
//         //
//         var email = gUser.email;
//         var emailID =  "15ae30fd56dded03";
//
//         var queryURL = "https://www.googleapis.com/gmail/v1/users/" +
//                 email + "/messages/" + "rutulpatel.rtl%40gmail.com"
//                 + "?format=metadata&key=" + config.apiKey;
//
//         console.log(queryURL);
//
//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         }).done(function(response) {
//             var data = response.data;
//             console.log("RESPONSE", response);
//             console.log("DATA", data);
//         });
//
//     }
// }


// Client ID and API key from the Developer Console
var CLIENT_ID = '993274322267-hbj9vaa6g3mian4nerttlk259qj28e1h.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        listLabels();
        getIdList();
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

/**
 * Print all Labels in the authorized user's inbox. If no labels
 * are found an appropriate message is printed.
 */

function listLabels() {
    gapi.client.gmail.users.labels.list({
        'userId': 'me'
    }).then(function (response) {
        var labels = response.result.labels;
        appendPre('Labels:');

        if (labels && labels.length > 0) {
            for (i = 0; i < labels.length; i++) {
                var label = labels[i];
                appendPre(label.name)
            }
        } else {
            appendPre('No Labels found.');
        }
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
        //print output to conosle
        console.log(response);


        var labels = response.result.labels;
        appendPre('Labels:');

        if (labels && labels.length > 0) {
            for (i = 0; i < labels.length; i++) {
                var label = labels[i];
                appendPre(label.name)
            }
        } else {
            appendPre('No Labels found.');
        }
    });
}