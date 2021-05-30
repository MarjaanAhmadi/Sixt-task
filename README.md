# Sightseeing Tours By Sixt Chauffeured Services

Programming Exercise Frontend - 4


### Configure api

Copy `.env.example` to `.env` then edit it with the url where you have setup

## Demo

![sixtanimation2](https://user-images.githubusercontent.com/23704949/119955842-b44f1700-bfb5-11eb-8378-0b2a738ed46c.gif)

## Requirements

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v14.15.1

    $ npm --version
    6.14.8

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone git@github.com:MarjaanAhmadi/sixt-task.git  
or

    $ git clone https://github.com/MarjaanAhmadi/sixt-task.git
    
then
   
    $ cd sixt-task
    $ npm install

### Configure app

Copy `.env.example` to `.env` then edit it with the url where you have setup:

- backend api
- development

Install dependencies that exist in package.json using this command

    $ npm install

Or if you have yarn use this

    $ yarn install

## Start & watch

    $ npm start 
    $ yarn start


## Languages & tools

### HTML

- [Material-UI](https://material-ui.com) for some templates.

### JavaScript

- [React-^17.0.2](http://facebook.github.io/react) is used.
- [React-Redux-^7.2.4](https://react-redux.js.org/) is used.
- [@reduxjs/toolkit-^1.5.1](https://github.com/reduxjs/redux-toolkit) is used.
- [axios-^0.21.1](https://github.com/axios/axios) is used.
    
### Build app

    $ npm run build


## Authors

* [Marjaan Ahmadi](https://marjanahmadi.ir)
