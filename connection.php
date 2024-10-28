<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cab_booking";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$pickup_time = $_POST['pickup_time'];
$pickup_date = $_POST['pickup_date'];
$start_location = $_POST['start_location'];
$end_location = $_POST['end_location'];

// Insert data into the database
$sql = "INSERT INTO bookings (name, phone, pickup_time, pickup_date, start_location, end_location) 
        VALUES ('$name', '$phone', '$pickup_time', '$pickup_date', '$start_location', '$end_location')";

if ($conn->query($sql) === TRUE) {
    echo "Booking successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
