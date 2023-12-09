let btn = document.querySelectorAll("button");
let input = document.querySelector("#number");

let myans = "";

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (btn[i].innerText === "C") {
      myans = "";
      input.value = myans;
    } else if (btn[i].innerText === "Del") {
      myans = myans.slice(0, myans.length - 1);
      input.value = myans;
    } else if (btn[i].innerText === "=") {
      myans = eval(myans);
      input.value = myans;
    } else {
      myans = myans + btn[i].innerText;
      input.value = myans;
      console.log(myans);
    }
  });
}