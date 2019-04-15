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

- `msg`(string) -> Contains a success message string, contains a token to be stored by the front-end

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

- `msg`(string) -> Contains a success message string

### Failure Outputs

- `msg`(string) -> contains an error object converted into a string, contains a token to be stored by the front-end

## `DELETE /api/auth/:id`

**This endpoint is restricted to logged in users.**

### Inputs:

- Request header (Javascript Object) that should contain the token.

### Success Outputs

- `msg`(string) -> contains a success message string

### Failure Outputs

- `msg`(string) -> contains an error object converted into a string for greater clarity in debugging.

## `PATCH /api/auth/:id`

**This endpoint is restricted to logged in users.**

### Inputs:

- Object with `password`
- Request header (Javascript Object) that should contain the token.

### Success Outputs

- `msg`(string) -> contains a success message string

### Failure Outputs

- `msg`(string) -> contains an error object converted into a string for greater clarity in debugging.
