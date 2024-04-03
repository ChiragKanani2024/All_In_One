function middleware(req, res, next) {
  if (req.body.query) {
    req.session.query = req.body.query;
  }
  next();
}

module.exports = middleware;
