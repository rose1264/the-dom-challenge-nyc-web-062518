// timer & like button

let plusButton = document.getElementById('+')
let minusButton = document.getElementById('-')
let likeButton = document.getElementById('<3')
let pauseButton = document.getElementById('pause')
let resumeButton = document.createElement("button")
let textnode = document.createTextNode("resume")
let counter = 1
resumeButton.appendChild(textnode)
document.getElementById("buttons").appendChild(resumeButton)
resumeButton.style.display = "none";

function like(){

  let likeUl = document.getElementById("likes")
  let likeLi = document.createElement("li")
  let number = document.getElementById('counter').innerText


  if (counter === 1) {
    let likeTextNode = document.createTextNode(`${number} has been liked ${counter} time`)
    likeLi.appendChild(likeTextNode)
    likeUl.appendChild(likeLi)
  } else {
    let likeTextNode = document.createTextNode(`${number} has been liked ${counter} times`)
    likeLi.appendChild(likeTextNode)
    likeUl.appendChild(likeLi)
  }
  counter++
}

function incrementCounter(){
  return ++document.getElementById('counter').innerText
}

function decrementCounter(){
  return --document.getElementById('counter').innerText
}

function resetCounter(){
  counter = 1
}

let selfIncrementCounter = setInterval(incrementCounter, 1000)
let selfCounter = setInterval(resetCounter, 1000)

function pauseTime() {
  pauseButton.style.display = "none";
  resumeButton.style.display = "inline-block";
  clearInterval(selfIncrementCounter)
  clearInterval(selfCounter)
}

function resumeTime() {
  pauseButton.style.display = "inline-block";
  resumeButton.style.display = "none";
  selfIncrementCounter = setInterval(incrementCounter, 1000)
  selfCounter = setInterval(counter = 1, 1000)
}

plusButton.addEventListener("click", incrementCounter)
minusButton.addEventListener("click", decrementCounter)
pauseButton.addEventListener("click", pauseTime)
resumeButton.addEventListener("click", resumeTime)
likeButton.addEventListener("click", like)

// comment

let submitButton = document.getElementById("submit")
let comments = document.getElementById("list")

submitButton.addEventListener("click", function(e){
  e.preventDefault()
  let commentInput = document.getElementById("comment")
  let inputTextnode = document.createTextNode(commentInput.value)
  let comment = document.createElement("p")
  comment.appendChild(inputTextnode)
  comments.appendChild(comment)
  commentInput.value = ""
})
