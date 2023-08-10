let thead = [
    {
        id: 1,
        content: "Learn Javascript Session 01",
        date: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bách",
    },
    {
        id: 2,
        content: "Learn Javascript Session 2",
        date: "2023-04-17",
        status: "Pending",
        assignedTo: "Lâm th`",
    },
    {
        id: 3,
        content: "Learn CSS Session 1",
        date: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Ci ớt ớt",
    },
    {
        id: 3,
        content: "Learn CSS Session 1",
        date: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Ci ớt ớt",
    },
    {
        id: 3,
        content: "Learn CSS Session 1",
        date: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Ci ớt ớt",
    },
];

// chức năng hiển thị ra giao diện (READ)
// chức năng hiển thị ra giao diện (READ)
function newtable() {
    let string = ""
    for (let i = 0; i < thead.length; i++) {
        let element = thead[i];
        string += `  <tr>
                <td>${element.id}</td>
                <td>${element.content}</td>
                <td>${new Date().toLocaleDateString()}</td>
                <td>${element.status}</td>
                <td>${element.assignedTo}</td>
                <td><button onclick="beforeUpdate(${element.id})">update</button></td>
                <td><button onclick="onDelete(${element.id})">delete</button></td>
            </tr>`
    }
    document.getElementById("tbody").innerHTML = string;
}
newtable()

//  logic id tự tăng
//  logic id tự tăng
function idtutang() {
    let idmax = 0
    for (let i = 0; i < thead.length; i++) {
        if (idmax < thead[i]) {
            thead[i] = idmax
        }
    }
    return idmax++;
}

//  chức năng thêm mới (Create)
//  chức năng thêm mới (Create)
function addPeople() {
    let newid = idtutang();
    let newcontent = document.getElementById("content").value
    let newassignedTo = document.getElementById("assignedTo").value
    let newdueDate = new Date().toLocaleDateString();
    const obj = {
        id: newid,
        content: newcontent,
        date: newdueDate,
        status: "Pending",
        assignedTo: newassignedTo,
    }
    thead.push(obj);
    document.getElementById("content").value = "";
    document.getElementById("assignedTo").value = "";
    newtable()
}

// delete
// delete 
function onDelete(id) {
    const test = confirm(`Ban co chac chan muon xoa phan tu co id la ${id}?`)
    if (test) {
        const idx = thead.findIndex(el => el.id == id)
        thead.splice(idx, 1)
        newtable()
    }
}

//  edit  update
//  edit  update
function beforeUpdate(id) {
    document.getElementById('question').style.display = 'block'
    const currentElement = thead.find(el => el.id == id);
    document.getElementById('editContent').value = currentElement.content
    document.getElementById('editAssigned').value = currentElement.assignedTo
    localStorage.setItem('currentElementId', id)
}

function onUpdate() {
    const id = localStorage.getItem('currentElementId')
    const currentElement = thead.find(el => el.id == id);
    currentElement.content = document.getElementById('editContent').value
    currentElement.assignedTo = document.getElementById('editAssigned').value
    newtable()
    onCancel()
}

function onCancel() {
    document.getElementById('question').style.display = 'none'
    localStorage.removeItem('currentElementId')
}