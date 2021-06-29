const express = require('express');
const { errors } = require('pg-promise');
const BatmanModel = require('../models/BatmanModel');
const router = express.Router();
const slugify = require('slugify');

router.get('/:slug?', async (req, res) => {
    if (!!req.params.slug) {
        const { slug } = req.params;
        const theMedia = await BatmanModel.getBySlug(req.params.slug);
        const theReview = await BatmanModel.getReviewById(theMedia.id);
        res.render('template', {
            locals: {
                title: 'Batfacts',
                media: theMedia,
                review: theReview,
                is_logged_in: req.session.is_logged_in
            },
            partials: {
                body: 'partials/reviews'
            }
        });

    } else {
        const mediaData = await BatmanModel.getAllMedia();
        // console.log("TOPICS ARE: ", topicData)
        console.log('REQUEST SESSION: ', req.session);
        res.render('template', {
            locals: {
                title: 'Movies and Films starring Batman',
                data: mediaData,
                is_logged_in: req.session.is_logged_in
            },
            partials: {
                body: 'partials/home'


            }
        })
    }
})



module.exports = router;