var bookmark = document.getElementById('bookmark'); //bookmarl input
var url = document.getElementById('url'); //booknark url
var submit = document.getElementById('submit'); //submit button
var bookmarkList = []; //bookmarks list
var myTable = document.getElementById('myTable'); //html table
var websites = [];

if (localStorage.getItem('websitesBookmarks') != null) {
    websites = JSON.parse(localStorage.getItem('websitesBookmarks'));//load from local storage and convert to array of objects
    print();
}


submit.addEventListener('click', addBookmark);
function addBookmark() {
    var bookmarkObj =
    {
        name: bookmark.value,
        url: url.value
    }
    websites.push(bookmarkObj);

    localStorage.setItem('websitesBookmarks', JSON.stringify(websites));//save to local storage and convert to string

    print();
    clearForm();
}

function print() {
    var rowList = [];
    websites = JSON.parse(localStorage.getItem('websitesBookmarks'));//load from local storage and convert to array of objects

    for (var i = 0; i < websites.length; i++) {
        var row =
            `<tr>
        <td>${websites[i].name}</td>
        <td>
            <button class="btn btn-info" onclick="openWebsite(${i})">visit</button>
            <button class="btn btn-danger" onclick="deleteBookmark(${i})">Delete</button>
        </td>
    </tr>`
        rowList.push(row);
    }
    myTable.innerHTML = rowList;

}

function deleteBookmark(index) {
    var x = index;
    websites.splice(x, 1);
    localStorage.setItem('websitesBookmarks', JSON.stringify(websites));//save to local storage and convert to string   
    console.log('HERERERERER' + x);
    print();
}

function openWebsite(index) {
    var x = index;
    var url = websites[x].url;
    console.log(url);
    window.open(url);
}


function clearForm() {
    bookmark.value = '';
    url.value = '';
}


