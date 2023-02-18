# Angular HTTP User Catalog
## Table of contents
- [Angular HTTP User Catalog](#angular-http-user-catalog)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Preview](#preview)
  - [Features](#features)
  - [Project To-do](#project-to-do)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technical Details / Technologies](#technical-details--technologies)
  - [Contributing](#contributing)

## Introduction
The User Catalog project is a web application built using Angular (HTTP Concepts)that displays a list of users and their details fetched from **[Random User Generator][1]**. This project is designed/created to demonstrate my knowledge of Angular HTTP requests. The requested data was manipulated/transformed using the RXJS map operator. The following concepts were used to create this application:

+ Angular Components
+ Components Data Binding
  + String Interpolation
  + Property Binding
  + Event Binding
+ Components Lifecycle
+ Angular Directives
  + Built-in Directives
  + Structural Directives
+ Angular Services
+ Angular resolver
+ Angular HTTP Interceptor
+ Angular Pipes
  + Date Pipe
+ Angular Routing
  + Router Configuration
  + Router Parameters
  + Activated Routes
  + Router Outlet
+ RxJs
  + Observables
  + Map Operator
+ [Leaflet Map](https://external.ink?to=/leafletjs.com/ "A Javascript open-source library for mobile-friendly interactive maps")

**Note:** This project does not perform the full CRUD operations, it only reads and imitates the update operation. The API used does not support Create, Update, and Delete operations

[1]: <https://external.ink?to=/randomuser.me> "A free open-source API for generating random users and detailed information about them"

## Preview

Homepage

![The homepage that shows the request info and displays the users fetched from the API in a table](/src/assets/homepage.png "Project Homepage")

User Details Page

![The details' page of a user with more information about them and their location on a map](/src/assets/details-page.png "User Details Page")

[View Project](https://external.ink?to=/angular-http-app.vercel.app "Live link")

## Features

* View a list of users
* View the details of a specific user
* View a user's location on a map

## Project To-do

- [x] To Implement Dark Mode
- [x] To add CORS Interceptor
- [ ] To write unit tests


## Installation
To install and run the User Catalog project, you will need to have the following software installed on your computer:

- Node.js
- Angular CLI

Once you have the required software installed, follow these steps to get started:

1. Clone the repository on your local machine using the following command:

```
git clone https://github.com/Omolara5861/angular-http-app.git
```

2. Navigate to the project directory using the following command:

```
cd angular-http-app.git
```
3. Install the required dependencies and run the development server using the following command:

```
npm install && ng serve
```
4.  Access the project by opening a web browser and navigating to `http://localhost:4200/`

## Usage
The User Catalog provides an intuitive interface for viewing user information. To view the list of users returned by the API, simply navigate to the homepage. From here you can view the details of a specific user by clicking on the `View` button of a user.

**Note:** *The API used for this project does not support fetching a specific user hence when you click to view a user's details, a new user would be generated on the fly*


## Technical Details / Technologies
This project was built with VS Code using Angular version 15 and makes use of the following libraries and packages:

+ Random User Generator for the API endpoint
+ Bootstrap 5 for styling and layout
+ Leaflet for displaying users' location on a map
+ RxJs for handling HTTP requests and responses

## Contributing
If you would like to contribute to this project, please open an issue or submit a pull request on the project's GitHub repo. Contributions are welcome and appreciated.

<!-- ## License -->
