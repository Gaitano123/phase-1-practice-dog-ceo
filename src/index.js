console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {

    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(response => response.json()) 
      .then(data => {
        const dogImages = data.message; 


        const dogImageContainer = document.getElementById("dog-image-container");

        
        dogImages.forEach(imageUrl => {
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl; 


          dogImageContainer.appendChild(imageElement);
        });
      })
      .catch(error => {
        console.log("Error fetching dog images:", error);
      });


    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json()) 
      .then(data => {
        const breeds = data.message; 


        const dogBreedsContainer = document.getElementById("dog-breeds");

        const listItems = [];

        for (const breed in breeds) {
          const listItemElement = document.createElement("li");
          listItemElement.textContent = breed;


          listItems.push(listItemElement);


          dogBreedsContainer.appendChild(listItemElement);
        }

        const breedDropdown = document.getElementById("breed-dropdown");

        breedDropdown.addEventListener("change", function() {
          const selectedLetter = breedDropdown.value; // Get the selected letter from the dropdown

          
          listItems.forEach(listItem => {
            if (listItem.textContent.startsWith(selectedLetter)) {
              listItem.style.display = "list-item"; // Show the list item
            } else {
              listItem.style.display = "none"; 
            }
          });
        });
      })
      .catch(error => {
        console.log("Error fetching dog breeds:", error);
      });
  });
