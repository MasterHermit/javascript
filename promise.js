const datas = [
  { title: "one", body: "one's body" },
  { title: "two", body: "two's body" },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      datas.push(post);
      resolve();
    }, 2000);
  });
}
function getPost() {
  setTimeout(function () {
    let string = "";
    datas.forEach((data) => {
      string += `<li>${data.title}</li>`;
    });
    document.body.innerHTML = string;
  }, 1000);
}
createPost({ title: "three", body: "three's body" }).then(getPost);
