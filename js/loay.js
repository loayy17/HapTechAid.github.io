import detail from "./productitem"
var layer = document.querySelector(".layer");
var imgLayer = document.querySelector(".layer-container .container img");

console.log(detail)
function disLayer(index) {
  layer.classList.remove("d-none");
  var newImg = dataContainer[index].urlToImage;
  imgLayer.setAttribute("src", newImg);
  var box = `<p class="my-3 h5 bolder">${dataContainer[index].title}</p>
  <p >${dataContainer[index].publishedAt}</p>
  <p class="h6 bold"><span>Published at: </span>${dataContainer[index].source.name}</p>
  <p class="text-muted">${dataContainer[index].content}</p>
  <a href="${dataContainer[index].url}" class="btn btn-info text-light position-absolute bottom-0 end-0">See Ful New From ${dataContainer[index].source.name}</a>
  `;

  document.getElementById("imgCont").innerHTML = box;
}
