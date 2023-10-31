<p align="center"><h1> RESTful Book Management API</h1></p>

This project is a RESTful API built using Node.js for managing books. It allows users to perform operations such as creating, retrieving, updating, and deleting books. The API serves as a robust backend system for a book management application.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [API Endpoints](#api-endpoints)
  - [Create a Book](#create-a-book)
  - [Get All Books](#get-all-books)
  - [Get a Book by ID](#get-a-book-by-id)
  - [Update a Book](#update-a-book)
  - [Delete a Book](#delete-a-book)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Decisions and Assumptions](#decisions-and-assumptions)
- [Installation](#installation-1)
- [Running the app](#running-the-app)
- [Test](#test)
- [Support](#support)

## API Endpoints and Usage
To interact with the API, you can use tools like Postman or any API testing tool. Here's how you can use the API:

### Create a Book
Make a POST request to /books/add with a JSON body containing book details like title, author, and summary.

- **Endpoint:** `POST /books/add`
- **Description:** Create a new book.
- **Request Body:**
  - Example:
    ```json
    {
      "title": "Book Title",
      "author": "Author Name",
      "summary": "Book Summary"
    }
    ```
- **Response:**
  - Example:
    ```json
    {
      "_id": "bookId",
      "title": "Book Title",
      "author": "Author Name",
      "summary": "Book Summary"
    }
    ```

### Get All Books
Send a GET request to /books with optional query parameters to filter and paginate the results.

- **Endpoint:** `GET /books`
- **Description:** Get a list of all books.
- **Query Parameters:**
  - `title` (optional): Filter by book title.
  - `author` (optional): Filter by author.
  - `summary` (optional): Filter by book summary.
  - `limit` (optional): Limit the number of results.
  - `skip` (optional): Skip a certain number of results.
- **Response:**
  - Example:
    ```json
    [
      {
        "_id": "bookId",
        "title": "Book Title",
        "author": "Author Name",
        "summary": "Book Summary"
      },
      // Additional book objects
    ]
    ```

### Get a Book by ID
Issue a GET request to /books/{bookId} to retrieve a specific book by its unique ID.

- **Endpoint:** `GET /books/:id`
- **Description:** Get a book by its ID.
- **Response:**
  - Example:
    ```json
    {
      "_id": "bookId",
      "title": "Book Title",
      "author": "Author Name",
      "summary": "Book Summary"
    }
    ```

### Update a Book
Use a PATCH request to /books with

- **Endpoint:** `PATCH /books/update/:id`
- **Description:** Update a book by its ID.
- **Request Body:**
  - Example:
    ```json
    {
      "summary": "Updated Summary"
    }
    ```
- **Response:**
  - Example:
    ```json
    {
      "updateBook": {
        "_id": "bookId",
        "title": "Book Title",
        "author": "Author Name",
        "summary": "Updated Summary"
      },
      "message": "Book updated successfully!"
    }
    ```

### Delete a Book
Use a POST request to /books with

- **Endpoint:** `DELETE /books/delete/:id`
- **Description:** Delete a book by its ID.
- **Response:**
  - Example:
    ```json
    {
      "message": "Book deleted successfully!"
    }
    ```

### Prerequisites

- Node.js and npm and yarn installed.
- MongoDB installed and running.


## Decisions and Assumptions

During the development of this RESTful API for managing books, several key decisions and assumptions were made to shape the architecture and functionality of the application. These decisions were driven by considerations of efficiency, security, and user experience.

1. **Database Choice:** MongoDB was selected as the database system to store book data. This choice was based on its flexibility and scalability, making it suitable for a book management system with potentially large amounts of data.

2. **Validation and Error Handling:** To ensure data integrity, class-validator was employed for input validation. The assumption here is that data consistency is critical, and the API provides meaningful error messages for users. Error handling was also implemented to provide user-friendly responses.

3. **Security Measures:**  The ``` helmet ``` package is used for basic security over response headers. Rest are much but for the time consideration not integrated. For example malicious code injection, db injection,

4. **Scalability Considerations:** The API was designed with scalability in mind. The inclusion of optional query parameters for pagination and filtering allows for efficient handling of a growing number of books. This approach ensures that performance is maintained as the dataset expands.

5. **API Documentation:** To make the API accessible and user-friendly, API documentation tools like Postman were utilized. Users can access detailed API documentation, making it easier for them to interact with the API effectively.
 

---


  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Installation

```bash
$ npm install
      or
$ yarn install
```

## Running the app

```bash
# development
$ npm run start
      or
$ yarn run start

# watch mode
$ npm run start:dev
      or
$ yarn run start:dev

# production mode
$ npm run start:prod
      or
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ npm run test
      or
$ yarn run test

# e2e tests
$ npm run test:e2e
      or
$ yarn run test:e2e

# test coverage
$ npm run test:cov
      or
$ yarn run test:cov
```



## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

Nest is [MIT licensed](LICENSE).
# thebrewapps-books-api
