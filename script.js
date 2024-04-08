function generateCard() {
  const nameElement = document.getElementById("name");
  const nameValue = nameElement.value;
  const cardNameElement = document.getElementById("cardName");
  cardNameElement.innerHTML = nameValue;

  const collegeNameValue = document.getElementById("collegeName").value;
  document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

  const degreeValue = document.getElementById("degree").value;
  document.getElementById("cardDegree").innerHTML = degreeValue;

  const branchValue = document.getElementById("branch").value;
  document.getElementById("cardBranch").innerHTML = branchValue;

  const rollValue = document.getElementById("roll").value;
  document.getElementById("cardRoll").innerHTML = rollValue;

  const fileInput = document.getElementById("file");
  const image = document.createElement("img");
  image.src = URL.createObjectURL(fileInput.files[0]);
  image.classList.add("user-photo");

  const userPhoto = document.querySelector(".user-photo");
  
  userPhoto.innerHTML = "";
  userPhoto.appendChild(image);

  document.getElementById("collegeCard").style.display = "block";
}
