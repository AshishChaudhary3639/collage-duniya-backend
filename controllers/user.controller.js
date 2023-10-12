const User = require('../models/user.model');

const signup = async (req, res) => {
    const {email}=req.body.email
  try {
    const isExist=await User.findOne({email})
    console.log(req.body)
    if(isExist){
        return  res.status(201).json({ error: 'Email already exist' });
    }
    const user = new User(req.body);
    await user.save();
    return res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { signup };
