const addScriptForComponent = (scriptPath) => {
  let scriptForComponent = document.createElement('script');
  scriptForComponent.setAttribute('src', scriptPath);
  document.body.appendChild(scriptForComponent);
};

$(function () {
  $('#for-header').load('/html/header.html #header-component');
  $('#for-about-gasa-section').load(
    '/html/aboutGasaSection.html #about-gasa-component'
  );
  $('#for-book-baner-section').load(
    '/html/bookBanerSection.html #book-baner-component'
  );
  $('#for-book-inside-section').load(
    '/html/bookInsideSection.html #book-inside-component'
  );
  $('#for-about-author-section').load(
    '/html/aboutAuthorSection.html #about-author-component'
  );
  $('#for-all-books-section').load(
    '/html/allBooksSection.html #all-books-component'
  );
  $('#for-review-section').load(
    '/html/reviewSection.html #review-component',
    addScriptForComponent('./js/slider.js')
  );
  $('#for-relaxed-dogs-gallery-section').load(
    '/html/gallerySection.html #gallery-component'
  );
  $('#for-footer').load('/html/footer.html #footer-component');
});
