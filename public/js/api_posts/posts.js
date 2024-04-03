const postheader = document.querySelector("#postHeader");
const postsData = document.querySelector("#postsData");
const firstpage = document.querySelector("#firstpage");
const previouspage = document.querySelector("#previouspage");
const currentpage = document.querySelector("#currentpage");
const nextpage = document.querySelector("#nextpage");
const lastpage = document.querySelector("#lastpage");
const search_text = document.querySelector("#search_text");
const go = document.querySelector("#go");

let data;

const appendData = (currentpage = 1) => {
  let str = "";
  data
    .slice(10 * Number(currentpage) - 10, 10 * Number(currentpage))
    .forEach((e) => {
      str += ` <tr><td> ${e.userId}</td></td><td>${e.id} </td><td  >${
        e.title
      } </td><td>${e.body.slice(
        0,
        50
      )}....<td><a class="viewpost"  href="api_posts/post-detail?${
        e.id
      }">View Detail</a></td></tr>`;
    });
  postsData.innerHTML = str;
};

const setPosts = async () => {
  try {
    data = await getposts("posts");
    let thead = "<tr>";
    for (const key in data[0]) {
      thead += `<th>${key}</th>`;
    }
    thead += " <th>View</th></tr>";
    postheader.innerHTML = thead;
    appendData();
    lastpage.dataset.val = Math.ceil(data.length / 10);
  } catch (error) {
    console.log(error);
  }
};
setPosts();

firstpage.addEventListener("click", () => {
  firstpage.disabled = true;
  previouspage.disabled = true;
  lastpage.disabled = false;
  nextpage.disabled = false;
  currentpage.innerText = 1;
  appendData(currentpage.innerText);
});

lastpage.addEventListener("click", () => {
  lastpage.disabled = true;
  nextpage.disabled = true;
  firstpage.disabled = false;
  previouspage.disabled = false;
  currentpage.innerText = lastpage.dataset.val;
  appendData(currentpage.innerText);
});

nextpage.addEventListener("click", () => {
  firstpage.disabled = false;
  previouspage.disabled = false;
  currentpage.innerText++;
  appendData(currentpage.innerText);
});

previouspage.addEventListener("click", () => {
  currentpage.innerText--;
  appendData(currentpage.innerText);
});

go.addEventListener("click", () => {
  if (search_text.value === "") {
    setPosts();
  } else {
    let searchData = data.filter((item) => {
      return Object.values(item).join(" ").includes(search_text.value);
    });
    let str = "";
    data = searchData;
    data.slice(0, 10).forEach((e) => {
      str += `  <tr><td> ${e.userId}</td></td><td>${e.id} </td><td  >${
        e.title
      } </td><td>${e.body.slice(
        0,
        50
      )}....<td><a class="viewpost"  href="api_posts/post-detail?${
        e.id
      }">View Detail</a></td></tr>`;
    });
    postsData.innerHTML = str;
    lastpage.dataset.val = Math.ceil(data.length / 10);
  }
});
