document.getElementById("submitButton").addEventListener("click", function () {
    const suggestionBox = document.getElementById("suggestionBox");
    const suggestionText = suggestionBox.value.trim();

    if (suggestionText) {
        saveSuggestion(suggestionText);
        suggestionBox.value = ""; // Clear the text box
        alert("Suggestion submitted!");
    } else {
        alert("Please enter a suggestion before submitting.");
    }
});

// Save suggestions to a Word document
function saveSuggestion(suggestion) {
    const blob = new Blob([suggestion + "\n"], { type: "text/plain;charset=utf-8" });

    // Using the FileSaver.js library to enable downloads
    const fileName = "suggestions.txt";
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href); // Cleanup
}
