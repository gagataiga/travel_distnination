(function () {
  "use strict";
  const detailsForm = document.querySelector("#detination_details");

detailsForm.addEventListener("submit",handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  // values
  const destName = event.target.elements["name"].value;
  const destLocation = event.target.elements["location"].value;
  const destPhoto = event.target.elements["photo"].value;
  const destDescription = event.target.elements["description"].value;

  // 
  for (var i = 0; i < detailsForm.length; i++) {
    detailsForm.elements[i].value = "";
  }
    const destCard = createDestinationCard(destName, destLocation, destPhoto, destDescription);
  
    const wishListContainer = document.getElementById("destination_container");

    if (wishListContainer.children.length === 0){
      document.getElementById("title").innerHTML = "My Wish List";
    }
    
    document.querySelector("#destination_container").appendChild(destCard);
}

function createDestinationCard(name, location, photoURL, desctiption) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.setAttribute("alt", name);

  const constanPhotoUrl = "images/signpost.jpg";

  if (photoURL.length === 0) {
    img.setAttribute("src", constanPhotoUrl);
  } else {
    img.setAttribute("src", photoURL);
  }

  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h3");
  cardTitle.innerHTML = name;
  cardBody.appendChild(cardTitle);

  const cardSub= document.createElement("h4");
  cardSub.innerHTML = location;
  cardBody.appendChild(cardSub);

  if (desctiption.length !== 0) {
    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = desctiption;
    cardBody.appendChild(cardText);
  }
  
    const carDeleteBtn = document.createElement("button");
    carDeleteBtn.innerHTML = "Remove";
    carDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(carDeleteBtn);
    card.appendChild(cardBody);
    console.log(card);
  
    return card;
}

function removeDestination(evt){
  const card = evt.target.parentElement.parentElement;
  card.remove();
}
})
  ();

