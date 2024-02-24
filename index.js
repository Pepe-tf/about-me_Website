const express = require('express');
const app = express();

console.clear();
console.log(`Server started`);
app.use(express.static(__dirname + "/public"), (_, res, next) => {
    res.status(404);
    res.sendFile(__dirname + "/404.html");
});

app.listen(8080);