This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Notes
1: First of all, sorry I didn't fulfill the first requirement for the split screen chat view. 
I struggled a little bit at first trying to fake this behaviour correctly, so I ended up using Firebase so I could push and retrieve messages in a more realistic way. 
And since I was already using Firebase, I made a deploy so it's more comfortable for you to test it without having to run 2 instances of the project locally. 
I added a login to make it more realistic, so here is the information for the test users:

laura@laura
123456

rob@rob
123456

In case you want to run it locally, just run npm i and then npm start.

(By the way, first time using Firebase for something else than persisting state, so it's problably not a great implementation, but it did the job).
Regardless of the result of the interview, this was a really fun exercise, so thanks for the chance and sorry for the delay 😅

2: Due to the time constrains and the lack of design I decided to use a UI Kit for some parts of the application.
Mostly buttons, inputs, that kind of stuff. 
I used Bulma because I could just consume the CSS and make the necessaries overrides easily. 
In a real life scenario, I'm not a big fan of using this kind of frameworks, you end up wasting more time understanding their code and then adapting it to your needs. Maybe just some components like grids and buttons, but otherwise I prefer writing custom CSS, or at least using something like React Material UI (even though my opinion is that it has TOO MUCH stuff). 
Ideally I would have written everything with Styled Components, but at some point during the exercise I realized that I was not going to have the time to do it the nice way, so that's why I went with Bulma CSS. 
(I left an example of a component with Styled Components, <Message>, in case you want to check it. It's a good example of what I would have done for the rest of the components if I had more time).


3: I don't think I can share with you the data model from Firebase, but basically what I do is to create rooms with an roomId, and then I create messages that have a property with that roomId, and that's what I use to fetch all the messages for the chat. 
Let me know if you want to and maybe I can try to give you permissions to check the firebase model or I can just send a screenshot. 


Let me know if you need any more details.
