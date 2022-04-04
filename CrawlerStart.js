//button.onclick=startSearch;
function addword() {
    var wurd = document.getElementById("keywordInput").value;
    // var wurd = prompt("Add Key Word / Phrase Here");
    if (wurd != "") {
        var p = document.getElementById("wordlist");
        p.innerHTML = "Here are the key words to be searched";
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
}


document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});

function startSearch() {
    var keyWords = document.getElementsByTagName("li")
    var search = '';
    // Get search criteria from textboxes and checkboxes

    // Inserting Keywords
    for (var i = 0; i < keyWords.length; i++) {
        search += '"' + keyWords[i].textContent + '" ';
    }
    var location = document.getElementById("location").value;
    console.log(search);
    // sessionStorage.setItem("searchQuery", search)

    // run google search
    window.location.href = "search.html";
    // Switch to results page
    // window.location.href = "search.html";
    var numResults = document.getElementById("numResults").value;
    if (parseInt(numResults) != NaN) {
        var list = document.getElementById("results");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        var key = "AIzaSyDxSKKcB5nkA3tNiLlNKfxVjZO_lHZLrWI";

        var cx = "c7b3e921ea64eca47";

        var q = "inurl:.org" + sessionStorage.getItem("searchQuery")
        console.log(q)

        var url = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=" + cx + "&q=" + q + "&callback=hndlr";

        var apiLink = document.createElement("script")
        apiLink.src = url;
        document.head.appendChild(apiLink);
    }
}