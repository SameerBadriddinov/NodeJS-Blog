const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = (req, res) => {
  User.create(req.body, async (err, user) => {
    if(err) {
      const registrationError = Object.keys(err.errors).map(key => err.errors[key].message);
      req.flash("registrationError", registrationError);
      req.flash("data", req.body);

      return res.redirect("/reg")
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.save();
    res.redirect("/login");
  })
}