import getData from "./data.js";
import factoryMethods from "./factory.js";
import renderToDom from "./dom.js";

const newTripContainer = document.querySelector("#newTrip__div");
const travelListContainer = document.querySelector("#travelList");

/*
This function fetches the "places" data from the API
*/

const renderDestinations = () => {
  getData.fetchPlaces().then(parsedPlaces => {
    // iterate through the parsed data and store it in a variable
    for (let i = 0; i < parsedPlaces.length; i++) {
      const place = parsedPlaces[i];

      // stores the HTML string for places
      const placesHTMLString = factoryMethods.createTravelList(place);

      // renders the HTML string to the DOM
      renderToDom(travelListContainer, placesHTMLString);

      // after the sections are rendered to the dom. the section to display a visa is stored in a variable
      const visaRequiredContainer = document.querySelector(
        `#visaContainer--${place.id}`
      );

      // if the value of visa_required is true, then display "Visa Required" in DOM
      if (place.visa_required === true) {
        const visaRequiredString = factoryMethods.createVisaRequired();
        renderToDom(visaRequiredContainer, visaRequiredString);
      }
    }
  });
};

renderDestinations();

/*
This function fetches the "interests" section of the API
*/

const renderInterestPoints = () => {
  getData.fetchPointsOfInterests().then(parsedInterests => {
    // iterate through parsed data and store in a variable
    for (let i = 0; i < parsedInterests.length; i++) {
      const pointOfInterest = parsedInterests[i];

      // store the container for points of interest
      const interestContainer = document.querySelector(
        `#interestContainer--${pointOfInterest.placeId}`
      );

      // stores HTML string for points of interest in a variable
      const pointOfInterestString = factoryMethods.createInterestSection(
        pointOfInterest
      );

      // render points of interest to the DOM
      renderToDom(interestContainer, pointOfInterestString);
    }
  });
};

renderInterestPoints();

/*
EVENT LISTENERS
*/

const eventListeners = {
  addNewTrip: newTripContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("addNewTrip")) {
      console.log("add new trip");
      newTripContainer.innerHTML = "";
      const newTripForm = createTravelerDisplay.createNewTripForm();
      renderToDom(newTripContainer, newTripForm);
    }
  }),

  editCost: travelListContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("editCost")) {
      console.log("edit cost");
      const id = event.target.id.split("--")[1];
      console.log("cost id: ", id);

      const costContainer = document.querySelector("#pointOfInterestCost");
      costContainer.innerHTML = "";
      costContainer.innerHTML = `
      <div id="newCost__form">
      <input type="hidden" id="newCost__hiddenInput" value="" />
      <fieldset>
        <label>Edit Cost</label>
        <input type="number" id="newCost__input" >
      </fieldset>
      <button id="submitEditCost">Submit New Cost</button>
      </div>
      `;
    }
  }),

  // DELETE interest point fully functional.
  deletePointOfInterest: travelListContainer.addEventListener(
    "click",
    event => {
      if (event.target.id.includes("delete")) {
        console.log("delete point of interest");
        const id = event.target.id.split("--")[1];
        console.log(id);
        getData
          .deletePointOfIntersts(id)
          .then((travelListContainer.innerHTML = ""))
          .then(renderDestinations)
          .then(renderInterestPoints);
      }
    }
  ),

  addReview: travelListContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("addReview")) {
      console.log("add review");
      const id = event.target.id.split("--")[1];
      console.log("review id", id);

      const addReviewContainer = document.querySelector(
        `#addReviewButton--${id}`
      ).parentElement;

      addReviewContainer.innerHTML = "";

      addReviewContainer.innerHTML = `
      <div id="addReview__form">
      <input type="hidden" id="addReview__hiddenInput" value="" />
      <fieldset>
        <label>Add Review</label>
        <input type="text" id="reviewPointOfInterest__input" >
      </fieldset>
      <fieldset>
        <label>Rating</label>
        <select id="rating__select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
      </fieldset>
      <button id="submitReview__button">Submit</button>
    </div>`;
    }
  })
};
