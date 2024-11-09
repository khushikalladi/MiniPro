let menubar =document.querySelector('menubar')
let mynav = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
} 

// Show the vehicle selection popup
function showVehiclePopup() {
    document.getElementById("vehiclePopup").style.display = "flex";
}

// Handle vehicle selection and show driver details
function selectVehicle(vehicle) {
    closePopup('vehiclePopup'); // Close the vehicle popup
    showDriverPopup(vehicle);    // Show the driver details popup
}

// Show driver details popup with random driver info
function showDriverPopup(vehicle) {
    const drivers = [
        { name: "John Doe", rating: 4.5, vehicle: vehicle },
        { name: "Alice Smith", rating: 4.7, vehicle: vehicle },
        { name: "Bob Johnson", rating: 4.2, vehicle: vehicle }
    ];
    const randomDriver = drivers[Math.floor(Math.random() * drivers.length)];
    document.getElementById("driverInfo").innerHTML =
        `Driver: ${randomDriver.name}<br>Rating: ${randomDriver.rating}<br>Vehicle: ${randomDriver.vehicle}`;
    document.getElementById("driverPopup").style.display = "flex";
}

// Close popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Trigger vehicle selection popup after pickup/drop submission
document.getElementById("submitPickupDrop").onclick = function() {
    showVehiclePopup();
};
