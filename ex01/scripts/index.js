var modal = document.getElementById("myModal");

function openModal(parameter) {
  var href = parameter.getAttribute("href");
  modal.style.display = "block";
  var modalContent = modal.querySelector(".modal-content");
  var modalBody = modalContent.querySelector(".modal-body");
  modalBody.innerHTML = "<object data='" + href + "'class= 'objectView' ></object>";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};