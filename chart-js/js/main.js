//array
let alunos = [
    {name: "Malu", email: "malu@alves.com", phone: 219998799, job: "veterinarian"},
    {name: "Jaque", email: "jaque@gmail.com", phone: 21974450073, job: "backend"},
    {name: "Julinha", email: "juju@msn.com", phone: 21979984073, job: "fullstack"},
    {name: "Lucao", email: "lucao@hotmail.com", phone: 21987252294, job: "mobile"},
    {name: "Inacio", email: "inacio@yahoo.com", phone: 21977458473, job: "mobile"},
    {name: "Maurao", email: "maurao@hotmail.com", phone: 21944488576, job: "frontend"},
    {name: "Ramonzao", email: "monzao@gmail.com", phone: 2173484973, job: "frontend"},
    {name: "Davizao", email: "davi@msn.com", phone: 21975584073, job: "frontend"},
]

//load array data on table
window.onload = (event) => {
let tbody = document.querySelector("#myTable");
alunos.forEach((aluno, index) => {
    let tr = document.createElement("tr");
tr.id = index+1;
    let tdCod = document.createElement("td");
    let tdName = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdPhone = document.createElement("td");
    let tdJob = document.createElement("td");
    let tdButton = document.createElement("td");

    tdCod.textContent = index;
    tdName.textContent = aluno.name;
    tdEmail.textContent = aluno.email;
    tdPhone.textContent = aluno.phone;
    tdJob.textContent = aluno.job;
    tdButton.innerHTML = `<button class="btn-erase" onclick="erase(this)">Erase</button>`

    tr.appendChild(tdCod);
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPhone);
    tr.appendChild(tdJob);
    tr.appendChild(tdButton);

    tbody.appendChild(tr);

});


}

//making the 'erase' button work
function erase(id) {
    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild (row);
    return false
}

//making the 'add' button work
function add(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let job = document.getElementById('job').value;
    let table = document.getElementById('myTable');
//calcullating table size
let tableSize = table.rows.length;
//inserting a line under the table
let row = table.insertRow(tableSize);
let col1 = row.insertCell (0);
let col2 = row.insertCell (1);
let col3 = row.insertCell (2);
let col4 = row.insertCell (3);
let col5 = row.insertCell (4);
let col6 = row.insertCell (5);
//adding an 'id' tag to the element being created
row.id = tableSize;
//creating the button code to delete a line
let btnCode = "<button class='remove-btn' onclick='erase(this)'>Erase</button>";
//fillin the line cells
col1.innerHTML = tableSize;
col2.innerHTML = name;
col3.innerHTML = email;
col4.innerHTML = phone;
col5.innerHTML = job;
col6.innerHTML = btnCode;
 //Limpando os campos de inserção de dados
 document.getElementById('nome').value = "";
 document.getElementById('email').value = "";
 document.getElementById('telefone').value = "";
 document.getElementById('profissao').value = "";
//Retornando 'false' para impedir o reload da pagina
 return false

}