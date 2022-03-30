window.onload=function main()
{
  console.log("TEMP")
  var key =  "AIzaSyDxSKKcB5nkA3tNiLlNKfxVjZO_lHZLrWI";

  var cx = "c7b3e921ea64eca47";

  var q = sessionStorage.getItem("searchQuery")
  console.log(q)

  var url = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=" + cx +"&q=" + q +"&callback=hndlr";

  var apiLink = document.createElement("script")
  apiLink.src = url;
  document.head.appendChild(apiLink);
}
