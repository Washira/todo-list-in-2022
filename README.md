# My todo list service

This is a backend of todo list created to be REST API that be able to work with MongoDB.

For a frontend stay on here.
https://github.com/Washira/todo-list-react-in-2022


## How to use

1. Clone code.

2. Into path '/server', go to terminal then commands `npm install`, notice your 'node_modules' appears on this path.

3. Open your local MongoDB.

4. Type command for running server.

```
npm run server
```


## Routes

| Route | HTTP Verb | Post Body | Description |
|------|---------|----------|---------|
| /todo | `GET` | - | List all data |
| /todo/create | `POST` | {'text':'foo',<br> 'isComplete':false} | Create a new title. |
| /todo/edit/:id | `GET` | - | Get any data by _id |
| /todo/delete/:id | `DELETE` | - | Delete any data by _id |
| /todo/update/:id | `PUT` | {'text':'bar',<br> 'isComplete':false} | Update any data with any change. |