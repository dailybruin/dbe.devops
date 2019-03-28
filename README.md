# Intro to DevOps

:clapper: **Slides [here](https://docs.google.com/presentation/d/12l2trFW5kstjOHM6tKRpamY-KMPX65RpdyrMjZRT6do/edit?usp=sharing)**

## Getting Started :nerd_face:

1. Go to https://brew.sh/ and copy-paste that command into your Terminal or, to save you a click, copy-paste this:

   ```
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

2. You should now have Homebrew installed! :beer:

3. Double-check that by typing the `brew` command into your Terminal. If it says "command not found" or something similar, something is wrong.

4. Otherwise, simply type in:

   ```sh
   brew install node
   ```

   And hit enter!

5. Now it's time to sign up for a Heroku account!

6. Click [here](https://signup.heroku.com/) or go to https://signup.heroku.com/ and sign up now!

7. Also make sure you have a [GitHub](https://github.com) account

## Development in Node

### Set-Up

1. Now that you have Node installed, verify by typing the following into your Terminal:

```sh
node -v
```

2. If you don't get a version number back, something's wrong!
3. Otherwise, let's keep going by typing in the following command:

```sh
npm init
```

4. Your Terminal will prompt you with a rather long series of questions, all of which are overkill for the super simple app we'll be building today, so feel free to just keep pressing enter until it's done
5. After this, you should have a new file in your directory named `package.json`. Think of `package.json` as the README for computers for any Node application/program; it gives all the basic information needed to understand what the program is, who made it, etc.
6. We'll need just one dependency for this application: [Express.js](https://expressjs.com/), a popular and fast Node library that lets you set up a server basically instantly
7. To add Express as a dependency for our project, type the following into your Terminal:

```sh
npm install express
```

9. The installation should be pretty quick, and we can finally start coding!

### Coding

1. Create a file called `index.js` in your working directory (the same folder your `package.json` is in)
2. Copy and paste the below server code into `index.js`

```javascript
const express = require("express");

const app = express();
let counter = 0;

app.get("/", (req, res) => {
	counter++;
	res.send(`<h1>This page has been seen ${counter} times!`);
});

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
	console.log(`Server started at ${host} on port ${port}!`);
});
```

3. All done! Feel free to type the command `node index.js` and run your server locally (i.e. on YOUR computer)
   1. Go to [localhost:3000](localhost:3000/) in your browser to see it in action! :+1:

## Deployment on Heroku

Heroku is...

For deploying a Node application on Heroku, there are two options to get your app started up properly:

1. A `Procfile` in the root of the directory that specifies a command (in our case, `web: node index.js`) to run on startup
2. Modify the `package.json` to include a `start` script

Since our application is pretty simple, we'll just do the latter