const getData = {
  fetchPlaces() {
    return fetch("http://localhost:8088/places").then(response =>
      response.json()
    );
  },

  fetchPointsOfInterests() {
    return fetch("http://localhost:8088/interests").then(response =>
      response.json()
    );
  },

  editPointsOfInterests: (pointOfInterestObj, id) => {
    return fetch(`http://localhost:8088/interests/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pointOfInterestObj)
    }).then(pointOfInterest => pointOfInterest.json());
  },

  deletePointOfIntersts: id => {
    return fetch(`http://localhost:8088/interests/${id}`, {
      method: "DELETE"
    }).then(entries => entries.json());
  }
};

export default getData;
