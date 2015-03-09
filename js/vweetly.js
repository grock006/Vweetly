/*********************************************************************
*  #### Twitter Post Fetcher v10.0 ####
*  Coded by Jason Mayes 2013. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here: 
*  http://www.jasonmayes.com/projects/twitterApi/
*  Updates will be posted to this site.
*********************************************************************/
var twitterFetcher=function(){function x(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(c,e){return e}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function p(e,c){for(var g=[],f=RegExp("(^| )"+c+"( |$)"),a=e.getElementsByTagName("*"),h=0,d=a.length;h<d;h++)f.test(a[h].className)&&g.push(a[h]);return g}var y="",l=20,s=!0,k=[],t=!1,q=!0,r=!0,u=null,v=!0,z=!0,w=null,A=!0;return{fetch:function(e,c,g,f,a,h,d,b,m,n){void 0===g&&(g=20);void 0===f&&(s=!0);void 0===a&&(a=
!0);void 0===h&&(h=!0);void 0===d&&(d="default");void 0===b&&(b=!0);void 0===m&&(m=null);void 0===n&&(n=!0);t?k.push({id:e,domId:c,maxTweets:g,enableLinks:f,showUser:a,showTime:h,dateFunction:d,showRt:b,customCallback:m,showInteraction:n}):(t=!0,y=c,l=g,s=f,r=a,q=h,z=b,u=d,w=m,A=n,c=document.createElement("script"),c.type="text/javascript",c.src="http://cdn.syndication.twimg.com/widgets/timelines/"+e+"?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),document.getElementsByTagName("head")[0].appendChild(c))},
callback:function(e){var c=document.createElement("div");c.innerHTML=e.body;"undefined"===typeof c.getElementsByClassName&&(v=!1);e=[];var g=[],f=[],a=[],h=[],d=0;if(v)for(c=c.getElementsByClassName("tweet");d<c.length;){0<c[d].getElementsByClassName("retweet-credit").length?a.push(!0):a.push(!1);if(!a[d]||a[d]&&z)e.push(c[d].getElementsByClassName("e-entry-title")[0]),h.push(c[d].getAttribute("data-tweet-id")),g.push(c[d].getElementsByClassName("p-author")[0]),f.push(c[d].getElementsByClassName("dt-updated")[0]);
d++}else for(c=p(c,"tweet");d<c.length;)e.push(p(c[d],"e-entry-title")[0]),h.push(c[d].getAttribute("data-tweet-id")),g.push(p(c[d],"p-author")[0]),f.push(p(c[d],"dt-updated")[0]),0<p(c[d],"retweet-credit").length?a.push(!0):a.push(!1),d++;e.length>l&&(e.splice(l,e.length-l),g.splice(l,g.length-l),f.splice(l,f.length-l),a.splice(l,a.length-l));c=[];d=e.length;for(a=0;a<d;){if("string"!==typeof u){var b=new Date(f[a].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),b=u(b);
f[a].setAttribute("aria-label",b);if(e[a].innerText)if(v)f[a].innerText=b;else{var m=document.createElement("p"),n=document.createTextNode(b);m.appendChild(n);m.setAttribute("aria-label",b);f[a]=m}else f[a].textContent=b}b="";s?(r&&(b+='<div class="user">'+x(g[a].innerHTML)+"</div>"),b+='<p class="tweet">'+x(e[a].innerHTML)+"</p>",q&&(b+='<p class="timePosted">'+f[a].getAttribute("aria-label")+"</p>")):e[a].innerText?(r&&(b+='<p class="user">'+g[a].innerText+"</p>"),b+='<p class="tweet">'+e[a].innerText+
"</p>",q&&(b+='<p class="timePosted">'+f[a].innerText+"</p>")):(r&&(b+='<p class="user">'+g[a].textContent+"</p>"),b+='<p class="tweet">'+e[a].textContent+"</p>",q&&(b+='<p class="timePosted">'+f[a].textContent+"</p>"));A&&(b+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+h[a]+'" class="twitter_reply_icon">Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+h[a]+'" class="twitter_retweet_icon">Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+
h[a]+'" class="twitter_fav_icon">Favorite</a></p>');c.push(b);a++}if(null==w){e=c.length;g=0;f=document.getElementById(y);for(h="<ul>";g<e;)h+="<li>"+c[g]+"</li>",g++;f.innerHTML=h+"</ul>"}else w(c);t=!1;0<k.length&&(twitterFetcher.fetch(k[0].id,k[0].domId,k[0].maxTweets,k[0].enableLinks,k[0].showUser,k[0].showTime,k[0].dateFunction,k[0].showRt,k[0].customCallback,k[0].showInteraction),k.splice(0,1))}}}();


/*
* ### HOW TO CREATE A VALID ID TO USE: ###
* Go to www.twitter.com and sign in as normal, go to your settings page.
* Go to "Widgets" on the left hand side.
* Create a new widget for what you need eg "user timeline" or "search" etc. 
* Feel free to check "exclude replies" if you dont want replies in results.
* Now go back to settings page, and then go back to widgets page, you should
* see the widget you just created. Click edit.
* Now look at the URL in your web browser, you will see a long number like this:
* 345735908357048478
* Use this as your ID below instead!
*/

/**
 * How to use fetch function:
 * @param {string} Your Twitter widget ID.
 * @param {string} The ID of the DOM element you want to write results to. 
 * @param {int} Optional - the maximum number of tweets you want returned. Must
 *     be a number between 1 and 20.
 * @param {boolean} Optional - set true if you want urls and hash
       tags to be hyperlinked!
 * @param {boolean} Optional - Set false if you dont want user photo /
 *     name for tweet to show.
 * @param {boolean} Optional - Set false if you dont want time of tweet
 *     to show.
 * @param {function/string} Optional - A function you can specify to format
 *     tweet date/time however you like. This function takes a JavaScript date
 *     as a parameter and returns a String representation of that date.
 *     Alternatively you may specify the string 'default' to leave it with
 *     Twitter's default renderings.
 * @param {boolean} Optional - Show retweets or not. Set false to not show.
 * @param {function/string} Optional - A function to call when data is ready. It
 *     also passes the data to this function should you wish to manipulate it
 *     yourself before outputting. If you specify this parameter you  must
 *     output data yourself!
 * @param {boolean} Optional - Show links for reply, retweet, favourite. Set false to not show.
 */


var shows = [
  {
    idName: "breaking bad",
    peopleTimelineId: '392773551092027393',
    recapTimelineId: '392775610608521216',
    recapVultureId: '400026801797226496',
    recapAvclubId: '400027859269349376',
    trendingTimelineId: '392771686631632897'
  },
  {
    idName: "the walking dead",
    peopleTimelineId: '399332899100426243',
    recapTimelineId: '400483024430571520',
    recapVultureId: '400026801797226496',
    recapAvclubId: '400027859269349376',
    trendingTimelineId: '399333674652422144'
  },
  {
    idName: "game of thrones",
    peopleTimelineId: '399657695843598336',
    recapTimelineId: '399658037113135104',
    recapVultureId: '400026801797226496',
    recapAvclubId: '400027859269349376',
    trendingTimelineId: '399658406945886208'
  },
  {
    idName: "parks and recreation",
    peopleTimelineId: '400852474711379968',
    recapTimelineId: '400853691210559489',
    recapVultureId: '400853894764310530',
    recapAvclubId: '400854140470849536',
    trendingTimelineId: '400855825100447744'
  },
  {
    idName: "the voice",
    peopleTimelineId: '402256362760978432',
    recapTimelineId: '402305897445076992',
    recapVultureId: '402306070464323584',
    recapAvclubId: '402305538282635264',
    trendingTimelineId: '402305185118027776'
  },
  {
    idName: "ncis",
    peopleTimelineId: '402256204178546688',
    recapTimelineId: '402304658791600128',
    recapVultureId: '402304503291981825',
    recapAvclubId: '402304277982371841',
    trendingTimelineId: '402304070817296385'
  },
  {
    idName: "homeland",
    peopleTimelineId: '402256027451547648',
    recapTimelineId: '402259566252945409',
    recapVultureId: '402259354188910592',
    recapAvclubId: '402259089482207233',
    trendingTimelineId: '402257969493979136'
  },
  {
    idName: "new girl",
    peopleTimelineId: '402255855896117248',
    recapTimelineId: '402258803539714048',
    recapVultureId: '402258611654512640',
    recapAvclubId: '402258207369740288',
    trendingTimelineId: '402260260473171971'
  }
];

function loadShow(show){
  //loadingTweets();
  twitterFetcher.fetch(show.peopleTimelineId,'people-timeline', 5, true, true, true, 'default', true);
  twitterFetcher.fetch(show.recapTimelineId,'recaps-timeline', 2, true, true, true, 'default', true);
  twitterFetcher.fetch(show.recapVultureId,'recaps-vulture', 2, true, true, true, 'default', true);
  twitterFetcher.fetch(show.recapAvclubId,'recaps-avclub', 2, true, true, true, 'default', true);
  twitterFetcher.fetch(show.trendingTimelineId,'trending-timeline', 5, true, true, true, 'default', true);
  return false;
};

function findShow(showQuery) {
  if(showQuery == "Breaking Bad"){
    loadShow(shows[0]);
  }
  else if(showQuery == "The Walking Dead"){
    loadShow(shows[1]);
  }
  else if(showQuery == "Game of Thrones"){
    loadShow(shows[2]);
  }
  else if(showQuery == "Parks and Recreation"){
    loadShow(shows[3]);
  }
   else if(showQuery == "The Voice"){
    loadShow(shows[4]);
  }
  else if(showQuery == "NCIS"){
    loadShow(shows[5]);
  }
  else if(showQuery == "Homeland"){
    loadShow(shows[6]);
  }
  else if(showQuery == "New Girl"){
    loadShow(shows[7]);
  }
  else {
    alert("Sorry, your show is not available");
  }
  //removeSpin();
  return false;
};
  


$('select').on('change', function(){
    var showQuery = $('select').val(); 
    console.log(showQuery);
    findShow(showQuery);
    return false;
});

function loadingTweets() {
    //var x = tweets.length;
    //var n = 0;
    //var message = "Tweets done";
    //while (n < x) {
    $('i').addClass("fa-spin");
    console.log("loading Tweets");
};

function removeSpin() {
  console.log("removing spin");
  $('i').removeClass("fa-spin");
}


function handleTweets(tweets){
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('timeline');
    var html = '<ul>';
    while(n < x) {
      html += '<li>' + tweets[n] + '</li>';
      n++;
    }
    html += '</ul>';
    element.innerHTML = html;
}



// $('.typeahead').typeahead([
// {
// name: 'tv-shows',
// local: [ "Breaking Bad", "Game Of Thrones", "The Big Bang Theory"]
// }
// ]);




