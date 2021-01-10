let firstName = document.querySelector('.first-name').value;
let lastName = document.querySelector('.last-name').value;
let phoneNumber = document.querySelector('.phone-number').value;
let table = document.querySelector('.my-table');
let btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', onBtnAddRow);
addEventListener('click', onBtnDeleteRow);

function onBtnAddRow() {
  addNewRow();
  clearInput();
}

function addNewRow() {
  validInputs();
  createNewRow();
}

function clearInput() {
  firstName = '';
  lastName = '';
  phoneNumber = '';
}

function validInputs() {
  if((!firstName || !isNaN(firstName )) || 
  (!lastName || !isNaN(lastName )) || 
  (isNaN(phoneNumber) || !phoneNumber)) {
    alert("Введите правильное значение!");
    return;
  }
}

function creatNewRow() {
  let newRow = table.insertRow();
  let firstNameCell = newRow.insertCell(0);
  let lastNameCell = newRow.insertCell(1);
  let phoneNumberCell = newRow.insertCell(2);
  let deleteRowCell = newRow.insertCell(3);
  
  firstNameCell.innerHTML = firstName;
  lastNameCell.innerHTML = lastName;
  phoneNumberCell.innerHTML = phoneNumber;
  deleteRowCell.innerHTML = '<button>Удалить</button>';
}

function onBtnDeleteRow(event){
  if(event.target.closest('button')) {
  event.target.closest('tr').remove()
  }
}