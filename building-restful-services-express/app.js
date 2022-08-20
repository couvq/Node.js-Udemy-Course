const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

// data will be dummy as an array for now just to practice with express
const courses = [
    { id: 1, name: 'Course1'},
    { id: 2, name: 'Course2'},
    { id: 3, name: 'Course3'}
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// /api/courses/1
app.get('/api/courses/:id', (req, res) => {
    // find course with given id
    const id = parseInt(req.params.id);

    let matchingCourse = null;

    for(let course of courses) {
        if(course.id === id) {
            matchingCourse = course;
        }
    }

    if(matchingCourse !== null) {
        res.send(matchingCourse);
    } else {
        // we did not find the course with given id!
        res.status(404).send(`Sorry! We couldn't find a course with id of ${id}.`);
    }
});

// POST request to create a new course
app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.valid(req.body, schema);

    if(result.error) {
        // 400 Bad Request
        res.status(400).send(result.error);
        return; // don't execute rest of this function
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course);
    res.send(course);
});

// PUT request handler to update a course by id 'change the name'
app.put('/api/courses/:id', (req, res) => {
    const courseIdToUpdate = parseInt(req.params.id);

    for(let course of courses) {
        if(course.id === courseIdToUpdate) {
            course.name = req.body.name;

            res.send(course);
            return;
        }
    }

    // otherwise we did not find course with that id
    res.status(404).send(`Sorry! We couldn't find a course with id of ${courseIdToUpdate}.`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});
