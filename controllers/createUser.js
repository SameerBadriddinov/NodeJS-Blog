module.exports = (req, res) => {
  res.render("register", {
    errors: req.flash("registrationError"),
    data: req.flash("data")[0]
  });
}