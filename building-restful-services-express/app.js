const express = require('express');
const app = express();

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
        res.send(`Sorry! We couldn't find a course with that id.`);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});
