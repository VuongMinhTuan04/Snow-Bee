/*Main 1*/
type TMain1 = {
    id: string,
    title: string,
    image: string,
    valid_start: Date,
    valid_end: Date
};

let main1: TMain1[] = [
    {
        id: "1",
        title: "Koha | Save On Cases of any Koha Product",
        image: "koha.webp",
        valid_start: new Date("01/01/2024"),
        valid_end: new Date("12/31/2024")
    },
    {
        id: "2",
        title: "A Pup Above | $10.00 OFF 7lb Porky's Luau",
        image: "pup above.webp",
        valid_start: new Date("10/01/2024"),
        valid_end: new Date("10/31/2024")
    },
    {
        id: "3",
        title: "FirstMate | Save On Limited Ingredient Dog Formulas",
        image: "firstmate.webp",
        valid_start: new Date("10/01/2024"),
        valid_end: new Date("10/31/2024")
    },
    {
        id: "4",
        title: "RawTernative | $10.00 OFF 5lb Bags",
        image: "rawternative.webp",
        valid_start: new Date("10/01/2024"),
        valid_end: new Date("10/31/2024")
    },
];

function showMain1() {
    let str = '';

    main1.forEach(m => {
        str += `
            <div class="col-md-3 card text-center justify-content-center custom-card">
                <div class="card-header fs-5 pt-4 border-0">
                    <p>${m.title}</p>
                </div>

                <div class="card-body border-0 pt-0 pb-0">
                    <img src="../img/main/${m.image}" class="pb-4">
                    <p>
                        <i class="fa-solid fa-calendar"></i> 
                        ${new Date(m.valid_start).toLocaleDateString("en", { month: "long" })} 
                        ${new Date(m.valid_start).getDate()}, 
                        ${new Date(m.valid_start).getFullYear()} - 
                        ${new Date(m.valid_end).toLocaleDateString("en", { month: "long" })} 
                        ${new Date(m.valid_end).getDate()}, 
                        ${new Date(m.valid_end).getFullYear()}
                    </p>
                </div>

                <div class="card-footer border-0 pt-0">
                    <button class="btn btn-outline-info">View</button>
                </div>
            </div>
        `;
    });


    return str;
}

document.addEventListener('DOMContentLoaded', () => {
    const main1Container = document.querySelector<HTMLDivElement>("#main1-container");

    if(main1Container) {
        main1Container.innerHTML = showMain1();
    }
});

/*Main 2*/
 