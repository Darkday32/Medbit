const express =require('express');
const router = express.Router();
const jwtoken= require ('../config/keys').secretOrKey
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth')

const User = require('../models/User')

// @desc    Tests users route
// @access  Public
const validateRegister = require('../validation/register')
const validateLogin = require('../validation/login')

router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));


// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register',async (req,res)=>{
  const {isValid, errors} = validateRegister(req.body)

  if(!isValid){
    return res.status(400).json(errors);
  }
  const{name,email,password} = req.body

  let user = await User.findOne({email})

      if (user){
        errors.email='User already exists'
      return res.status(400).json(errors)
     
      }
      
      user =new User({
        name,
        email,
        password
      })
    const salt = await bcrypt.genSalt(10);
    user.password= await bcrypt.hash(password,salt);
    await user.save();
    res.json(user)
    	
    })

//LOGIN
router.post(
	'/login',

	async (req, res) => {

    const {isValid, errors} = validateLogin(req.body)

    if(!isValid){
     return res.status(400).json(errors)
    }

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (!user) {
        errors.email = 'User not found';
				return res.status(400).json(errors);
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
        errors.password = 'Password Incorrect';
				return res.status(400).json(errors);
			}

			const payload = {
				
          id: user.id,
          name:user.name
				
			};

			jwt.sign(
			payload,
			jwtoken,
				{ expiresIn: 3600 },
				(err, token) => {
					if (err) throw err;
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);
    
// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);


module.exports=router;