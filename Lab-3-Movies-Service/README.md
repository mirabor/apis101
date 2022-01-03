# Lab 3: Movies Service

This service is heavily borrowed from the [Node.js PostgreSQL CRUD example with Express Rest APIs](https://bezkoder.com/node-express-sequelize-postgresql/).

It uses [Sequelize](https://sequelize.org/v5/) to handle database interactions.

## Model

A movie object has the following fields:

| Field | Type  | Description
|---    |---    |---
| `id` | `string` | A UUID for the movie (automatically generated)
| `name` | `string` | Name of the movie
| `genre` | `string` | Movie genre
| `img` | `string` | URL to a movie poster image
| `updatedAt` | `string` | Updated timestamp (automatically generated)
| `createdAt` | `string` | Creation timestamp (automatically generated)

Example:

```json
{
    "id": "630e28f8-0048-41f3-833a-dc0657309f0b",
    "name": "Dune",
    "genre": "Science Fiction",
    "img": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    "updatedAt": "2021-12-17T18:55:47.053Z",
    "createdAt": "2021-12-17T18:55:47.053Z"
}
```

## Endpoints

### Get all movies

**Request:**

```
GET /api/movies
```

**Response:**

```
200 OK
Movie[]
```

### Get a particular movie by ID

```
GET /api/movies/{id}
```

**Response:**

Successful

```
200 OK
Movie
```

Movie not found

```
404 Not Found
```

### Add a new movie

**Request:**

```
POST /api/movies

{
    "name": "string",
    "genre": "string",
    "img": "string"
}
```

**Response:**

```
200 OK
Movie
```

### Update a movie

**Request:**

```
PUT /api/movies/{id}

{
    "name": "string",
    "genre": "string",
    "img": "string"
}
```

**Response:**

```
200 OK

{
    "message": "string"
}
```

### Delete a movie

**Request:**

```
DELETE /api/movies/{id}
```

**Response:**

```
200 OK

{
    "message": "string"
}
```

## Setup

Update `config/db.config.js` with the values for your local database.

Install the application

```sh
nvm use 14
npm install
```

Run the application

```
node index.js
```

## Resources

Cheat Sheet: <https://github.com/enochtangg/quick-SQL-cheatsheet>

Data Types: <https://www.postgresql.org/docs/14/datatype-numeric.html>
