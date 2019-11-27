# Primary Social Network
Primary is a social network for every kind of person. Based on the preferences, each user gets its own view and layout of the app, perfectly adjusted to their needs.

Example: A musician gets a layout and functionality a musician needs. In this case something similar to Soundcloud. A designer gets another UI based on their preferences. In this case everybody is on the same network but with different interfaces.

## Background
Primary was created by @javascriptteacher. Over 400 other developers are working on this project to build a fast, lightweight and simple social media platform made for every kind of user. 

Our current vision and goal is to create an API end point server with "login", "register", "post", "comment", "retweet", etc.

#### Current API Endpoint Goal 
Build out a relatively simple (based on the pattern formed by the 3 already-existing files: **index.html**, **index.js**, **api.js** / mysql.js) API endpoint server. Our **first goal** is to figure out what should all commonplace API endpoints be. (login, logout, update bio, tweet, comment, like, retweet, etc.)

**Each endpoint has a Trello card associated with it.** If you need to find something to do, go to **Trello** and look for a card that is not assigned to anybody yet. We have 500 members on our team, but sometimes even if someone is assigned to a card, doesn't mean they're working on it. Whoever posts comments on cards usually gets attention and assignment.

You can learn more in our [contributing guidelines](./CONTRIBUTING.md)

**Trello board link:** https://trello.com/b/9s3pL5fD/primary

**Trello invite link:** https://trello.com/invite/b/9s3pL5fD/0abbfbcc4f96a770fba8cb4839783d1e/primary

An API endpoint is a key feature to the software we're building -- we don't need to have too many, just choose a few that are necessary and helpful for the project. 

Endpoints are considered completed when they can be tested via buttons on the homepage (see how to [test](#tests) the application). To make an endpoint, you have to add it to **`api.js`** -- following the same pattern already set by other end points we already created. Make sure to come up proper names, nothing complicated, no camel case.

#### Current UI Goal
We need to create a vanilla page router first (there is a Trello card for it.)

## Tests
Our tests currently are simple. Test your implementations in the index.html file. In the future, we will test our projects with JEST as well as build tests in Github to ensure that the changes will not break the application.

## Code style
We will soon offer a code style guide with all rules and setups for your editor. We will use ESLint to check the code quality and to identify typos based on our instructions as well as Prettier to format the code properly. With those tools we ensure that our code is clean and similar between developers working on this project.

**Info:** You can use any other formatting tool. However, we recommend using Prettier as we will create a configuration guide to configure Prettier specifically for this project.

## Frameworks
This project is completely build with vanilla JavaScript and without any framework. We are looking to simplicity instead of a project packed with a bunch of dependencies.

## Installation
1. Install dependencies **`npm install`**
2. Configure database
    1. Switch to **`module/config/`**
    2. Duplicate **`db_config.example.json`**
    3. Rename **`db_config.example.json`** to **`db_config.json`**
    4. Enter your database credentials to **`db_config.json`**

## Contribute
Check out our [contributing guidelines](./CONTRIBUTING.md) for ways to offer feedback and contribute.

## Acknowledgements
The initial release of this project and all further releases and updates are authored by **@javascriptteacher**.

## Credits
Thanks to everybody who is involved in this project.
Special thanks to @javascriptteacher for making this project happen.

## License
Every team member can use the code for its own purpose.
However, it is not an open-source project.
Official license to be announced.
