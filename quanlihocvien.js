class Employee {
    constructor(id, name, dob, gender, address, idcard, job, note, salary) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
        this.idcard = idcard;
        this.job = job;
        this.note = note;
        this.salary = salary;
    }
}

const employeeList = [];

document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const idcard = document.getElementById('idcard').value;
    const job = document.getElementById('job').value;
    const note = document.getElementById('note').value;
    const salary = document.getElementById('salary').value;

    const newEmployee = new Employee(id, name, dob, gender, address, idcard, job, note, salary);
    employeeList.push(newEmployee);
    displayEmployees();

    this.reset();
});

function displayEmployees() {
    const employeeTableBody = document.querySelector('#employeeTable tbody');
    employeeTableBody.innerHTML = '';

    for (let index = 0; index < employeeList.length; index++) {
        const employee = employeeList[index];
        const row = employeeTableBody.insertRow();

        row.insertCell(0).textContent = employee.id;
        row.insertCell(1).textContent = employee.name;
        row.insertCell(2).textContent = employee.dob;
        row.insertCell(3).textContent = employee.gender;
        row.insertCell(4).textContent = employee.address;
        row.insertCell(5).textContent = employee.idcard;
        row.insertCell(6).textContent = employee.job;
        row.insertCell(7).textContent = employee.note;
        row.insertCell(8).textContent = employee.salary;

        const actionsCell = row.insertCell(9);
        const editButton = document.createElement('button');
        editButton.textContent = 'Sửa';
        editButton.className = 'edit';
        editButton.onclick = () => editEmployee(index);
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.className = 'delete';
        deleteButton.onclick = () => deleteEmployee(index);
        actionsCell.appendChild(deleteButton);
    }
}

function editEmployee(index) {
    const employee = employeeList[index];

    document.getElementById('id').value = employee.id;
    document.getElementById('name').value = employee.name;
    document.getElementById('dob').value = employee.dob;
    document.getElementById('gender').value = employee.gender;
    document.getElementById('address').value = employee.address;
    document.getElementById('idcard').value = employee.idcard;
    document.getElementById('job').value = employee.job;
    document.getElementById('note').value = employee.note;
    document.getElementById('salary').value = employee.salary;

    deleteEmployee(index);
}

function deleteEmployee(index) {
    employeeList.splice(index, 1);
    displayEmployees();
}

function resetForm() {
    document.getElementById('employeeForm').reset();
}
