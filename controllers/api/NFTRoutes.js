const router = require('express').Router();
const { User } = require('../../models');
const { NftAttributes } = require('../../models');
const { Nftitems } = require('../../models');




// router.post('/signup', async (req, res) => {
//   try {
//     const dbUserData = await User.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//     });

//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res.status(200).json(dbUserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });






module.exports = router;
