const express = require('express');
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//Routes
app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(html);
});

// REST API 
app.get('/api/users', (req,res) => {
    return res.json(users);
});

/*
app.get("/api/users/:id", (req,res) => {
    const id = Number(req.params.id);
    const user = users.find ((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users/:id" , (req, res) => {
    //tood: create new user
    return res.json({ status: "pending"});
});

app.patch("/api/users/:id" , (req, res) => {
    //tood: edit the user with id 
    return res.json({ status: "pending"});
});

app.delete("/api/users/:id" , (req, res) => {
    //tood: delete the user with id 
    return res.json({ status: "pending"});
});
*/

// CAN ALSO BE WRITTEN AS :-

app.route('/api/users/:id')
.get((req,res) => {
    const id = Number(req.params.id);
    const user = users.find ((user) => user.id === id);
    return res.json(user);
})
.put((req,res) => {
    return res.json({status: "Pending"});
 })
.delete((req,res) => {
    return res.json({status: "Pending"});
});


app.listen(PORT, () => {
    console.log('Server Started at ' + PORT );
} );