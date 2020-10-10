# Slack Clone using React and firebase

This application written using `react.js` and controlled by Google's `firebase` backend tends to mimick the popular slack application. Though not a full clone, it possesses functionalities such as:

- User sign in and registration
- Inter-user messaging
- Channel searching and creation

And much more...

## Project's Source Structure

The source, `src` directory of this application looks like this:

```
src/
├── App.test.js
├── components
│   ├── App.js
│   ├── index.js
│   └── SignIn.js
├── index.css
├── index.js
├── serviceWorker.js
└── setupTests.js
```

# Set up

To successfully run this application, ensure you have `node.js` installed on your machine. Installing `node` ensures the installation of its package manager, `npm` which will be used to installed this app's dependencies.

Having staisfied the above condition, clone this application using:

```
git clone https://github.com/Sirneij/react-slack-clone.git
```

Note: You nust have `git` installed on your system to successfully use the `git` command.

Following the cloning process above, install the app's dependencies using:

```
npm install
```

Or

```
npm i
```

Then, start the application using:

```
npm run start
```

Or

```
npm start
```

If you didn't change the default port for running react applications, visit `localhost:3000` to interact with the application.
