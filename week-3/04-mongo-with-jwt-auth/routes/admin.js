const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

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

app.post('/signin', async(req, res) => {
    // Implement admin signup logic
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await Admin.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const token = jwt.sign({ username: username }, 'your-secret-key');
        res.status(200).json({ token });
    } 
    catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }

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