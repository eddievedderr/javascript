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

function erase(id) {
    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild (row);
    return false
}