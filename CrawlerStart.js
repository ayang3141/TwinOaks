//button.onclick=startSearch;
function addword()
{
    var wurd=document.getElementById("keywordInput").value;
    // var wurd = prompt("Add Key Word / Phrase Here");
    if (wurd!="")
    {
        var p=document.getElementById("wordlist");
        p.innerHTML="Here are the key words to be searched";
        var li=document.createElement("li"); 	
        li.innerHTML=wurd;
        var ul=document.getElementById("theList");
        ul.appendChild(li); 
    }
}
function clearList()
{
    let ul = document.getElementById("theList");
    while (ul.firstChild)
    {
        ul.removeChild(ul.firstChild);
    }
}


document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});

function startSearch(){
    var keyWords = document.getElementsByTagName("li")
    var search = '';
    // Get search criteria from textboxes and checkboxes
    
    // Inserting Keywords
    for(var i=0;i<keyWords.length;i++){
        search += '"'+keyWords[i].textContent+'" ';
    }
    var location=document.getElementById("location").value;
    console.log(search);
    // sessionStorage.setItem("searchQuery", search)

    // Switch to results page
    // window.location.href = "search.html";
    var numResults=document.getElementById("numResults").value;
    if(parseInt(numResults)!=NaN){
        var list=document.getElementById("results");
        while (list.firstChild)
        {
            list.removeChild(list.firstChild);
        }
        for(var i=0; i<parseInt(numResults);i++){
            var res=document.createElement("div");
            res.innerHTML="There's text in this<br/>and a url too";
            res.classList.add('roundrect');
            list.appendChild(res); 
        }
    }
}