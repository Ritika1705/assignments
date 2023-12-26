const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./admin")
const userRouter = require("./user");

// Middleware for parsing request bodies
app.use(bodyParser.json());

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const newuser = new User({
        username: username,
        password: password
    });

    newuser.save();
    res.json({
        message: 'User created successfully'
    })
});

app.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    return res.json({
        courses: courses
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router;