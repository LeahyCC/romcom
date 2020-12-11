// ~~~~~~~~~~~~~~~~~ query selectors  ~~~~~~~~~~~~~~~~~~~~~~~~
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
// var tagline = document.querySelector(".tagline");
var coverDescriptor1 = document.querySelector(".tagline-1");
var coverDescriptor2 = document.querySelector(".tagline-2");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");
var homeButton = document.querySelector(".home-button");
var randomButton = document.querySelector(".random-cover-button");
var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");
var makeMyBookButton = document.querySelector(".create-new-book-button");
var savedCoverButton = document.querySelector(".save-cover-button");

// ~~~~~~~~~~~~~~~~~ global variables ~~~~~~~~~~~~~~~~~~~~~~~~

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// ~~~~~~~~~~~~~~~~~ event listeners ~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener("load", displayCover);
randomButton.addEventListener("click", displayCover);
makeYourOwnCoverButton.addEventListener("click", viewMakeYourOwnCoverPage);
viewSavedCoversButton.addEventListener("click", viewSavedCoversPage);
homeButton.addEventListener("click", viewHomePage);

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

function addHidden(element) {
  element.classList.add("hidden");
};

function removeHidden(elementTwo) {
  elementTwo.classList.remove("hidden")
}

function viewMakeYourOwnCoverPage(){
  addHidden(homeView);
  addHidden(savedView);
  addHidden(randomButton);
  addHidden(savedCoverButton);
  removeHidden(makeMyBookButton);
  removeHidden(viewSavedCoversButton)
  removeHidden(homeButton);
  removeHidden(formView);
}

function viewSavedCoversPage() {
  addHidden(homeView);
  addHidden(formView);
  addHidden(randomButton);
  addHidden(savedCoverButton);
  addHidden(makeMyBookButton);
  removeHidden(viewSavedCoversButton);
  removeHidden(homeButton);
  removeHidden(savedView);
}

function viewHomePage() {
  addHidden(formView);
  addHidden(savedView);
  addHidden(homeButton);
  addHidden(makeMyBookButton);
  removeHidden(homeView);
  removeHidden(randomButton);
  removeHidden(savedCoverButton);
}
