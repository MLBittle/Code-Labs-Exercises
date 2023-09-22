


const body    = document.body;
const input   = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');

function showFloater() {
  body.classList.add('show-floater');
}

function closeFloater() {
  if (body.classList.contains('show-floater')) {
  body.classList.remove('show-floater');
  }
}

input.addEventListener('focusin', showFloater);
input.addEventListener('focusout', closeFloater);
overlay.addEventListener('click', closeFloater);

// ====================================================

localStorage.setItem("my_thing", 'something');

const bookmarkslist = document.querySelector('.bookmarks-list');
const bookmarkForm  = document.querySelector('.bookmark-form');
const bookmarkInput = bookmarkForm.querySelector('input[type=text]');
const bookmarks     = JSON.parse(localStorage.getItem(bookmarks)) || [];

console.table(bookmarks);

function createBookmark(event) {
  event.preventDefault();
}

//addanew bookmark to the bookmarks
const title        = bookmarkInput.value;
const bookmark     = {
  title: title
};

bookmarks.push(bookmark);
fillBookmarksList(bookmarks);
storeBookmarks(bookmarks);
bookmarkForm.reset();

console.table(bookmarks);
//save that bookmarks list to local storage



//const title      = bookmarkInput.value; 
//const bookmark   = document.createElement('a');
//bookmark.className = 'bookmark';
//bookmark.innerText = title;
//bookmark.href      = '#';
//bookmark.target    = 'blank';
//console.log(bookmark);
//bookmarkslist.appendChild(bookmark);


}

function fillBookmarksList(bookmarks = []) {
const bookmarkslistHtml = bookmarks.map((bookmark) => {
  return `
  <a href="a" class="bookmark">
    ${bookmarks}
    </a>
   `;
  }).join('');


//  let bookmarksHtml = '';

//for (i = 0; i <bookmarks.length; i++) {
//  bookmarksHtml += `
//  <a href="a" class="bookmark">
//    ${bookmarks}
//  </a>
 // `;
  }

//console.log(bookmarksHtml);
bookmarkslist.innerHTML = bookmarksHtml;
function storeBookmarks(bookmarks = []) {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

}
bookmarkForm.addEventListener('submit', createBookmark);