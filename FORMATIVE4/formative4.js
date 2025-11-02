document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("details");

  /* Array to store all user entries */
  const usersData = [];

  form.addEventListener("submit", function (event) {
    event.preventDefault(); /* Prevent form refresh */

    /* Collect form data */
    const idNumber = document.getElementById("IDNumber").value.trim();
    const firstname = document.getElementById("Firstname").value.trim();
    const middlename = document.getElementById("Middlename").value.trim();
    const lastname = document.getElementById("Lastname").value.trim();
    const genderInput = document.querySelector('input[name="Gender"]:checked');
    const bdate = document.getElementById("bdate").value;

    /* Validation */ 
    if (
      idNumber === "" ||
      firstname === "" ||
      middlename === "" ||
      lastname === "" ||
      !genderInput ||
      bdate === ""
    ) {
      alert("⚠️ Please fill out all required fields before saving.");
      return;
    }

    const gender = genderInput.value;

    /* Create an object for this user */
    const user = { idNumber, firstname, middlename, lastname, gender, bdate };

    /* Store the object in the array */
    usersData.push(user);

    /* Check if table exists, otherwise create it */
    let table = document.getElementById("dataTable");
    if (!table) {
      table = document.createElement("table");
      table.id = "dataTable";
      table.border = "1";
      table.style.marginTop = "20px";
      table.style.borderCollapse = "collapse";
      table.style.tableLayout = "auto"; /* Columns adapt to content */
      table.innerHTML = `
        <tr style="background-color: #f2f2f2;">
          <th>ID Number</th>
          <th>Firstname</th>
          <th>Middlename</th>
          <th>Lastname</th>
          <th>Gender</th>
          <th>Birthdate</th>
        </tr>
      `;
      document.querySelector("main").appendChild(table);
    }

    /* Add new row dynamically from the object */
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${user.idNumber}</td>
      <td>${user.firstname}</td>
      <td>${user.middlename}</td>
      <td>${user.lastname}</td>
      <td>${user.gender}</td>
      <td>${user.bdate}</td>
    `;
    table.appendChild(newRow);

    /* Reset form */
    form.reset();

  });
});

