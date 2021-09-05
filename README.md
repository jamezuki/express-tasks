# express-tasks

- RESTful service with tasks data.
- CRUD operations with Express framework.
- Data stored in MongoDB Atlas.
- Deployed to Heroku.

**[Live Project](https://jamezuki-express-tasks.herokuapp.com/tasks)**

## Endpoints

### Get All

```
GET https://jamezuki-express-tasks.herokuapp.com/tasks
```

### Get One

```
GET https://jamezuki-express-tasks.herokuapp.com/tasks/id
```

### Create One

```
POST https://jamezuki-express-tasks.herokuapp.com/tasks
content-type: application/json

{
    "text": "Dinner with Pao",
    "date": "Sunday, 7:00pm",
    "reminder": true
}
```

### Update reminder

```
PATCH https://jamezuki-express-tasks.herokuapp.com/tasks/id
content-type: application/json

{
    "reminder": false
}
```

### Delete One

```
DELETE https://jamezuki-express-tasks.herokuapp.com/tasks/id
```

## Topics

- Node.js
- Express
- Mongoose
- MongoDB Atlas
- Middleware
- Routes
