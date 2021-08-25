# User Github Gist Loader
This is a simple single page react application that loads gist from github based on supplied usernames. It displays the description, file types and the last 3 forks of the gist if any. It was created using default create-react-app npx command and uses functional components and hooks (useState, useEffect). Requests to the github api is sent through axios http library

## Potential Improvements
1. Use styled components instead of global styles.
2. Use toastr for user notifications instead of alerts.
3. Add unit tests to the application.

### To Run
To run the app in your localhost port 3000, simply clone the repository, run `npm install` in the project root to install the packages and `npm start` to start the server. Then browse http://localhost:3000 in your favorite browser
