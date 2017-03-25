# Smart-Mirror
In this assignment, our group used the the gmail, google maps, google calendar finance, quote and weather API along with Firebase Authentication to create a Smart Mirror that renders a users information onto one screen. The Smart Mirror calls multiple APIs and uses JavaScript and jQuery to change the HTML of the mirror to update on intervals.

## Live Link (GitHub Pages)
- https://mz1387.github.io/Smart-Mirror/


## Requirements

- Must uses at least two APIs
- Must use AJAX to pull data
- Must utilize at least one new library or technology that we haven’t discussed
- Must have a polished frontend / UI
- Must meet good quality coding standards (indentation, scoping, naming)
- Must NOT use alerts, confirms, or prompts (look into modals!)
- Must have some sort of repeating element (table, columns, etc)
- Must use Bootstrap or Alternative CSS Framework
- Must be Deployed (Heroku or Firebase)
- Must have User Input Validation
- Utilize Firebase for Persistent Data Storage (Consider this basically a requirement).
- Mobile Responsive

## Concepts Implemented

- Dynamically updated HTML powered by Javascript and jQuery
- Establishing user Authentication
- Interact with multiple APIs and populate elements with data from API responses
- Toggle between an element's different states

## Code Explanation

- A user must login an verify authentication through Firebase.
- The current time, day and weather are displayed based on a user's location,
- After authentication a user's daily reminders are displayed in the reminder
- Current tickers a user has invested in are displayed in realtime
- A daily quote is displayed using and quotes API
- The latest email is pulled and shown to update the user
- An ETA to work is also displayed by way of google maps
