//button.onclick=startSearch;

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