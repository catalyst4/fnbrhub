const searchBox = document.getElementById('search');
const mapGrid = document.getElementById('map-grid');

search = async () => {
    if((searchBox.value).length >= 2) {
        try {

            const searchMaps = await axios({
                method: 'POST',
                url: '/api/searchMaps',
                data: { query: searchBox.value }
            });

            const searchedMaps = await searchMaps.data.maps;

            while (mapGrid.firstChild) {
                mapGrid.removeChild(mapGrid.firstChild);
            }
            
            for(map of searchedMaps) {
                const mapItem = document.createElement('div');
                mapItem.classList.add('map-item');
                mapGrid.appendChild(mapItem);
                const linkWrapper = document.createElement('a');
                linkWrapper.classList.add('link-wrapper');
                linkWrapper.setAttribute('href', `/maps/id/${map.code}`);
                mapItem.appendChild(linkWrapper);
                const itemWrapper = document.createElement('div');
                itemWrapper.classList.add('item-wrapper');
                linkWrapper.appendChild(itemWrapper);
                const image = document.createElement('img');
                image.classList.add('lazyload');
                image.setAttribute('src', `https://assets.fnbrhub.com/${map.image1}`);
                image.setAttribute('data-src', `https://assets.fnbrhub.com/${map.image1}`);
                itemWrapper.appendChild(image);
                const mapName = document.createElement('h1');
                mapName.innerText = map.name;
                itemWrapper.appendChild(mapName);
                const mapCreator = document.createElement('h5');
                mapCreator.innerText = map.creator;
                itemWrapper.appendChild(mapCreator);
            }

        } catch(e) {
            console.log(e);
        }
    }
}