const categories = ["inspire", "management", "sports", "life", "funny", "love", "art", "students"]
axios.get('http://quotes.rest/qod.json?category=' + categories[Math.floor(Math.random() * (8 - 0)) + 0]).then((response) => {
    $('#quote').text(response.data.contents.quotes[0].quote)
})