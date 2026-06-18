const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        cards.forEach(c => {
            c.classList.remove("selected");
        });

        card.classList.add("selected");

    });
});

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();

        alert("Success");
    });
});