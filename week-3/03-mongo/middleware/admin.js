// Middleware for handling auth
async function adminExists(username, password)
{
   const data = await Admin.findOne({ username: username });
   return data !== null;
}


async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers['username']
    const password = req.headers['password']

    const result = await adminExists(username,password);

    if(result)
    {
        res.json({
            username: username,
            password: password
        })
    }
    else
    {
        res.status(404).send("Admin not found")
    }
    next();
}

module.exports = adminMiddleware;