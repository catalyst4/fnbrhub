const express = require('express');
const router = express();
const axios = require('axios');

router.get('/news', async (req,res) => {

    const url = 'https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game';

    try {

        const api = await axios.get(url);

        const newsMotds = api.data.battleroyalenews.news.platform_motds;

        const newsItems = [];

        for(news of newsMotds) {
            if(news.platform == 'windows') {
                newsItems.push({
                    image: news.message.image,
                    title: news.message.title,
                    body: news.message.body
                });
            }
        }

        return res.render('maps/news', { newsItems });

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;