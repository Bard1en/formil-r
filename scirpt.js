document.addEventListener("DOMContentLoaded", function () {
    var tackElement = document.getElementById("tackElement");

    // Lägg till en timeout för att ta bort CSS-klassen efter 3 sekunder (kan justeras)
    setTimeout(function () {
        tackElement.classList.remove("animate");
    }, 3000);
});
