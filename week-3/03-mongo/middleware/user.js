
async function userExists(username, password)
{
   const data = await User.findOne({ username: username });
   return data !== null;
}


async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers['username']
    const password = req.headers['password']

    const result = await userExists(username,password);

    if(result)
    {
        res.json({
            username: username,
            password: password
        });
        next();
    }
    else
    {
        res.status(404).send("User not found");
        next();
    }

    
}

module.exports = userMiddleware;