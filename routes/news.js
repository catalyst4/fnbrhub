const express = require('express');
const router = express();
const axios = require('axios');

router.get('/news', async (req,res) => {

    const url = 'https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game';

    try {

        const api = await axios.get(url);

        const brNews = api.data.battleroyalenewsv2.news.motds;
        const brNewsList = []
        brNews.forEach(news => {
            brNewsList.push({
                image: news.image,
                title: news.title,
                body: news.body
            })
        });

        return res.render('maps/news', { brNewsList });

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;

