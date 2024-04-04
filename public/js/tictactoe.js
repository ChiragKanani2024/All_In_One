let tds = document.querySelectorAll("td");
let user1 = 0;
let user2 = 1;
user1wincount = 0;
user2wincount = 0;
let draw = 1;
let user1win = document.querySelector("#user1win");
let user2win = document.querySelector("#user2win");
tds.forEach((e) => {
  e.addEventListener("click", userpick);
});

function removeimg() {
  tds.forEach((e) => {
    e.addEventListener("click", userpick);
    e.firstElementChild.setAttribute("src", "");
  });
  user1 = 0;
  user2 = 1;
  draw = 1;
}
function userpick(e) {
  // console.log(e.target)
  if (user1 == 0 && user2 == 1) {
    draw++;
    this.firstElementChild.setAttribute("src", "/img/round.png");
    this.removeEventListener("click", userpick);
    user1 = 1;
    user2 = 0;

    let td1 = document
      .querySelector("#td1")
      .firstElementChild.getAttribute("src");
    let td2 = document
      .querySelector("#td2")
      .firstElementChild.getAttribute("src");
    let td3 = document
      .querySelector("#td3")
      .firstElementChild.getAttribute("src");
    let td4 = document
      .querySelector("#td4")
      .firstElementChild.getAttribute("src");
    let td5 = document
      .querySelector("#td5")
      .firstElementChild.getAttribute("src");
    let td6 = document
      .querySelector("#td6")
      .firstElementChild.getAttribute("src");
    let td7 = document
      .querySelector("#td7")
      .firstElementChild.getAttribute("src");
    let td8 = document
      .querySelector("#td8")
      .firstElementChild.getAttribute("src");
    let td9 = document
      .querySelector("#td9")
      .firstElementChild.getAttribute("src");

    if (
      (td1 == "/img/round.png" &&
        td2 == "/img/round.png" &&
        td3 == "/img/round.png") ||
      (td1 == "/img/round.png" &&
        td5 == "/img/round.png" &&
        td9 == "/img/round.png") ||
      (td1 == "/img/round.png" &&
        td4 == "/img/round.png" &&
        td7 == "/img/round.png") ||
      (td2 == "/img/round.png" &&
        td5 == "/img/round.png" &&
        td8 == "/img/round.png") ||
      (td4 == "/img/round.png" &&
        td5 == "/img/round.png" &&
        td6 == "/img/round.png") ||
      (td7 == "/img/round.png" &&
        td8 == "/img/round.png" &&
        td9 == "/img/round.png") ||
      (td3 == "/img/round.png" &&
        td6 == "/img/round.png" &&
        td9 == "/img/round.png") ||
      (td3 == "/img/round.png" &&
        td5 == "/img/round.png" &&
        td7 == "/img/round.png")
    ) {
      alert("User 1 Won");
      user1wincount++;
      user1win.innerText = user1wincount;
      removeimg();
    }

    if (draw == 10) {
      alert("Game Draw");
      removeimg();
    }
  } else {
    draw++;
    this.firstElementChild.setAttribute("src", "/img/cross.png");
    this.removeEventListener("click", userpick);
    user1 = 0;
    user2 = 1;
    // Code Enhancement
    let td1 = document
      .querySelector("#td1")
      .firstElementChild.getAttribute("src");
    let td2 = document
      .querySelector("#td2")
      .firstElementChild.getAttribute("src");
    let td3 = document
      .querySelector("#td3")
      .firstElementChild.getAttribute("src");
    let td4 = document
      .querySelector("#td4")
      .firstElementChild.getAttribute("src");
    let td5 = document
      .querySelector("#td5")
      .firstElementChild.getAttribute("src");
    let td6 = document
      .querySelector("#td6")
      .firstElementChild.getAttribute("src");
    let td7 = document
      .querySelector("#td7")
      .firstElementChild.getAttribute("src");
    let td8 = document
      .querySelector("#td8")
      .firstElementChild.getAttribute("src");
    let td9 = document
      .querySelector("#td9")
      .firstElementChild.getAttribute("src");

    if (
      (td1 == "/img/cross.png" &&
        td2 == "/img/cross.png" &&
        td3 == "/img/cross.png") ||
      (td1 == "/img/cross.png" &&
        td5 == "/img/cross.png" &&
        td9 == "/img/cross.png") ||
      (td1 == "/img/cross.png" &&
        td4 == "/img/cross.png" &&
        td7 == "/img/cross.png") ||
      (td2 == "/img/cross.png" &&
        td5 == "/img/cross.png" &&
        td8 == "/img/cross.png") ||
      (td4 == "/img/cross.png" &&
        td5 == "/img/cross.png" &&
        td6 == "/img/cross.png") ||
      (td7 == "/img/cross.png" &&
        td8 == "/img/cross.png" &&
        td9 == "/img/cross.png") ||
      (td3 == "/img/cross.png" &&
        td6 == "/img/cross.png" &&
        td9 == "/img/cross.png") ||
      (td3 == "/img/cross.png" &&
        td5 == "/img/cross.png" &&
        td7 == "/img/cross.png")
    ) {
      alert("User 2 Won");
      user2wincount++;
      user2win.innerText = user2wincount;
      removeimg();
    }

    if (draw == 10) {
      alert("Game Draw");
      removeimg();
    }
  }
}
