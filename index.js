let container = document.querySelector("#container");

for (let i = 1; i < 257; i++) {
    let gridSquares = document.createElement("div");
    gridSquares.setAttribute("class", "square"); //<div class="square"> </div>
    container.appendChild(gridSquares);
}

let square = document.querySelectorAll(".square");

square.forEach((sqr) => {
    sqr.addEventListener("mouseenter", () => {
        sqr.classList.add("colorGrey");
    })
})

let btnContainer = document.querySelector("#btn-container")
let btnReset = document.createElement("button");

btnReset.textContent = "Reset"
btnContainer.appendChild(btnReset);

btnReset.addEventListener("click", () => {
    square.forEach((sqr) => {
        sqr.classList.remove("colorGrey")
    })
})

let btnGrid = document.createElement("button");

btnGrid.textContent = "Change grid size";
btnContainer.appendChild(btnGrid);

function gridPrompt() {
    let gridNum = Number(prompt("What size do you want your Grid to be? (Max 100x100)"));
    
    if (gridNum >= 1 && gridNum <= 100 && !isNaN(gridNum)) {
        createGrid(gridNum);  
    } else if (gridNum === "" || gridNum === null || isNaN(gridNum)) {
        alert("Please enter a valid number between 1 and 100 both included");
        gridPrompt();
    }
}

btnGrid.addEventListener("click", gridPrompt)

function createGrid(size) {
    container.innerHTML = "";

    for (let i = 1; i <= size * size; i++) {
        let gridSquares = document.createElement("div");
        gridSquares.setAttribute("class", "square");
        container.appendChild(gridSquares);
    }

    square = document.querySelectorAll(".square");

    square.forEach((sqr) => {
        sqr.addEventListener("mouseenter", () => {
            sqr.classList.add("colorGrey");
        })
    })

}

