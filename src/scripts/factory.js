const createTravelerDisplay = {
  createTravelList: place => {
    return `
        <div id="destination--${place.id}">
            <h3 id="destinationName--${place.id}">${place.name}</h3>
            <div id="visaContainer--${place.id}"></div>
            <div id="addNewPointOfInterest--${place.id}">
              <button id="newPointOfInterest__button">Add New Interest Point</button>
            </div>
            <div id="interestContainer--${place.id}"></div>
        </div>
        `;
  },

  createVisaRequired: () => {
    return "<p>Visa Required</p>";
  },

  createDestinationObj: (name, boolean) => {
    return `{
      name: name,
      visa_required: boolean
    }`;
  },

  createPointOfInterestObj: (placeId, name, description, cost, review) => {
    return `{
    placeId: ${placeId},
    name: ${name},
    description: ${description},
    cost: ${cost},
    review: ${review}
    }`;
  },

  createInterestSection: interest => {
    return `
    <div id="pointOfInterest__div--${interest.id}">
      <h4 id="pointOfInterestName">${interest.name}</h4>
      <p id="pointOfInterestDescription">${interest.description}</p>
      <div id="pointofInterestCost--${interest.id}">
        <p id="pointOfInterestCost">$ ${interest.cost}</p>
        <button id="editCostButton--${interest.id}">Edit Cost</button>
      </div>
      <div id="reviewPointOfInterst__div--${interest.id}">
        <button id="addReviewButton--${interest.id}">Add Review</button>
      </div>
      <div id="deletePointOfInterest__div--${interest.id}">
        <button id="deletePointOfInterestButton--${interest.id}">Delete</button>
      </div>
    </div>
    `;
  },

  createNewTripForm: () => {
    return `
    <div id="newTask__form">
      <fieldset>
        <label>New Trip</label>
        <input type="text" id="newTrip__input" >
      </fieldset>
      <fieldset>
        <label>Visa Required</label>
        <select name="visaRequired">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </fieldset>
      <button id="submitNewTrip__button">Submit</button>
    </div>`;
  }
};

export default createTravelerDisplay;
