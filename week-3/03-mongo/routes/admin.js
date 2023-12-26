const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./admin")
const userRouter = require("./user");

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const newadmin = new Admin({
        username: username,
        password: password
    });

    newadmin.save();
    res.json({
        message: 'Admin created successfully'
    })
});

app.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newcourse = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    });

   const cnt = await Course.count({});

    newcourse.save();
    res.json({
        message: 'Course created successfully', 
        courseId: cnt + 1
    })

});

app.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    return res.json({
        courses: courses
    })
});

module.exports = router;