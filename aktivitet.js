const button = document.getElementById("addActivity");

button.addEventListener("click", () => {

    const imageInput = document.getElementById("imageUpload");
    const textInput = document.getElementById("activityText");

    const file = imageInput.files[0];
    const text = textInput.value;

    if (!file) {
        alert("Zgjidhni një foto!");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {

        const card = document.createElement("div");

        card.classList.add("activity-card");

        card.innerHTML = `
            <img src="${e.target.result}" alt="Aktivitet">

            <div class="activity-content">
                <p>${text}</p>

                <button class="delete-btn">
                    🗑️ Fshi
                </button>
            </div>
        `;

        document
            .getElementById("activitiesContainer")
            .prepend(card);

        const deleteBtn =
            card.querySelector(".delete-btn");

        deleteBtn.addEventListener("click", () => {

            if(confirm("A dëshironi ta fshini këtë aktivitet?")){
                card.remove();
            }

        });

        imageInput.value = "";
        textInput.value = "";
    };

    reader.readAsDataURL(file);
});