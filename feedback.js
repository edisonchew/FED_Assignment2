let eSelectedRating = null;
let pSelectedRating = null;

function e(eRating) {
  eSelectedRating = eRating;
  updateSelectedRating();
}

function p(pRating) {
  pSelectedRating = pRating;
  updateChosenRating();
}

function updateSelectedRating() {
  let eRatingSpan = document.getElementById("eRating-value");

  if (eSelectedRating !== null) {

    eRatingSpan.textContent = eSelectedRating;
  }

  else {
    eRatingSpan.textContent = "Not Selected";
  }
}

function updateChosenRating() {
  let pRatingSpan = document.getElementById("pRating-value");

  if (pSelectedRating !== null) {

    pRatingSpan.textContent = pSelectedRating;

  }

  else {
    pRatingSpan.textContent = "Not Selected";
  }
}