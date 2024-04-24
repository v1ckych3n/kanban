// MVP FEATURE JAVASCRIPT //


// FUNCTION ONE: Drag and Drop function that allows user to drag a to-do item from one column to the next //
const todos = document.querySelectorAll(".todos");
const status = document.querySelectorAll(".status");
let dragTodo = null;

todos.forEach((todos) => {
    todos.addEventListener("dragstart", dragStart);
    todos.addEventListener("dragend", dragEnd);
});

function dragStart() {
    dragTodo = this;
    setTimeout(() => {
        this.style.display = "none";
    }, 0);
    console.log("dragStart");
}

function dragEnd() {
    dragTodo = null;
    setTimeout(() => {
        this.style.display = "";
    }, 0);
    console.log("dragEnd");
}

status.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
})

function dragOver(e) {
    e.preventDefault();
    console.log("dragOver");
}

function dragEnter() {
    this.style.backgroundColor = "var(--light-grey)";
    
    console.log("dragEnter");
}

function dragLeave() {
    this.style.backgroundColor = "transparent";

    console.log("dragLeave");
}

function dragDrop() {
    this.appendChild(dragTodo);
    this.style.backgroundColor = "transparent";

    console.log("dragDrop");
}





// FUNCTION TWO (MOST IMPORTANT): Add to-do items popup window appears when clicked on the "+ Add To Do" button//
// KILLED OFF THE POPUP FUNCTION //

// const popup = document.querySelectorAll("[data-target-popup]");
// const close_popup = document.querySelectorAll(".close_popup");
// const overlay = document.getElementById("overlay");

// popup.forEach((popup) => {
//     popup.addEventListener("click", () => {
//         document.querySelector(popup.dataset.targetPopup).classList.add("active");
//         overlay.classList.remove("active");
//     });
// });

// close_popup.forEach((popup) => {
//     popup.addEventListener("click", () => {
//         const popup = popup.closest(".popup");
//         popup.classList.remove("active");
//         overlay.classList.remove("active");
//     })
// });

// popup.onclick = (event) => {
//     if (event.target == overlay) {
//         const popup = document.querySelectorAll(".popup");
//         popup.forEach((popup) => popup.classList.remove("active"));
//         overlay.classList.remove("active");
//     }
// 



// Creating new todo content //
const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click", createToDo);


function createToDo() {
    const todoContainer = document.getElementById("no_status");
    const inputVal = document.getElementById("to-do_input").value;

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todos");
    todoDiv.setAttribute("draggable", "true");


    // Utilizing the important feature that allows user to list that item as main priority //
    const importantToggle = document.createElement("p");
    importantToggle.classList.add("important-toggle");
    importantToggle.textContent = "!";
    importantToggle.addEventListener("click", function() {
        const parentStatus = this.closest(".status");
        parentStatus.querySelector(".to-do-items").prepend(todoDiv);
        todoDiv.style.backgroundColor = "#FFD24B";
    });
    todoDiv.appendChild(importantToggle);


    // Recreate the .todos content with the up and down arrows //
    const toggleButtonDiv = document.createElement("div");
    toggleButtonDiv.classList.add("toggle-button", "todos-mobile");

    const upArrowButton = document.createElement("button");
    upArrowButton.classList.add("up-arrow");
    upArrowButton.innerHTML = "&#8963;";

    const downArrowButton = document.createElement("button");
    downArrowButton.classList.add("down-arrow");
    downArrowButton.innerHTML = "&#8963;";
    
    toggleButtonDiv.appendChild(upArrowButton);
    toggleButtonDiv.appendChild(downArrowButton);
    todoDiv.appendChild(toggleButtonDiv);
    

    
    // Creating the content here when input value //
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("todos_content");

    const textP = document.createElement("p");
    textP.textContent = inputVal;

    const closeSpan = document.createElement("span");
    closeSpan.classList.add("close-toggle");
    closeSpan.textContent = "\u00D7";
    contentDiv.appendChild(textP);
    contentDiv.appendChild(closeSpan);
    todoDiv.appendChild(contentDiv);
    todoContainer.appendChild(todoDiv);


    document.getElementById("to-do_input").value = "";

    todoDiv.addEventListener("dragstart", dragStart);
    todoDiv.addEventListener("dragend", dragEnd);

    closeSpan.addEventListener("click", function() {
        todoDiv.style.display = "none";
    });
    


    // Toggle up and down button feature for MOBILE ONLY //
    upArrowButton.addEventListener("click", function() {
        moveTodoDiv(this.parentElement.parentElement, 'up');
    });

    downArrowButton.addEventListener("click", function() {
        moveTodoDiv(this.parentElement.parentElement, 'down');
    });


    upArrowButton.addEventListener("click", function() {
        let currentDiv = this.parentElement.parentElement;

        if (currentDiv.previousElementSibling) {
            currentDiv.parentNode.insertBefore(currentDiv, currentDiv.previousElementSibling);
        }
    });

    downArrowButton.addEventListener("click", function() {
        let currentDiv = this.parentElement.parentElement;
        if (currentDiv.nextElementSibling) {
            currentDiv.parentNode.insertAfter(currentDiv.nextElementSibling, currentDiv);
        }
    });

    function moveTodoDiv(todoDiv, direction) {
        const statusDivs = Array.from(document.querySelectorAll('.to-do-items'));
        const currentStatusIndex = statusDivs.indexOf(todoDiv.parentElement);
    
        if (direction === 'up' && currentStatusIndex > 0) {
            statusDivs[currentStatusIndex - 1].appendChild(todoDiv);
        }
    
        else if (direction === 'down' && currentStatusIndex < statusDivs.length - 1) {
            statusDivs[currentStatusIndex + 1].insertBefore(todoDiv, statusDivs[currentStatusIndex + 1].firstChild);
        }
    }
}





// FUNCTION THREE:Removing the "+ Add To-Do" popup window //
// KILLED THIS FUNCTION OFF //
// const remove_pop_up = document.getElementById("close-pop-up");

// remove_pop_up.addEventListener("click", closePop);

// function closePop() {
//     remove_pop_up.parentElement.parentElement.classList.remove('active');
// }


const deleteToDo = document.querySelectorAll(".close_post-it");

deleteToDo.forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.style.display = "none";
    });
});





// CREDITS //
// shoutout to Rodrigo for helping me figure out that there needs to be two .parentElement //
// credits: https://www.youtube.com/watch?v=m3StLl-H4CY (for creating the draggable todos item and drag eventListener) //