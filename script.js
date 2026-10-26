alert("JavaScript Connected!");
const form = document.getElementById("bookingForm");


form.addEventListener("submit", function (event) {
    event.preventDefault();


    const name = document.getElementById("customerName").value;


    const requestId = "FIX-" + (Math.floor(Math.random() * 900000) + 100000); const service = document.getElementById("service").value;
    const problem = document.getElementById("problem").value;

    const booking = {
        id: requestId,
        name: name,
        service: service,
        problem: problem,
        status: "Pending"
    };

    localStorage.setItem(requestId, JSON.stringify(booking));


    document.getElementById("bookingMessage").textContent = "Thank You " + name + "! Your Repair ID is" + requestId + " . Your demo repair request has been submitted.";
});

const trackBtn = document.getElementById("trackBtn");

trackBtn.addEventListener("click", function () {

    const id = document.getElementById("trackId").value.trim();

    const savedBooking = localStorage.getItem(id);
    console.log("Saved data:", savedBooking);

    if (savedBooking) {
        const booking = JSON.parse(savedBooking);

        document.getElementById("trackResult").textContent = "Repair Status:" + booking.status;


    } else {


        document.getElementById("trackResult").textContent = "Invalid Request ID";

    }


});



