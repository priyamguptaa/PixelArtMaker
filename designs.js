
// Select color input
let colorPicked = document.getElementById("colorPicker");
// Select size input
let size = document.getElementById("sizePicker");
let height = document.getElementById("inputHeight");
let weight = document.getElementById("inputWeight");

// When size is submitted by the user, call makeGrid()
document.getElementById("submitClicked").addEventListener("click",function(event){
    event.preventDefault();
    makeGrid();
});

// grid generation
const canvas = document.getElementById("pixel_canvas");

// makeGrid() is called after user inputs height and width
function makeGrid() {
    canvas.innerHTML = "";
    for(let i=0;i<height.value;i++){
        let row= canvas.insertRow(i);
        for(let j=0;j<weight.value;j++){
            let cell = row.insertCell(j);
            cell.addEventListener("click", function(event){
                event.target.style.backgroundColor = colorPicked.value;
            });
        }
    }
}
