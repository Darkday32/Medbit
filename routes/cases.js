const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Case = require('../models/Case');
const Comment = require('../models/Comment');

const validateCase = require('../validation/cases')



// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'case Works' }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get('/', (req, res) => {
 Case.find()
    .sort({ date: -1 })
    .then(cases => res.json(cases))
    .catch(err => res.status(404).json({ nopostsfound: 'No cases found' }));
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get('/:id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Case.findById(req.params.id).populate('comments').exec((err,caSe) => {res.json(caSe)
  }) 
});

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  '/',
  
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
   
    const{errors, isValid}= validateCase(req.body)

    if(!isValid){
      return res.status(400).json(errors)
    }

    const{name, ward, condition, system, positives} = req.body
    
    const newCase = new Case({
     name,
     ward,
     system,
     condition,
     positives,
     username:req.user.name,
     user: req.user.id
    });

    newCase.save().then(newCase => res.json(newCase));
    
  }
);

//UPDATE case
//PRIVATE

router.put('/:id', 

passport.authenticate('jwt', { session: false }),

async (req, res) => {

  const{errors, isValid}= validateCase(req.body)

  if(!isValid){
    return res.status(400).json(errors)
  }

  const{name, ward, condition, positives} = req.body

	// Build case object
	const caseFields = {};
	if (name) caseFields.name = name;
	if (ward) caseFields.ward = ward;
	if (condition) caseFields.condition = condition;
	if (positives) caseFields.positives = positives;

	try {
		let caSe = await Case.findById(req.params.id);

		if (!caSe) return res.status(404).json({ msg: 'case not found' });

		// Make sure user owns case
	

    if (caSe.user.toString() !== req.user.id){
      errors.auth='Not Authorized'
			return res.status(401).json(errors);
    }
      

		caSe = await Case.findByIdAndUpdate(
			req.params.id,
			{ $set: caseFields },
			{ new: true }
		);
			
		res.json(caSe);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});





// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    let errors;
      Case.findById(req.params.id)
        .then(caSe => {
          // Check for post owner
          if (caSe.user.toString() !== req.user.id) {
            // let errors;
            errors ='Unauthorized'
            return res.status(401).json(errors);
          }
          // Delete
          caSe.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
  }
);


//COMMENT ROUTES

//TEST
router.get('/:id/comment',
passport.authenticate('jwt', { session: false }),
(req,res)=>{
res.json('success')

}
)

// @route   POST api/posts/comment/:id
// @desc    Add comment to post
// @access  Private
router.post(
  '/:id/comment',
  passport.authenticate('jwt', { session: false }),
   (req, res) => {
    Case.findById(req.params.id)
      .then(caSe => {
        const newComment = new Comment ({
          case:caSe._id,
          text: req.body.text,
          username:req.user.name,
          user: req.user.id
        });
        // Add to comments
       newComment.save()
       caSe.comments.push(newComment._id)
       caSe.save()
       res.json(caSe)
      })
      .catch(err => res.status(404).json({ casenotfound: 'No case found' }));
  }
);



module.exports = router;
