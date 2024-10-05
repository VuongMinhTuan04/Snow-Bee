type TSp = {
    id: string,
    price: number
};

let sp: TSp[] = [
    { id: 'A', price: 10 },
    { id: 'B', price: 20 },
    { id: 'C', price: 30 },
    { id: 'D', price: 40 },
    { id: 'E', price: 50 }
];

function showSP() {
    let str = '';

    sp.forEach(product => 
        str += `
            <div>
                <p>ID: ${product.id}</p>
                <p>Price: ${Number(product.price).toLocaleString("vi")}</p>
            </div>
        `
    );

    return str;
}