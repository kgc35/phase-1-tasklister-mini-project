document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskForm = document.querySelector("#create-task-form");
  let taskUl = document.querySelector("ul#tasks");

  // console.log(taskForm)
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault()

    let form = e.target
    let inputBox = form["new-task-description"]
    let whatUserTyped = inputBox.value


    //DOM Manipulation
    let blankLi = document.createElement("li")
    let spanInsideLi = document.createElement("span")


    spanInsideLi.innerText = whatUserTyped;



    taskUl.append(blankLi);
    blankLi.append(spanInsideLi)

    let delButton = document.createElement("button");
    delButton.innerText = "delete";
    // delButton.append(document.createTextNode("delete"));
    blankLi.append(delButton);


    delButton.addEventListener("click", function () {
      delButton.parentNode.remove();
    })

    e.target.reset();
  })
});
