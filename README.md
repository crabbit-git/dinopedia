# Dinopedia

What you see in this repository is a group project by Team Dino-Might, created as our final assignment for a software development course at CodeClan with the rest of cohort WD23. Individually, we are [Colette Dufficy](https://github.com/ColetteDufficy), [Sean Johnson](https://github.com/sjohns2020), [Heather Lamont](https://github.com/HeatherLamont), and [Xander Mackenzie](https://github.com/crabbit-git).

The assignment brief was as follows:

> A client is looking to improve their online offering of educational content by developing an interactive browser application that displays information about dinosaurs in a fun and interesting way. Your task is to make an a Minimum Viable Product or prototype to put forward to them. This may only be for a small set of information, and may only showcase some of the features to be included in the final app.

## Possible future extensions to functionality
- Add a quiz on the index page (test knowledge about all dinosaurs in the app)
- Add a comments box (primarily to demonstrate database persistence)

## Dependencies
This project draws data from the [dinopix](https://github.com/judymou/dinopix) API, but only as a "run once" before the application is accessed for the first time; the API is only used as a setup step to source data which will be filtered and adapted to suit the needs of the project before loading it to a [MongoDB](https://www.mongodb.com/) database.

## Installation
If you would like to demo the (prototype!) application as it exists at the moment, you'll need a few things...
- A contemporary web browser, such as Firefox or something WebKit/Blink based (Chromium, Chrome, Brave etc.)
- A copy of this repository, which you can either just download with a web browser or by using git (`git clone https://github.com/crabbit-git/dinopedia`)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

Once the above is done, you can set up and run the application by doing the following:
1. Create and seed by navigating to the `server` directory of your local copy of this repository in your choice of terminal then running `npm run seeds`
2. Install all of the dependencies listed in `client/package.json` by navigating to `client` then running `npm i`
3. Start the server by navigating to `server` and running `npm start`
4. Start the client by navigating to `client` and running `npm start` there as well, which should open a demo copy of the application on your local machine, which will be hosted on port 3000 by default (`http://localhost:3000`)

## Licence
There is currently no formal licence for this project, but this is not intended as a blanket grant of permission; the repository is public and you are permitted to clone a local copy for the demonstration purposes and/or to satisfy your own curiosity, but you would be doing so very much at your own risk as this code is provided without any warranty or guarantee of function whatsoever. It is also decidedly not for commercial use or adaptation for any other purpose at all, and is not in any way intended as a completed or production ready application; its purpose was entirely educational. In other words: it ain't our fault if you break anything after trying to use anything hosted in this repository.
