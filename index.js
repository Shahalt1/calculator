let result = "";
display(result);
function number(num) {
  result += num;
  display();
}

function display() {
  para = document.querySelector("p");
  para.innerHTML = result;
}
