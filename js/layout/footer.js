function showFooter() {
    let str = '';
    str += `
        <div class="container">
            <div class="row">
                <div class="col-3 text-light" style="padding: 20px;">
                    <p class="fw-bold fs-5">All American Pet</p>
                    <p>1833 Pioneer Pkwy E, Springfield, OR 97477</p>
                    <p>(+84)359-567-792</p>
                    <p>vuongtuan1357@gmail.com</p>
                    <p>In-Store Pickup, Curbside Pickup, Local Delivery, Same Day Delivery Available</p>
                    <div style="position: relative; width: 100%; height: 400px;">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.450226576576666!2d-123.02303638415493!3d44.04622667910368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5494e33e1e0c74a1%3A0xaeb565dcff0f2e66!2s1833%20Pioneer%20Pkwy%20E%2C%20Springfield%2C%20OR%2097477%2C%20USA!5e0!3m2!1sen!2s!4v1697064711017!5m2!1sen!2s"
                            width="100%" height="60%" style="border:0;" allowfullscreen="" loading="lazy">
                        </iframe>
                    </div>
                </div>

                <div class="col-3 text-light text-start" style="padding: 20px;">
                    <p class="fw-bold fs-5">Business Hours</p>

                    <div class="d-flex justify-content-between" style="width: 80%;">
                        <span>Mon</span>
                        <span>9:00 am - 6:00 pm</span>
                    </div>

                    <hr>

                    <div class="d-flex justify-content-between" style="width: 80%;">
                        <span>Tue</span>
                        <span>9:00 am - 6:00 pm</span>
                    </div>

                    <hr>

                    <div class="d-flex justify-content-between" style="width: 80%;">
                        <span>Wed</span>
                        <span>9:00 am - 6:00 pm</span>
                    </div>

                    <hr>

                    <div class="d-flex justify-content-between" style="width: 80%;">
                        <span>Thu</span>
                        <span>9:00 am - 6:00 pm</span>
                    </div>

                    <hr>

                    <div class="d-flex justify-content-between" style="width: 80%;">
                        <span>Fri</span>
                        <span>9:00 am - 6:00 pm</span>
                    </div>

                    <hr>

                    <div class="d-flex justify-content-between" style="width: 80%;">
                        <span>Sat</span>
                        <span>9:00 am - 5:00 pm</span>
                    </div>

                    <hr>

                    <div class="d-flex justify-content-between" style="width: 80%;">
                        <span>Sun</span>
                        <span>Closed</span>
                    </div>
                </div>

                <div class="col-3" style="padding: 20px;">
                    <p class="fw-bold fs-5 text-light">Sitemap</p>
                    <div class="d-flex flex-column">
                        <a href="#" class="text-decoration-none mb-2">Home Page</a>
                        <a href="#" class="text-decoration-none mb-2">Product</a>
                        <a href="#" class="text-decoration-none mb-2">Service</a>
                        <a href="#" class="text-decoration-none mb-2">About</a>
                        <a href="#" class="text-decoration-none mb-2">Contact Shop</a>
                    </div>
                </div>


                <div class="col-3 text-light" style="padding: 20px;">
                    <p class="fw-bold fs-5">Subscribe</p>
                    <p>Get exclusive email offers, promotions, and updates from our business.</p>

                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                        <input type="text" class="form-control custom-input" placeholder="Name">
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                        <input type="email" class="form-control custom-input" placeholder="Email Address">
                    </div>

                    <div class="text-center">
                        <button class="btn btn-danger">SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    return str;
}
;
document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.querySelector("#footer-container");
    if (footerContainer) {
        footerContainer.innerHTML = showFooter();
    }
});
