document.getElementById('list-token-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const ethAddress = event.target[0].value;
    const tokenCount = event.target[1].value;
    const tokenPrice = event.target[2].value;

    // Simulate listing tokens (you would replace this with actual backend interaction)
    console.log(`Listing ${tokenCount} tokens at ${tokenPrice} Wei from address ${ethAddress}`);
    alert('Token listed successfully!');
});
