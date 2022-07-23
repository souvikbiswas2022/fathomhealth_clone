let store = JSON.parse(localStorage.getItem("news"));
let data = JSON.parse(localStorage.getItem("mynewsData"));
console.log("data:", data);

function newsAppend(store) {
  let type = document.getElementById("type");
  type.innerText = store.type;

  let heading = document.getElementById("heading");
  heading.innerText = store.heading;

  let subheading = document.getElementById("subheading");
  subheading.innerText = store.subheading;

  let author = document.getElementById("author");
  author.innerText = store.author;

  let date = document.getElementById("date");
  date.innerText = store.date;

  let image = document.getElementById("image");
  image.src = store.Image;
}

let append = (data, x) => {
  let newsContainer = document.getElementById("news_div");
  newsContainer.innerHTML = null;
  let head = document.createElement("h1");

  data.forEach((ele, index) => {
    if (index <= x) {
      let box = document.createElement("div");
      box.setAttribute("id", "box");
      let image = document.createElement("img");
      image.src = ele.Image;

      let boxInner = document.createElement("div");
      boxInner.setAttribute("id", "boxInner");

      let type = document.createElement("h5");
      type.innerText = ele.type;
      let heading = document.createElement("h2");
      heading.innerText = ele.heading;
      heading.addEventListener("click", function () {
        store1(ele);
      });
      let summery = document.createElement("p");
      summery.innerText = ele.summery;

      boxInner.append(type, heading, summery);
      box.append(image, boxInner);
      newsContainer.append(box);
    }
  });
};

let store1 = (ele) => {
  localStorage.setItem("news", JSON.stringify(ele));
  window.location.href = "./news.html";
};

document.querySelector("#s2>button").addEventListener("click", function () {
  let email = document.querySelector("#s2>input").value;

  if (email === "") {
    alert("Please enter your email first");
  } else if (email !== null) {
    alert("Subscription Successfull");
  }

  document.querySelector("#s2>input").value = null;
});

append(data, 2);