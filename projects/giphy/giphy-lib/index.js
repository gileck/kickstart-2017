require('isomorphic-fetch');

const search = function (query) {
    const apiKey = "b6ea48d0a38349fc991b2818f94b8caf";
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=1&offset=0&rating=R&lang=en`;

    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => data.data[0].images.original.url)
        .then(url => { return {url: url}})
};

module.exports = {search};

