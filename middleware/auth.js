// express middleware auth.js for verifying if user is authenticted or not (method used is passport js local strategy)

module.exports = (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    res.send({
      status: true,
    });
  } else {
    res.send({
      status: false,
    });
  }
};
