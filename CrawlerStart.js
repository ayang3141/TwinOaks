window.onload = function initialize() {
    sessionStorage.setItem("searchQuery", "")
    sessionStorage.setItem("search", 1)
}

function initialize() {
    sessionStorage.setItem("searchQuery", "");
}

function addword() {
    var word = document.getElementById("keywordInput").value;
    // var wurd = prompt("Add Key Word / Phrase Here");
    // sessionStorage.setItem("searchQuery", sessionStorage.getItem("searchQuery") + " " + wurd)
    if (word != "") {
        var li = document.createElement("li");
        li.innerHTML = word;
        var ul = document.getElementById("theList");
        ul.appendChild(li);
        document.getElementById("aList").hidden = false;
        // document.getElementById("clearinglist").hidden = false;
        if (!sessionStorage.getItem("searchQuery").includes(word.replace(/\s/g, '+'))) {
            if (sessionStorage.getItem("searchQuery") == "") {
                sessionStorage.setItem("searchQuery", word.replace(/\s/g, '+'));
            }
            else {
                sessionStorage.setItem("searchQuery", sessionStorage.getItem("searchQuery") + "+" + word.replace(/\s/g, '+'));
            }
        }
    }
}

function removeword() {
    var word = document.getElementById("removedWordInput").value;
    // var wurd = prompt("Add Key Word / Phrase Here");
    // sessionStorage.setItem("searchQuery", sessionStorage.getItem("searchQuery") + " " + wurd)
    if (word != "") {
        var li = document.createElement("li");
        li.innerHTML = word;
        var ul = document.getElementById("removedList");
        ul.appendChild(li);
        // document.getElementById("clearingRlist").hidden = false;

        document.getElementById("rList").hidden = false;
        // if (!sessionStorage.getItem("searchQuery").includes(word.replace(/\s/g, '+'))){
        //     if (sessionStorage.getItem("searchQuery") == "") {
        //         sessionStorage.setItem("searchQuery", word.replace(/\s/g, '+'));
        //     }
        //     else {
        //         sessionStorage.setItem("searchQuery", sessionStorage.getItem("searchQuery") + "+" + word.replace(/\s/g, '+'));
        //     }
        // }
    }
}

function clearList() {
    let ul = document.getElementById("theList");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    document.getElementById("aList").hidden = true;
    // document.getElementById("clearinglist").hidden = true;
    initialize()
}

function clearRList() {
    let ul = document.getElementById("removedList");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    document.getElementById("rList").hidden = true;
    // document.getElementById("clearingRlist").hidden = true;
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

    console.log("checking the checkboxes");
    var boxes = document.getElementsByClassName("box");
    // console.log(boxes.length);
    for (var i = 0; i < boxes.length; i++) {
        box = boxes[i];
        // console.log(box);
        if (box.checked && !sessionStorage.getItem("searchQuery").includes(box.id.replace(/\s/g, '+'))) {
            // console.log(box.id);
            if (sessionStorage.getItem("searchQuery") == "") {
                sessionStorage.setItem("searchQuery", box.id.replace(/\s/g, '+'));
            }
            else {
                sessionStorage.setItem("searchQuery", sessionStorage.getItem("searchQuery") + "+" + box.id.replace(/\s/g, '+'));
            }
        }
    }

    var list = document.getElementById("results");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    var countries = [
        { "name": "Afghanistan", "code": "AF" },
        { "name": "Aland Islands", "code": "AX" },
        { "name": "Albania", "code": "AL" },
        { "name": "Algeria", "code": "DZ" },
        { "name": "American Samoa", "code": "AS" },
        { "name": "Andorra", "code": "AD" },
        { "name": "Angola", "code": "AO" },
        { "name": "Anguilla", "code": "AI" },
        { "name": "Antarctica", "code": "AQ" },
        { "name": "Antigua and Barbuda", "code": "AG" },
        { "name": "Argentina", "code": "AR" },
        { "name": "Armenia", "code": "AM" },
        { "name": "Aruba", "code": "AW" },
        { "name": "Australia", "code": "AU" },
        { "name": "Austria", "code": "AT" },
        { "name": "Azerbaijan", "code": "AZ" },
        { "name": "Bahamas", "code": "BS" },
        { "name": "Bahrain", "code": "BH" },
        { "name": "Bangladesh", "code": "BD" },
        { "name": "Barbados", "code": "BB" },
        { "name": "Belarus", "code": "BY" },
        { "name": "Belgium", "code": "BE" },
        { "name": "Belize", "code": "BZ" },
        { "name": "Benin", "code": "BJ" },
        { "name": "Bermuda", "code": "BM" },
        { "name": "Bhutan", "code": "BT" },
        { "name": "Bolivia", "code": "BO" },
        { "name": "Bonaire, Sint Eustatius and Saba", "code": "BQ" },
        { "name": "Bosnia and Herzegovina", "code": "BA" },
        { "name": "Botswana", "code": "BW" },
        { "name": "Bouvet Island", "code": "BV" },
        { "name": "Brazil", "code": "BR" },
        { "name": "British Indian Ocean Territory", "code": "IO" },
        { "name": "Brunei Darussalam", "code": "BN" },
        { "name": "Bulgaria", "code": "BG" },
        { "name": "Burkina Faso", "code": "BF" },
        { "name": "Burundi", "code": "BI" },
        { "name": "Cambodia", "code": "KH" },
        { "name": "Cameroon", "code": "CM" },
        { "name": "Canada", "code": "CA" },
        { "name": "Cape Verde", "code": "CV" },
        { "name": "Cayman Islands", "code": "KY" },
        { "name": "Central African Republic", "code": "CF" },
        { "name": "Chad", "code": "TD" },
        { "name": "Chile", "code": "CL" },
        { "name": "China", "code": "CN" },
        { "name": "Christmas Island", "code": "CX" },
        { "name": "Cocos (Keeling) Islands", "code": "CC" },
        { "name": "Colombia", "code": "CO" },
        { "name": "Comoros", "code": "KM" },
        { "name": "Congo", "code": "CG" },
        { "name": "Congo, Democratic Republic of the Congo", "code": "CD" },
        { "name": "Cook Islands", "code": "CK" },
        { "name": "Costa Rica", "code": "CR" },
        { "name": "Cote D'Ivoire", "code": "CI" },
        { "name": "Croatia", "code": "HR" },
        { "name": "Cuba", "code": "CU" },
        { "name": "Curacao", "code": "CW" },
        { "name": "Cyprus", "code": "CY" },
        { "name": "Czech Republic", "code": "CZ" },
        { "name": "Denmark", "code": "DK" },
        { "name": "Djibouti", "code": "DJ" },
        { "name": "Dominica", "code": "DM" },
        { "name": "Dominican Republic", "code": "DO" },
        { "name": "Ecuador", "code": "EC" },
        { "name": "Egypt", "code": "EG" },
        { "name": "El Salvador", "code": "SV" },
        { "name": "Equatorial Guinea", "code": "GQ" },
        { "name": "Eritrea", "code": "ER" },
        { "name": "Estonia", "code": "EE" },
        { "name": "Ethiopia", "code": "ET" },
        { "name": "Falkland Islands (Malvinas)", "code": "FK" },
        { "name": "Faroe Islands", "code": "FO" },
        { "name": "Fiji", "code": "FJ" },
        { "name": "Finland", "code": "FI" },
        { "name": "France", "code": "FR" },
        { "name": "French Guiana", "code": "GF" },
        { "name": "French Polynesia", "code": "PF" },
        { "name": "French Southern Territories", "code": "TF" },
        { "name": "Gabon", "code": "GA" },
        { "name": "Gambia", "code": "GM" },
        { "name": "Georgia", "code": "GE" },
        { "name": "Germany", "code": "DE" },
        { "name": "Ghana", "code": "GH" },
        { "name": "Gibraltar", "code": "GI" },
        { "name": "Greece", "code": "GR" },
        { "name": "Greenland", "code": "GL" },
        { "name": "Grenada", "code": "GD" },
        { "name": "Guadeloupe", "code": "GP" },
        { "name": "Guam", "code": "GU" },
        { "name": "Guatemala", "code": "GT" },
        { "name": "Guernsey", "code": "GG" },
        { "name": "Guinea", "code": "GN" },
        { "name": "Guinea-Bissau", "code": "GW" },
        { "name": "Guyana", "code": "GY" },
        { "name": "Haiti", "code": "HT" },
        { "name": "Heard Island and Mcdonald Islands", "code": "HM" },
        { "name": "Holy See (Vatican City State)", "code": "VA" },
        { "name": "Honduras", "code": "HN" },
        { "name": "Hong Kong", "code": "HK" },
        { "name": "Hungary", "code": "HU" },
        { "name": "Iceland", "code": "IS" },
        { "name": "India", "code": "IN" },
        { "name": "Indonesia", "code": "ID" },
        { "name": "Iran, Islamic Republic of", "code": "IR" },
        { "name": "Iraq", "code": "IQ" },
        { "name": "Ireland", "code": "IE" },
        { "name": "Isle of Man", "code": "IM" },
        { "name": "Israel", "code": "IL" },
        { "name": "Italy", "code": "IT" },
        { "name": "Jamaica", "code": "JM" },
        { "name": "Japan", "code": "JP" },
        { "name": "Jersey", "code": "JE" },
        { "name": "Jordan", "code": "JO" },
        { "name": "Kazakhstan", "code": "KZ" },
        { "name": "Kenya", "code": "KE" },
        { "name": "Kiribati", "code": "KI" },
        { "name": "Korea, Democratic People's Republic of", "code": "KP" },
        { "name": "Korea, Republic of", "code": "KR" },
        { "name": "Kosovo", "code": "XK" },
        { "name": "Kuwait", "code": "KW" },
        { "name": "Kyrgyzstan", "code": "KG" },
        { "name": "Lao People's Democratic Republic", "code": "LA" },
        { "name": "Latvia", "code": "LV" },
        { "name": "Lebanon", "code": "LB" },
        { "name": "Lesotho", "code": "LS" },
        { "name": "Liberia", "code": "LR" },
        { "name": "Libyan Arab Jamahiriya", "code": "LY" },
        { "name": "Liechtenstein", "code": "LI" },
        { "name": "Lithuania", "code": "LT" },
        { "name": "Luxembourg", "code": "LU" },
        { "name": "Macao", "code": "MO" },
        { "name": "Macedonia, the Former Yugoslav Republic of", "code": "MK" },
        { "name": "Madagascar", "code": "MG" },
        { "name": "Malawi", "code": "MW" },
        { "name": "Malaysia", "code": "MY" },
        { "name": "Maldives", "code": "MV" },
        { "name": "Mali", "code": "ML" },
        { "name": "Malta", "code": "MT" },
        { "name": "Marshall Islands", "code": "MH" },
        { "name": "Martinique", "code": "MQ" },
        { "name": "Mauritania", "code": "MR" },
        { "name": "Mauritius", "code": "MU" },
        { "name": "Mayotte", "code": "YT" },
        { "name": "Mexico", "code": "MX" },
        { "name": "Micronesia, Federated States of", "code": "FM" },
        { "name": "Moldova, Republic of", "code": "MD" },
        { "name": "Monaco", "code": "MC" },
        { "name": "Mongolia", "code": "MN" },
        { "name": "Montenegro", "code": "ME" },
        { "name": "Montserrat", "code": "MS" },
        { "name": "Morocco", "code": "MA" },
        { "name": "Mozambique", "code": "MZ" },
        { "name": "Myanmar", "code": "MM" },
        { "name": "Namibia", "code": "NA" },
        { "name": "Nauru", "code": "NR" },
        { "name": "Nepal", "code": "NP" },
        { "name": "Netherlands", "code": "NL" },
        { "name": "Netherlands Antilles", "code": "AN" },
        { "name": "New Caledonia", "code": "NC" },
        { "name": "New Zealand", "code": "NZ" },
        { "name": "Nicaragua", "code": "NI" },
        { "name": "Niger", "code": "NE" },
        { "name": "Nigeria", "code": "NG" },
        { "name": "Niue", "code": "NU" },
        { "name": "Norfolk Island", "code": "NF" },
        { "name": "Northern Mariana Islands", "code": "MP" },
        { "name": "Norway", "code": "NO" },
        { "name": "Oman", "code": "OM" },
        { "name": "Pakistan", "code": "PK" },
        { "name": "Palau", "code": "PW" },
        { "name": "Palestinian Territory, Occupied", "code": "PS" },
        { "name": "Panama", "code": "PA" },
        { "name": "Papua New Guinea", "code": "PG" },
        { "name": "Paraguay", "code": "PY" },
        { "name": "Peru", "code": "PE" },
        { "name": "Philippines", "code": "PH" },
        { "name": "Pitcairn", "code": "PN" },
        { "name": "Poland", "code": "PL" },
        { "name": "Portugal", "code": "PT" },
        { "name": "Puerto Rico", "code": "PR" },
        { "name": "Qatar", "code": "QA" },
        { "name": "Reunion", "code": "RE" },
        { "name": "Romania", "code": "RO" },
        { "name": "Russian Federation", "code": "RU" },
        { "name": "Rwanda", "code": "RW" },
        { "name": "Saint Barthelemy", "code": "BL" },
        { "name": "Saint Helena", "code": "SH" },
        { "name": "Saint Kitts and Nevis", "code": "KN" },
        { "name": "Saint Lucia", "code": "LC" },
        { "name": "Saint Martin", "code": "MF" },
        { "name": "Saint Pierre and Miquelon", "code": "PM" },
        { "name": "Saint Vincent and the Grenadines", "code": "VC" },
        { "name": "Samoa", "code": "WS" },
        { "name": "San Marino", "code": "SM" },
        { "name": "Sao Tome and Principe", "code": "ST" },
        { "name": "Saudi Arabia", "code": "SA" },
        { "name": "Senegal", "code": "SN" },
        { "name": "Serbia", "code": "RS" },
        { "name": "Serbia and Montenegro", "code": "CS" },
        { "name": "Seychelles", "code": "SC" },
        { "name": "Sierra Leone", "code": "SL" },
        { "name": "Singapore", "code": "SG" },
        { "name": "Sint Maarten", "code": "SX" },
        { "name": "Slovakia", "code": "SK" },
        { "name": "Slovenia", "code": "SI" },
        { "name": "Solomon Islands", "code": "SB" },
        { "name": "Somalia", "code": "SO" },
        { "name": "South Africa", "code": "ZA" },
        { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
        { "name": "South Sudan", "code": "SS" },
        { "name": "Spain", "code": "ES" },
        { "name": "Sri Lanka", "code": "LK" },
        { "name": "Sudan", "code": "SD" },
        { "name": "Suriname", "code": "SR" },
        { "name": "Svalbard and Jan Mayen", "code": "SJ" },
        { "name": "Swaziland", "code": "SZ" },
        { "name": "Sweden", "code": "SE" },
        { "name": "Switzerland", "code": "CH" },
        { "name": "Syrian Arab Republic", "code": "SY" },
        { "name": "Taiwan", "code": "TW" },
        { "name": "Tajikistan", "code": "TJ" },
        { "name": "Tanzania, United Republic of", "code": "TZ" },
        { "name": "Thailand", "code": "TH" },
        { "name": "Timor-Leste", "code": "TL" },
        { "name": "Togo", "code": "TG" },
        { "name": "Tokelau", "code": "TK" },
        { "name": "Tonga", "code": "TO" },
        { "name": "Trinidad and Tobago", "code": "TT" },
        { "name": "Tunisia", "code": "TN" },
        { "name": "Turkey", "code": "TR" },
        { "name": "Turkmenistan", "code": "TM" },
        { "name": "Turks and Caicos Islands", "code": "TC" },
        { "name": "Tuvalu", "code": "TV" },
        { "name": "Uganda", "code": "UG" },
        { "name": "Ukraine", "code": "UA" },
        { "name": "United Arab Emirates", "code": "AE" },
        { "name": "United Kingdom", "code": "GB" },
        { "name": "United States", "code": "US" },
        { "name": "United States Minor Outlying Islands", "code": "UM" },
        { "name": "Uruguay", "code": "UY" },
        { "name": "Uzbekistan", "code": "UZ" },
        { "name": "Vanuatu", "code": "VU" },
        { "name": "Venezuela", "code": "VE" },
        { "name": "Viet Nam", "code": "VN" },
        { "name": "Virgin Islands, British", "code": "VG" },
        { "name": "Virgin Islands, U.s.", "code": "VI" },
        { "name": "Wallis and Futuna", "code": "WF" },
        { "name": "Western Sahara", "code": "EH" },
        { "name": "Yemen", "code": "YE" },
        { "name": "Zambia", "code": "ZM" },
        { "name": "Zimbabwe", "code": "ZW" }
    ];

    var key = "AIzaSyAEriC2fkUHJfDVV85neeITAepB5EwNAxA";

    var gl = ""
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].name == location) {
            gl = countries[i].code;
        }
    }

    var cx = "c7b3e921ea64eca47";

    var exactTerms = gl

    var excludeTerms = "filetype:pdf"

    var orTerms = ""

    var hq = ""

    var q = sessionStorage.getItem("searchQuery") + '+' + location.replace(/\s/g, '+')
    console.log(q)

    console.log(sessionStorage.getItem("search"));
    var url = "https://customsearch.googleapis.com/customsearch/v1?key=" + key + "&cx=" + cx + "&q=" + q + "&cr=" + "country" + gl + "&exactTerms="
        + exactTerms + "&orTerms=" + orTerms + "&gl=" + gl + "&start=" + sessionStorage.getItem("search") + "&hq=" + hq + "&excludeTerms=" + excludeTerms + "&callback=hndlr";

    console.log(url);
    var apiLink = document.createElement("script")
    apiLink.src = url;
    document.head.appendChild(apiLink);
}


function getMoreResults() {
    sessionStorage.setItem("search", parseInt(sessionStorage.getItem("search")) + 10);
    document.getElementById("pageNum").innerText = "Page: " + (Math.trunc(sessionStorage.getItem("search") / 10) + 1);
    startSearch();
}

function getLessResults() {
    if (sessionStorage.getItem("search") > 1) {
        sessionStorage.setItem("search", sessionStorage.getItem("search") - 10);
        document.getElementById("pageNum").innerText = "Page: " + (Math.trunc(sessionStorage.getItem("search") / 10) + 1);
        startSearch();
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function showLocations() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Filter out words when the user types
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("location");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function setLocation(location) {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("location").value = location;
}

function makePageButtons(numPages) {
    var pages = document.getElementById("pages");
    var children = pages.children;
    for (var i = 0; i < children.length; i++) {
        var ele = children[i];
        if (ele.className == "pageButton") {
            if (parseInt(ele.innerText) <= numPages) {
                ele.hidden = false;
                ele.style = "display: inline-block;"
            } else {
                ele.hidden = true;
            }
        }
    }
}

function setPage(thePage) {
    sessionStorage.setItem("search", 10 * (thePage - 1) + 1);
    document.getElementById("pageNum").innerText = "Page: " + (Math.trunc(sessionStorage.getItem("search") / 10) + 1);
    startSearch();
}