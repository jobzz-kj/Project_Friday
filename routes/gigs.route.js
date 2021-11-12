const express = require('express');
const router = express.Router();
const gigController = require('../controller/gig.controller');

router.post('/',gigController.addGig);              // This means 'gigs/'
router.get('/',gigController.findGigs);             //this means 'gigs/'
router.get('/:id',gigController.findGigById);       //means 'gigs/id'
router.put('/:id',gigController.updateGig);
router.delete('/:id',gigController.deleteById);

module.exports = router;
