// THIS IS ONLY FOR CLICKING A BUTTON *need to make it where it can be drag and drop and then confetti explosion :)
// const confettiButton = document.querySelector('#confettiButton');
// const canvas = document.querySelector('#confetti');

// const jsConfetti = new JSConfetti();

// confettiButton.addEventListener("click", () => {
//     jsConfetti.addConfetti()
// })

// THIS WORKS FOR DRAG AND DROP AND THEN .... CONFETTI! //
const celebrationTime = document.querySelector('#celebrationTime');
const jsConfetti = new JSConfetti();

celebrationTime.addEventListener('dragover', (event) => {
    event.preventDefault();
});

celebrationTime.addEventListener('drop', () => {
    jsConfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber: 1000,
        
    })
});
