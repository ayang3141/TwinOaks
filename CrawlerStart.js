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
    
    var location=document.getElementById("location").value;
    var years=document.getElementById("years").value;
    var employees=document.getElementById("emps").value;
    if(document.getElementById("npo").value=="npo"){

    }
    if(document.getElementById("highschool").value=="highschool"){

    }
    // Inserting Keywords
    for(var i=0;i<keyWords.length;i++){
        search += '"'+keyWords[i]+'" ';
    }
    console.log(search);
    // run google search

    // Switch to results page

    // Display Results
}