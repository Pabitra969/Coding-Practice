const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const userControllers = {};

userControllers.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide name, user and password' });
    }
    //fetch user by email
    let user = await User.findByEmail(email)
    //checking if user already exists
    if (user) {
      return res.status(400).json({ message: 'User already exists' })
    }

    //create user
    //--> hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user = await User.create(name, email, hashedPassword);

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '2d' });

    // console.log(token);

    // res.cookie('token', token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
    //   maxAge: 2 * 24 * 60 * 60 * 1000
    // }); // 2 days

    res.status(201).json({ message: 'User registered successfully', user, token });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error });
  }
}


userControllers.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' })
    }

    //fetch user by email
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '2d' });

    // res.cookie('token', token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
    //   maxAge: 2 * 24 * 60 * 60 * 1000
    // }); // 2 days

    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error });
  }
}


userControllers.logoutUser = (req, res) => {
  res.cookie('token', '', {
    httpOnly : true,
    expires : new Date(0)
  })

  res.status(200).json({
    message : "Logout Successfully"
  })
}


userControllers.profile = (req, res) => {
  res.status(200).json({
    user : req.user
  })
  console.log(req.user);  
}

module.exports = userControllers;