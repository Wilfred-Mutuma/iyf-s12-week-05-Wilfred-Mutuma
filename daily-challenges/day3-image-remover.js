
const imageGallery = document.getElementById("image-gallery");

imageGallery.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-image")) {
        const imageCard = event.target.closest(".image-card");

        if (imageCard) {
            imageCard.remove();
            console.log("Image removed successfully.");
        }
    }
});

console.log("Day 3 Image Remover is ready!");
