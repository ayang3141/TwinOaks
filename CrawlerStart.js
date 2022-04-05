//button.onclick=startSearch;
window.onload = function initialize() {
    sessionStorage.setItem("searchQuery", "")
}
function addword() {
    var wurd = document.getElementById("keywordInput").value;
    // var wurd = prompt("Add Key Word / Phrase Here");
    sessionStorage.setItem("searchQuery", sessionStorage.getItem("searchQuery") + " " + wurd)
    if (wurd != "") {
        var li = document.createElement("li");
        li.innerHTML = wurd;
        var ul = document.getElementById("theList");
        ul.appendChild(li);
    }
}
function clearList() {
    let ul = document.getElementById("theList");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    initialize()
}


document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});

function startSearch() {
    var location = document.getElementById("location").value;
    console.log(sessionStorage.getItem("searchQuery"));
    // sessionStorage.setItem("searchQuery", search)

    // Switch to results page
    // window.location.href = "search.html";
    var numResults = document.getElementById("numResults").value;
    console.log("checking the checkboxes");
    var boxes = document.getElementsByClassName("box");
    console.log(boxes.length);
    for(var i=0;i<boxes.length;i++){
        box = boxes[i];
        console.log(box);
        if(box.checked && !sessionStorage.getItem("searchQuery").includes(box.id)){
            console.log(box.id);
            sessionStorage.setItem("searchQuery", sessionStorage.getItem("searchQuery") + " " + box.id);
        }
    }

    if (parseInt(numResults) != NaN) {
        var list = document.getElementById("results");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        
        var key = "AIzaSyDxSKKcB5nkA3tNiLlNKfxVjZO_lHZLrWI";

        var cx = "c7b3e921ea64eca47";

        var q = sessionStorage.getItem("searchQuery") + " \"" + location + "\""
        console.log(q)

        var url = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=" + cx + "&q=" + q + "&callback=hndlr";

        var apiLink = document.createElement("script")
        apiLink.src = url;
        document.head.appendChild(apiLink);
    }
}