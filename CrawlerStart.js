//button.onclick=startSearch;

function startSearch(){
    var keyWords = document.getElementsByTagName("li")

    var search = '';
    // Get search criteria from textboxes and checkboxes
    
    // Inserting Keywords
    for(var i=0;i<keyWords.length;i++){
        search += '"'+keyWords[i]+'" ';
    }

    // run google search

    // Switch to results page

    // Display Results
}