// ~~~~~~~~~~~~~~~~~ query selectors  ~~~~~~~~~~~~~~~~~~~~~~~~
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
// var tagline = document.querySelector(".tagline");
var coverDescriptor1 = document.querySelector(".tagline-1");
var coverDescriptor2 = document.querySelector(".tagline-2");
var randomButton = document.querySelector(".random-cover-button");
var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var homeButton = document.querySelector(".home-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");
var makeMyBookButton = document.querySelector(".create-new-book-button");



// ~~~~~~~~~~~~~~~~~ global variables ~~~~~~~~~~~~~~~~~~~~~~~~

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// ~~~~~~~~~~~~~~~~~ event listeners ~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener("load", displayCover);

randomButton.addEventListener('click', displayCover);

makeYourOwnCoverButton.addEventListener('click', createCoverPage)

// ~~~~~~~~~~~~~~~~~ functions ~~~~~~~~~~~~~~~~~~~~~~~~

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover() {
    currentCover = new Cover(covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)])
}

function displayCover() {
  generateRandomCover();
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  coverDescriptor1.innerText = currentCover.tagline1;
  coverDescriptor2.innerText = currentCover.tagline2;
}

// function displayFormView() {
//   showFormView();
//   hideHomeView();
//   showHomeButton();
//   hideRandomButton();
// }
//
// function showFormView() {
//   formView.classList.remove("hidden");
// }
//
// function hideHomeView() {
//   homeView.classList.add("hidden");
// }
//
// function showHomeButton() {
//   homeButton.classList.remove("hidden");
// }
//
// function hideRandomButton() {
//   randomButton.classList.add("hidden");
// }
//


function addHidden(element) {
  element.classList.add("hidden");
};

function removeHidden(elementTwo) {
  elementTwo.classList.remove("hidden")
}

function createCoverPage(){
  addHidden(homeView);
  addHidden(randomButton);
  addHidden(viewSavedCoversButton);
  removeHidden(homeButton);
  removeHidden(formView );
}

// function handlerChangeHiddenStatus() {
//   changeHiddenStatus(homeView, formView);
// }
//
// function displayFormView() {
//   showHide(homeView, formView)
// }





// function showHideForm(domElement) {
//   domElement.classList.toggle('hidden');
// }
