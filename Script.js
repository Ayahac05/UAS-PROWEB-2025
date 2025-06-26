const seatContainer = document.getElementById("seatsContainer");
const selectedSeatsText = document.getElementById("selectedSeats");
const totalPriceText = document.getElementById("totalPrice");

const rows = 8;
const cols = 8;
const seatPrice = 5;
let selectedSeats = [];

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");

    const seatLabel = String.fromCharCode(65 + row) + (col + 1); // A1, A2, ..., H8
    seat.textContent = seatLabel;

    // Simulasikan beberapa kursi sebagai occupied
    if (Math.random() < 0.2) {
      seat.classList.add("occupied");
    }

    seat.addEventListener("click", () => {
      if (!seat.classList.contains("occupied")) {
        seat.classList.toggle("selected");

        const seatIndex = selectedSeats.indexOf(seatLabel);
        if (seat.classList.contains("selected")) {
          selectedSeats.push(seatLabel);
        } else if (seatIndex > -1) {
          selectedSeats.splice(seatIndex, 1);
        }

        updateSummary();
      }
    });

    seatContainer.appendChild(seat);
  }
}

function updateSummary() {
  selectedSeatsText.textContent = selectedSeats.length;
  totalPriceText.textContent = selectedSeats.length * seatPrice;
}

function bookSeats() {
  if (selectedSeats.length > 0) {
    alert(`You booked: ${selectedSeats.join(", ")}\nTotal: $${selectedSeats.length * seatPrice}`);
    // Integrasi backend bisa ditambahkan di sini
  } else {
    alert("Please select at least one seat.");
  }
}
