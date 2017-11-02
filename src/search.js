const cheerio = require("cheerio")
const request = require("request")

//temp test case
let search = "unclelous"

request("https://www.instagram.com/explore/tags/" + search, function (error, response, html) {
  
    const $ = cheerio.load(html);
console.log(html)
    const results = [];
    $("._70iju").each(function(i, element){
        console.log("gflkjgkjlsdgfk;l")
         const href = $(element).children[i].attr('href');
         console.log(href);
         results.push(href);
    })
})