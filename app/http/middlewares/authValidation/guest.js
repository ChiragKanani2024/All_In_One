const jwt = require("jsonwebtoken");

const guest = (req, res, next) => {
  if (!req.cookies.token) {
    next();
  } else {
    try {
      let decoded = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
      res.redirect("/");
    } catch (err) {
      next();
    }
  }
};

module.exports = guest;
