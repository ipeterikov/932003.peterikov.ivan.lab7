var functionArray = [squareButtonClick, triangleButtonClick, circleButtonClick]

var inputField = document.querySelector("input")
var buttons = document.querySelectorAll("button")
var canvas = document.querySelector(".canvas")

var triangleColor = "blue"
var circleColor = "green"
var squareColor = "red"
var selectionColor = "yellow"



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let num = inputField.value
        parseInt(num)
        if (num != NaN) {
            functionArray[buttons[i].value](num)
        }
    })
}

function squareButtonClick(num) {
    for (let i = 0; i < num; i++) {
        let size = getRandomInt(50, 500)
        let left = getRandomInt(0, canvas.offsetWidth - size)
        let top = getRandomInt(0, canvas.offsetHeight - size - 10)

        let square = document.createElement("div")
        square.classList.add("square")
        square.style.width = `${size}px`
        square.style.height = `${size}px`
        square.style.left = `${left}px`
        square.style.top = `${top}px`
        square.style.backgroundColor = squareColor
        square.addEventListener("dblclick", function () {
            canvas.removeChild(square);
        })
        square.addEventListener("mouseenter", function () {
            square.style.backgroundColor = selectionColor
        })
        square.addEventListener("mouseleave", function () {
            square.style.backgroundColor = squareColor
        })
        canvas.append(square);
    }
}

function circleButtonClick(num) {

    for (let i = 0; i < num; i++) {

        let diagonal = getRandomInt(50, 500)
        let left = getRandomInt(0, canvas.offsetWidth - diagonal)
        let top = getRandomInt(0, canvas.offsetHeight - diagonal - 10)
        let circle = document.createElement("div")
        circle.classList.add("circle")
        circle.style.width = `${diagonal}px`
        circle.style.height = `${diagonal}px`
        circle.style.left = `${left}px`
        circle.style.top = `${top}px`
        circle.style.backgroundColor = circleColor
        circle.addEventListener("dblclick", function () {
            canvas.removeChild(circle);
        })
        circle.addEventListener("mouseenter", function () {
            circle.style.backgroundColor = selectionColor
        })
        circle.addEventListener("mouseleave", function () {
            circle.style.backgroundColor = circleColor
        })

        canvas.append(circle);
    }

}
function triangleButtonClick(num) {
    for (let i = 0; i < num; i++) {
        let leftBorder = getRandomInt(50, 250)
        let rightBorder = getRandomInt(50, 250)
        let bottomBorder = getRandomInt(20, 250)
        let triangle = document.createElement("div")
        triangle.classList.add("triangle")
        triangle.style.borderLeft = `${leftBorder}px solid transparent`
        triangle.style.borderRight = `${rightBorder}px solid transparent`
        triangle.style.borderBottom = `${bottomBorder}px solid ${triangleColor}`
        triangle.style.left = `${getRandomInt(leftBorder, canvas.offsetWidth - rightBorder - leftBorder)}px`
        triangle.style.top = `${getRandomInt(0, canvas.offsetHeight - bottomBorder - 10)}px`
        triangle.addEventListener("dblclick", function () {
            canvas.removeChild(triangle);
        })
        triangle.addEventListener("mouseenter", function () {
            triangle.style.borderBottomColor = selectionColor
        })
        triangle.addEventListener("mouseleave", function () {
            triangle.style.borderBottomColor = triangleColor
        })

        canvas.append(triangle);

    }

}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}