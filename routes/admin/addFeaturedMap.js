const express = require('express');
const router = express();

// const Map = require('../../models/Map');
// const featuredMap = require('../../models/featuredMap');

// router.post('/admin/add-featured-map', async (req,res) => {

//     const { mapCode, endDate } = req.body;

//     if(!mapCode || !startDate || !endDate) {
//         return res.render('admin/featured', { err });
//     }

//     if(Date.now() < endDate) {

//     }

//     try {

//         const map = await Map.findOne({ code });

//         if(!map) {

//         }

//         if(!placeTaken) {

//         }

//         let featuredPlace = 1;
//         if(await featuredMap.findOne({ featuredPlace: featuredPlace })) {
//             featuredPlace = 2;
//             if(await featuredMap.findOne({ featuredPlace: featuredPlace })) {
//                 featuredPlace = 3
//                 if(await featuredMap.findOne({ featuredPlace: featuredPlace })) {
//                     return res.render('admin/featured', { err });
//                 }
//             }
//         }


//         const featuredMap = new featuredMap({
//             mapCode,
//             featuredPlace,
//             endDate,
//             mapId = map._id
//         });

//         await featuredMap.save();

//     } catch(e) {
//         console.log(e);
//     }

// });

module.exports = router;