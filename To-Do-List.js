let cnt = 0;
var input1 = document.getElementById("input");
input1.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("buttonadd").click();
  }
});

function resetToDo() {
  let items = document.getElementById("list");
  items.innerHTML = "";
}

function addToDo() {
  let li = document.createElement("li");
  let a = cnt;
  li.setAttribute("id", a);
  let input = document.getElementById("input").value;
  let text = document.createTextNode(input);
  li.appendChild(text);
  li.style =
    "border-bottom: 1px solid black; padding-bottom:5px; padding-top:5px;word-wrap: break-word; font-size:20px";
  if (input === "" || input.trim() == "") {
    alert("Invalid Input");
  } else {
    document.getElementById("list").appendChild(li);
  }
  let span = document.createElement("span");
  span.setAttribute("id", "span");
  let button = document.createElement("button");
  button.innerHTML = "🚫";
  span.appendChild(button);
  button.style = "height: 22px; font-size: 10px";
  button.addEventListener("click", function () {
    remove(a);
  });
  span.style = "padding:10px;";
  li.appendChild(span);
  document.getElementById("input").value = "";
  cnt++;
}
function remove(a) {
  let del = document.getElementById(`${a}`);
  del.remove();
}

//showToDo();
