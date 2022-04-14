class students {
  constructor(firstName, lastName, id, classRoom) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.classRoom = classRoom;
  }
}

class Comands {
  registerNewStudent(student) {
    const row = document.createElement("tr");
    const allStudent = document.querySelector("#all-students");

    row.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.id}</td>
    <td>${student.classRoom}</td>
    <td ><img class="remove-student" src="./img/icons8-trash.svg" alt=""></td>
    
    `;
    allStudent.appendChild(row);
  }
  clearInputs() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#idNumber").value = "";
    document.querySelector("#classRoom").value = "";
  }
  displayAlert(message, className) {
    const div = document.createElement("div");
    div.className = `w-75 mx-auto alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const form = document.querySelector("#form");
    container.insertBefore(div, form);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }
  deleteStudent(element) {
    if (element.className === "remove-student") {
      element.parentElement.parentElement.remove();
    }
  }
}

//function
const handleFormSubmit = (event) => {
  event.preventDefault();
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const id = document.querySelector("#idNumber").value;
  const classRoom = document.querySelector("#classRoom").value;
  const student = new students(firstName, lastName, id, classRoom);
  const comands = new Comands();
  if (firstName === "" || lastName === "" || id === "" || classRoom === "") {
    comands.displayAlert("inputs must be valid", "alert-error");
  } else {
    comands.registerNewStudent(student);
    comands.displayAlert("data created successfully", "alert-success");
    comands.clearInputs();
  }
};
// events handles

document.getElementById("form").addEventListener("submit", handleFormSubmit);
document.querySelector("#all-students").addEventListener("click", (event) => {
  comands = new Comands();
  comands.deleteStudent(event.target);
});
