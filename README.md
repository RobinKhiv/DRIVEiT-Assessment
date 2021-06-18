# DRIVEiT Assessment

Responsive React front end application that will access a PHP file and print out all the users listed in a grid format. 

## Live Link

* [LIVE](https://driveit-assessment-rk.herokuapp.com) - Live link to application

## PHP File

* [PHP-FILE](https://github.com/RobinKhiv/simple-php-api) - Location of php file that will access the required API

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install Visual Studio code and nodeJS to desktop

### Installing

Copy git respository to local machine

```
git clone https://github.com/RobinKhiv/DRIVEiT-Assessment
```

then install all the dependencies using node package manager

```
npm install
```

A additional file .env will have to be created in the root folder if you would like to access the php file. The .env will consist of:

```
REACT_APP_API=yourphpfilelink
```

## Running the front end application

The front end application can be ran on the local machine by

```
npm start
```


## Built With

* [React](https://reactjs.org) - React JS
* [NodeJS](https://nodejs.org/) - Node Package Manager
* [Visual Studio Code](https://code.visualstudio.com) - IDE
* [Heroku](https://www.heroku.com) - Deployment

## Authors

* **Robin Khiv**
