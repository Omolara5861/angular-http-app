# Angular HTTP User Catalog
## Table of contents
- [Angular HTTP User Catalog](#angular-http-user-catalog)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Preview](#preview)
  - [Features](#features)
  - [Project To-do](#project-to-do)
  - [Installation](#installation)

## Introduction
The User Catalog project is a web application built using Angular (HTTP Concepts)that displays a list of users and their details fetched from **[Random User Generator][1]**. This project is designed / created to demonstrate my knowledge of Angular HTTP requests. The requested data was manipulated / transformed using RXJS map operator. The following concepts were used to create this application:

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
+ [Leaflet Map](https://leafletjs.com/ "A Javascript open-source library for mobile-friendly interactive maps")

**Note:** This project does not perform the full CRUD operations, it only reads and imitates the update operation. The API used does not support Create, Update, and Delete operations

[1]: <https://randomuser.me> "A free open-source API for generating random users and detailed information about them"

## Preview
Homepage

![The homepage that shows the request info and displays the users fetched from the API in a table](/src/assets/homepage.png "Project Homepage")

User Details Page

![The details' page of a user with more information about them and their location on a map](/src/assets/details-page.png "User Details Page")


## Features

* View a list of users
* View the details of a specific user
* View users location on a map

## Project To-do

- [ ] To Implement Dark Mode
- [ ] To add CORS Interceptor


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

