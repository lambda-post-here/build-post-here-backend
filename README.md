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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo5NSwidXNlcm5hbWUiOiJ0ZXN0NzAiLCJpYXQiOjE1NTU0MzY5NTQsImV4cCI6MTU1NTUyMzM1NH0.UdvIP36MN5sZYwWxoiryULKzHHhqV3QpqFuYkSE3GFQ",
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

<<<<<<< HEAD
- `msg`(string) -> Contains a success message string, token, and id.

```json
{
  "message": "Login Successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6eyJpZCI6OTMsInVzZXJuYW1lIjoidGVzdDY5IiwicGFzc3dvcmQiOiIkMmEkMTAkM0xJYy9EbzFJRm9Jdi5rQ3k1dUZYdWpXMVpiUjJObE1KYkRaZ0Q1cllMTGQ3TmY3QXhiNUcifSwiaWF0IjoxNTU1NDM2NzE0LCJleHAiOjE1NTU1MjMxMTR9.f_d2T7Umf2CMlLCHdwu9k8p2novJVMP3bMjkD2lycQg",
  "id": 93
=======
```js
{
  "message": "Login Successful",
  "token": "a token would appear here",
  "id": 1
>>>>>>> 3ccea6e0cb938bfb578f3e61b253a2606efdbde5
}
```

### Failure Outputs

- `msg`(string) ->

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
