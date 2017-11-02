const cheerio = require("cheerio")
const request = require("request")

//temp test case
let search = "downtownorlando"

request("https://www.instagram.com/explore/tags/" + search, function (error, response, html) {

    const $ = cheerio.load(html);

    const results = [];
    let title = $("a._q8ysx").attr('href');

    // $("a._q8ysx _6y8ij").each(function(i, element){

    //     const href = $(element).attr("href");

    //     results.push({
    //         href: href
    //     })
    // })
    console.log(title);
})