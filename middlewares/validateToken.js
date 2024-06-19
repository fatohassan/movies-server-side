const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  try {
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      const token = authHeader.split(" ")[1];
      const validate = await jwt.verify(token, process.env.SECRET_KEY);
      console.log(validate);
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send(error.message)
  }
};

module.exports = { validateToken };
