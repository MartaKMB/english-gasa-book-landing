$(function () {
  $('#for-header').load('/html/header.html #header-component');
  $('#for-author-section').load('/html/authorSection.html #author-component');
  $('#for-all-books-section').load(
    '/html/allBooksSection.html #all-books-component'
  );
  $('#for-book-inside-section').load(
    '/html/bookInsideSection.html #book-inside-component'
  );
});
