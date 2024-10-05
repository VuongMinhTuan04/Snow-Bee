let carousel = [
    {
        id: "carousel-1",
        img: "Banner 1.webp"
    },
    {
        id: "carousel-2",
        img: "Banner 2.webp"
    },
    {
        id: "carousel-3",
        img: "Banner 3.webp"
    },
];
function showBanner() {
    let str = `
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
    `;
    carousel.forEach((c, index) => str += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="../img/banner/${c.img}" class="d-block w-100" alt="${c.id}">
                </div>
        `);
    str += `
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `;
    return str;
}
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector("#carousel-container");
    if (carouselContainer) {
        carouselContainer.innerHTML = showBanner();
    }
});
