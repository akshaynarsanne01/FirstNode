const express = require("express");
const validatemydata = require("./validator");
const app = express();
app.use(express.json());
let courses = [
  { id: 1, name: "akshay", email: "akshaynarsanne@gmail.com" },
  { id: 2, name: "nilesh", email: "nileshd@gmail.com" },
  { id: 3, name: "deepak", email: "deepakabande@gmail.com" },
];

app.get("/", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Given id is not found :(");
  res.send(course);
});

app.post("/api/courses/", (req, res) => {
  const course1 = req.body;
  const validator = validatemydata(course1);
  if (validator.valid == "true") {
    res.send(validator);
    courses.push({ id: courses.length + 1, ...course1 });
  } else {
    res.send(validator);
  }
});
//git add
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
