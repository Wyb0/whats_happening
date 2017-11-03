const cheerio = require("cheerio")
const request = require("request")

//temp test case
let search = "unclelous"

request("https://www.instagram.com/explore/tags/" + search, function (error, response, html) {
  
    const $ = cheerio.load(html);
       //console.log(html)

    const results = [];

    $("script").each(function(i, element) {
        console.log(element.children[0])
    })
    
    for (i = 0; i < 6; i++) {
    //need to figure out how to hit JSON point w/o re-naming window._sharedData to data
    //onsole.log(entry_data.TagPage["0"].tag.media.nodes[i].code)
    }
})
