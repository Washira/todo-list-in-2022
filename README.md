# My todo list service

This is a backend of todo list created to be REST API that be able to work with MongoDB.

For a frontend stay on here.
https://github.com/Washira/todo-list-react-in-2022


## How to use (Server)

You need to install node.js first, then install MongoDB. If it were installed completely, you could see how to using the service and how to start the UI step by step.

1. Clone code.

2. Into path '/server', go to terminal then commands `npm install`, notice your 'node_modules' appears on this path.

3. Open your local MongoDB.

4. Type command for running server.

```
npm run server
```

5. Test by access to 'http://localhost:5000/' then you will see the data of all todo list.


## Routes

| Route | HTTP Verb | Post Body | Description |
|------|---------|----------|---------|
| /todo | `GET` | - | List all data |
| /todo/create | `POST` | {'text':'foo',<br> 'isComplete':false} | Create a new title. |
| /todo/edit/:id | `GET` | - | Get any data by _id |
| /todo/delete/:id | `DELETE` | - | Delete any data by _id |
| /todo/update/:id | `PUT` | {'text':'bar',<br> 'isComplete':false} | Update any data with any change. |


## How to start the frontend (React.js)

1. Clone the code from here. https://github.com/Washira/todo-list-react-in-2022

2. Path into '/todo-list-react-in-2022' and install node_modules with command `npm install`.

3. Start with `npm start`.

4. Open a browser and access to 'http://localhost:3000/', you will be able to see the todo list UI.

5. You can type any text into an input box and click 'Add Todo' for save a new todo list data.

6. You can see the list below the input box. Then you click a cross icon of any row, the doto list row will DELETE and disappear from your screen.

7. You can EDIT text by click a pen icon, then an input box for editing text is displayed, if you need to save the edited text you can click 'Update' button is right of the input box.

8. For any todo list you need to mark for remember it is go to be COMPLETE task, you can click it on the text of any todo list row, the text will be strikethrough to become the complete list.