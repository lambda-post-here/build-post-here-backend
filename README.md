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

```json
{
  "message": "Registration Successful",
  "token": "a token would appear here",
  "id": 1
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

## `POST /api/post`

### Input

```json
{
  "title": "This is a title",
  "body": "This is the post",
  "image": "This is an image url"
}
```

### Success Outputs

```json
{
  "response": [
    {
      "rec": "dankmemes",
      "score": 0.36160451388367243
    },
    {
      "rec": "teenagers",
      "score": 0.19633690505618595
    },
    {
      "rec": "memes",
      "score": 0.17758563187085075
    },
    {
      "rec": "me_irl",
      "score": 0.08763629551358934
    },
    {
      "rec": "gaming",
      "score": 0.04070450903212839
    }
  ],
  "title": "check it take 2",
  "body": "it really works now srsly",
  "image": "tsrsly"
}
```

### Failure Outputs

- `msg`(string) ->

## `DELETE /api/auth/users`

**This endpoint is restricted to logged in users.**

### Inputs:

- Request header (Javascript Object) that should contain the token.

### Success Outputs

- `msg`(string) -> contains a success message string

### Failure Outputs

- `msg`(string) ->

## `PUT /api/auth/users`

**This endpoint is restricted to logged in users.**

### Inputs:

- Object with `password`
- Request header (Javascript Object) that should contain the token.

### Success Outputs

- `msg`(string) -> contains a success message string

### Failure Outputs

- `msg`(string) ->
