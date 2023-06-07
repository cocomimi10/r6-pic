document.getElementById("randomizeButton").addEventListener("click", function() {
  var items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]; // Add your own items here
  var randomIndex = Math.floor(Math.random() * items.length);
  document.getElementById("result").textContent = items[randomIndex];
});

