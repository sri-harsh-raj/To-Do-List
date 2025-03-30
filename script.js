function task() {
  let newelement = document.createElement("li");
  let newtask = document.getElementById("newtask");
  newtask.appendChild(newelement);
  newelement.textContent = document.getElementById("inputid").value;
  document.getElementById("inputid").value = "";
  deletetask(newelement);
}

function deletetask(newelement) {
  const deletebutton = document.createElement("button");
  deletebutton.textContent = "Delete";
  deletebutton.classList.add("submitbutton");
  newelement.appendChild(deletebutton);
  deletebutton.onclick = function () {
    newelement.remove();
  };
}
