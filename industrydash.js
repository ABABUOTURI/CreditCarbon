function buyToken(amount) {
    alert(`You have bought ${amount} ECR tokens!`);
}

// Add event listeners to the forms if needed
document.getElementById('sellTokenForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Token listed for sale!');
});

document.getElementById('buyTokenForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Token bought successfully!');
});

document.getElementById('updateCo2Form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('CO2 Emission submitted!');
});


//buy tokens
document.getElementById('buyTokenForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Token bought successfully!');
});
