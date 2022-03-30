window.onload=function main()
{
  var key =  "AIzaSyDxSKKcB5nkA3tNiLlNKfxVjZO_lHZLrWI"; //API Key

  var cx = "c7b3e921ea64eca47";//Identifier for our specific search engine

  var q = sessionStorage.getItem("searchQuery")//Get the search query store from crawlerStart.js
  //console.log(q) //Log the query for debugging purposes

  var url = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=" + cx +"&q=" + q +"&callback=hndlr"; //Assemble URL link for the api

  var apiLink = document.createElement("script")
  apiLink.src = url;
  document.head.appendChild(apiLink); //Add the script to the script tag. Call back will go to hndler
}
