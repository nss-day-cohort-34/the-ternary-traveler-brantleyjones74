import getData from "./data.js";
import createTravelerDisplay from "./factory.js";
import renderToDom from "./dom.js";

const newTripContainer = document.querySelector("#newTrip__div");
const travelListContainer = document.querySelector("#travelList");

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

  deletePointOfInterest: travelListContainer.addEventListener(
    "click",
    event => {
      if (event.target.id.includes("delete")) {
        console.log("delete point of interest");
        const id = event.target.id.split("--")[1];
        console.log(id);
        getData.deletePointOfIntersts(id)
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

export default eventListeners;
