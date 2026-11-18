const uploadImage = document.getElementById("uploadImage");
const galleryContainer = document.getElementById("galleryContainer");

uploadImage.addEventListener("change", function(event){

    const file = event.target.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            const newDiv = document.createElement("div");
            newDiv.classList.add("gallery-item");

            newDiv.innerHTML = `
                <img src="${e.target.result}" alt="Foto e re">
            `;

            galleryContainer.appendChild(newDiv);
        };

        reader.readAsDataURL(file);
    }
});