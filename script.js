let firstName = document.querySelector('.first-name');
let lastName = document.querySelector('.last-name');
let phoneNumber = document.querySelector('.phone-number');
let table = document.querySelector('.my-table');
let btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', onBtnAddRow);
addEventListener('click', onBtnDeleteRow);

function onBtnAddRow() {
  addNewRow();
  clearInputs();
}

function addNewRow() {
  if((!firstName.value || !isNaN(firstName.value )) || 
  (!lastName.value || !isNaN(lastName.value )) || 
  (!phoneNumber.value || isNaN(phoneNumber.value))) {
    alert("Введите правильное значение!");
    return;
  }
  createNewRow ();
}

function clearInputs() {
  firstName.value = '';
  lastName.value = '';
  phoneNumber.value = '';
}

function createNewRow () {
  let newRow = table.insertRow();
  let firstNameCell = newRow.insertCell(0);
  let lastNameCell = newRow.insertCell(1);
  let phoneNumberCell = newRow.insertCell(2);
  let deleteRowCell = newRow.insertCell(3);
  firstNameCell.innerHTML = firstName.value;
  lastNameCell.innerHTML = lastName.value;
  phoneNumberCell.innerHTML = phoneNumber.value;
  deleteRowCell.innerHTML = '<button>Удалить</button>';
}

function onBtnDeleteRow(event){
  if(event.target.closest('button')) {
  event.target.closest('tr').remove()
  }
}