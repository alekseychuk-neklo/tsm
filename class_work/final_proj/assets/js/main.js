function generateMenu(list, selector) {
    const container = document.getElementById(selector);
    let menu = document.createElement('ul');
    list.forEach(element => {
        let liElement = document.createElement('li');
        menu.append(liElement);
        liElement.setAttribute('id',element.id);
        liElement.innerHTML = element.name;
        container.append(menu);
        generateMenu(element.dept_units, element.id);
    })
}

function generateTable(data){
    let tbody = document.getElementById('employers').getElementsByTagName('tbody')[0];
    data.forEach(element => {
        let tr = document.createElement('tr');
        let attrs = ['id', 'name', 'tel', 'salary'];
        attrs.forEach(attrName=> {
            let td = document.createElement("td");
            td.innerHTML = element[attrName];
            tr.append(td);
        });
        tbody.append(tr);
    })
    ;
}
function clearTable(){
    let tbody =document.getElementById('employers').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
}
generateMenu([devDeptHead, qaDeptHead], 'menu');
let menu = document.getElementsByTagName('ul')[0];
 menu.addEventListener('click', function (e) {
     console.log(e.target.id);
     let data = employeers.filter(element => element.dept_unit_id == e.target.id);
     clearTable();
     console.log(data)
     generateTable(data);
 })
