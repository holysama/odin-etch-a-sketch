let btnContainer = document.querySelector("#btn-container");
let container = document.querySelector("#container");

for (let i = 1; i < 257; i++) {
    let gridSquares = document.createElement("div");
    gridSquares.setAttribute("class", "square"); //<div class="square"> </div>
    container.appendChild(gridSquares);
}

createGrid(16);

let square = document.querySelectorAll(".square");
square.forEach((sqr) => {
    sqr.addEventListener("mouseenter", () => {
        sqr.classList.add("colorGrey");
    });
});

let btnReset = document.createElement("button");
btnReset.textContent = "Reset"
btnContainer.appendChild(btnReset);

let btnGrid = document.createElement("button");
btnGrid.textContent = "Change grid size";
btnContainer.appendChild(btnGrid);

btnReset.addEventListener("click", () => {
    let square = document.querySelectorAll(".square");
    square.forEach((sqr) => {
        sqr.classList.remove("colorGrey")
    });
});

btnGrid.addEventListener("click", gridPrompt)

function createGrid(size) {
    let gridSquares = container.querySelectorAll(".square");
    gridSquares.forEach(square => square.remove());
    
    let squareSize = 100 / size;

    for (let i = 1; i <= size * size; i++) {
        let gridSquares = document.createElement("div");
        gridSquares.setAttribute("class", "square");
        gridSquares.style.flexBasis = `${squareSize}%`;
        gridSquares.style.aspectRatio = "1 / 1";
        container.appendChild(gridSquares);
    }

    let square = document.querySelectorAll(".square");
    square.forEach((sqr) => {
        sqr.addEventListener("mouseenter", () => {
            sqr.classList.add("colorGrey");
        });
    });
}

function gridPrompt() {
    let gridNum = Number(prompt("What size do you want your Grid to be? (Max 100x100)"));
    
    if (gridNum >= 1 && gridNum <= 100 && !isNaN(gridNum)) {
        createGrid(gridNum);  
    } else if (gridNum === "" || gridNum === null || isNaN(gridNum)) {
        alert("Please enter a valid number between 1 and 100 both included");
        gridPrompt();
    }
}




