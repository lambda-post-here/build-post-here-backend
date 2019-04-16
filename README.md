# build-post-here-backend

Backend Repo for Backend Engineer.

# ROUTES:

## BASE URL: `https://post-here.herokuapp.com/`

## `POST /api/auth/register`

### Inputs:

- username: (string) 128chars long.
- password: (password) This will be hashed.

```js
  {
  username: 'test',
  password:'test'
  }
```

### Success Outputs

```js
{
  "message": "Registration Successful",
  "token": "a token would appear here",
  "id": 1
}
```

```json
{
  "message": "Registration Successful",
  "token": "token here",
  "id": 95
}
```

### Failure Outputs

- `msg`(string) -> contains an error object converted into a string.

## `POST /api/auth/login`

### Inputs:

- username: (string) 128chars long.
- password: (password) This will be hashed.

```js
  {
  username: 'test',
  password:'test'
  }
```

### Success Outputs

```json
{
  "message": "Login Successful",
  "token": "a token would appear here",
  "id": 1
}
```

### Failure Outputs

- `msg`(string) ->

## `GET /api/post`

### Success Outputs

```json
{
  "rec_1": "r/games",
  "rec_2": "r/movies",
  "rec_3": "r/tifu"
}
```

### Failure Outputs

# routes in progress

## `DELETE /api/auth/:id`

**This endpoint is restricted to logged in users.**

### Inputs:

- Request header (Javascript Object) that should contain the token.

### Success Outputs

- `msg`(string) -> contains a success message string

### Failure Outputs

- `msg`(string) ->

## `PATCH /api/auth/:id`

**This endpoint is restricted to logged in users.**

### Inputs:

- Object with `password`
- Request header (Javascript Object) that should contain the token.

### Success Outputs

- `msg`(string) -> contains a success message string

### Failure Outputs

- `msg`(string) ->
