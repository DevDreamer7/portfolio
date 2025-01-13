const text = "Hello! I'm a programmer.";
const h1 = document.querySelector("h1");
let index = 0;

function typeLetter() {
    if (index < text.length) {
        h1.textContent += text.charAt(index);
        index++;
        setTimeout(typeLetter, 100); // Adjust the delay (200ms) as needed
    } else {
        // Wait for 1 second before starting to delete
        setTimeout(deleteLetter, 800);
    }
}

function deleteLetter() {
    if (index > 0) {
        h1.textContent = h1.textContent.slice(0, -1);
        index--;
        setTimeout(deleteLetter, 100); // Adjust the delay (100ms) as needed
    } else {
        // Wait for 1 second before starting to type again
        setTimeout(() => {
            index = 0; // Reset index
            typeLetter(); // Start typing again
        }, 600);
    }
}

// Start the typing effect
typeLetter();