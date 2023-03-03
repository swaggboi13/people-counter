let increments = document.getElementById("increments")
    let count = 0

function counter(){
    count = count + 1
    increments.textContent = count
}


let counted = document.getElementById("save-btn")

function save(){
    counted.textContent += count + " "
    increments.textContent = 0
    count = 0
}