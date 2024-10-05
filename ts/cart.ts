type TCart = {
    id: number,
    image: string,
    name: string,
    price: number,
    date: Date,
    quantity: number
};

const currentDate = new Date();

let cart: TCart[] = [
    {
        id: 1,
        image: 'Golden Retriever.jpg',
        name: 'Golden Retriever',
        price: 500,
        date: currentDate,
        quantity: 1
    },
    {
        id: 2,
        image: 'Golden Retriever.jpg',
        name: 'Golden Retriever',
        price: 500,
        date: currentDate,
        quantity: 1
    }
];

function showCart() {
    let str = '';

    cart.forEach(item => {
        str += `
            <div>
                <p>Hello World!</p>
            </div>
        `
    });

    return str;
}

document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector<HTMLDivElement>("#cart-container");
    
    if(cartContainer) {
        cartContainer.innerHTML = showCart();
    }
});