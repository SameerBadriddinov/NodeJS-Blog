const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, async (error, user) => {
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if(validPassword) {
        req.session.userId = user._id;
        res.redirect("/");
      }else{
        res.redirect("/login");
      }
    } else { 
      return res.redirect('/login')
    }
  })
}