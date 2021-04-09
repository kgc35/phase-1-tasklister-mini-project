document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskForm = document.querySelector("#create-task-form");
  let taskUl = document.querySelector("#tasks");
  // console.log(taskForm)
  taskForm.addEventListener("submit", function(e) {
    e.preventDefault()
   

    let form = e.target  
    let inputBox = form["new-task-description"]
    let whatUserTyped = inputBox.value
    // console.log(whatUserTyped)

    //DOM Manipulation
    let blankLi = document.createElement("li")

    blankLi.innerText = whatUserTyped;
    blankLi.className = "inputtext";
    blankLi.innerHTML = "<button> Delete</button>"

    taskUl.append(blankLi);



  })
});
