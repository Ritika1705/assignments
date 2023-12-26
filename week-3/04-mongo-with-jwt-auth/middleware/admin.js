// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).json({ error: 'Access denied' });
    try 
    {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, 'your-secret-key');
        req.username = decoded.username;
        req.password = decoded.password;
        next();
    } 
    catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
    next();

}

module.exports = adminMiddleware;