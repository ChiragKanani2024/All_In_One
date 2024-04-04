let table1 = document.querySelector("#table1");
let tds = document.querySelectorAll("td");
let sc = document.querySelector("#score");
let start = document.querySelector(".btn");
let score = 0;

tds.forEach((element) => {
  element.addEventListener("click", game);
});

function getNewRandomColor() {
  let tdcount1 = document.querySelectorAll("td").length;
  var num = Number(Math.floor(Math.random() * tdcount1));
  // console.log(num)

  let a = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);
  let c = Math.floor(Math.random() * 255 + 1);
  //    console.log(rand)
  let tds1 = table1.querySelectorAll("td");
  for (const i of tds1) {
    // console.log(i)
    i.style.backgroundColor = `rgb(${a},${b},${c})`;
    i.setAttribute("id", "opt1");
  }
  tds1[num].setAttribute("id", "opt5");
  // console.log(tds1[num])
}

function tableadd() {
  if (table1.offsetWidth < 480) {
    for (const tr of table1.firstElementChild.children) {
      let td = document.createElement("td");
      td.addEventListener("click", game);
      tr.append(td);
    }

    let tr = document.createElement("tr");
    let tdcount = table1.firstElementChild.firstElementChild.childElementCount;
    for (let i = 0; i < tdcount; i++) {
      let td = document.createElement("td");
      td.addEventListener("click", game);

      tr.append(td);
    }
    table1.firstElementChild.append(tr);
    getNewRandomColor();
  } else {
    getNewRandomColor();
  }
}

function game(evt) {
  let id = evt.target.getAttribute("id");
  if (id == "opt5") {
    score++;
    // console.log(score)
    sc.innerText = `Score : ${score}`;

    tableadd();
  } else {
    //   tableadd()
    //   console.log(score)
    if (score != 0) {
      score--;
      sc.innerText = `Score : ${score}`;
    }
  }
}

start.addEventListener("click", () => {
  let time = 30;
  document.querySelector("#head").style.display = "none";
  table1.style.display = "block";
  const set = setInterval(() => {
    if (time >= 0) {
      document.querySelector("#time").innerText = time;
      time--;
    } else {
      alert(`Your time over , your Score: ${score}`);
      // document.querySelector("#head").style.display = "block"
      // table1.style.display="none";
      clearInterval(set);
      location.reload();
    }
  }, 1000);
});
