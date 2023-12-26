const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

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

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({ username });
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

module.exports = router