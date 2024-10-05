let product = [
    {
        id: 1,
        image: 'Golden Retriever.jpg',
        name: 'Golden Retriever',
        price: 500,
        date: new Date('2024-01-05'),
        category: 'dog'
    },
    {
        id: 2,
        image: 'Persian Cat.jpg',
        name: 'Persian Cat',
        price: 300,
        date: new Date('2024-02-10'),
        category: 'cat'
    },
    {
        id: 3,
        image: 'Bulldog.jpg',
        name: 'Bulldog',
        price: 450,
        date: new Date('2024-03-15'),
        category: 'dog'
    },
    {
        id: 4,
        image: 'Siamese Cat.jpg',
        name: 'Siamese Cat',
        price: 350,
        date: new Date('2024-04-20'),
        category: 'cat'
    },
    {
        id: 5,
        image: 'Beagle.jpg',
        name: 'Beagle',
        price: 400,
        date: new Date('2024-05-25'),
        category: 'dog'
    },
    {
        id: 6,
        image: 'Bengal Cat.jpg',
        name: 'Bengal Cat',
        price: 450,
        date: new Date('2024-06-30'),
        category: 'cat'
    },
    {
        id: 7,
        image: 'Poodle.jpg',
        name: 'Poodle',
        price: 350,
        date: new Date('2024-07-10'),
        category: 'dog'
    },
    {
        id: 8,
        image: 'Maine Coon.jpg',
        name: 'Maine Coon',
        price: 500,
        date: new Date('2024-08-15'),
        category: 'cat'
    },
    {
        id: 9,
        image: 'Shiba Inu.jpg',
        name: 'Shiba Inu',
        price: 550,
        date: new Date('2024-09-05'),
        category: 'dog'
    },
    {
        id: 10,
        image: 'Scottish Fold.jpg',
        name: 'Scottish Fold',
        price: 400,
        date: new Date('2024-09-20'),
        category: 'cat'
    },
    {
        id: 11,
        image: 'Chihuahua.jpg',
        name: 'Chihuahua',
        price: 300,
        date: new Date('2024-10-10'),
        category: 'dog'
    },
    {
        id: 12,
        image: 'Russian Blue.jpg',
        name: 'Russian Blue',
        price: 450,
        date: new Date('2024-11-01'),
        category: 'cat'
    }
];
function showProduct(products) {
    let str = '';
    products.forEach((p) => {
        str += `
            <div class="col-md-3 card text-center justify-content-center custom-card mb-3">
                <a href="#">
                    <div class="card-header fs-5 pt-4 border-0">
                        <img src="../img/product/${p.image}" class="pb-4">
                    </div>
                    <div class="card-body border-0 pt-0 pb-0">
                        <h5>${p.name}</h5>
                        <p>
                            <i class="fa-solid fa-calendar"></i> 
                            ${new Date(p.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}
                        </p>
                    </div>
                    <div class="card-footer border-0 pt-0">
                        <h6 class="fs-6">${Number(p.price).toLocaleString("en")} $</h6>
                        <a class="btn btn-outline-success" href="#buy">Buy</a>
                    </div>
                </a>   
            </div>
        `;
    });
    const productContainer = document.getElementById('product-container');
    if (productContainer) {
        productContainer.innerHTML = str;
    }
}
function filterProductsByCategory(category) {
    return product.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    let filteredProducts = product;
    if (category) {
        filteredProducts = filterProductsByCategory(category);
    }
    showProduct(filteredProducts);
});
