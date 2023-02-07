
var student = [];

console.log('test');

function submitData() {

    
    var id = document.getElementById('Input1').value;
    var name = document.getElementById('Input2').value;
    var obtainedMarks = document.getElementById('Input3').value;
    var totalMarks = document.getElementById('Input4').value;
   

    // console.log(id);
    // console.log(name);
    // console.log(obtainedMarks);
    // console.log(totalMarks);

    if (id == "" || name == "" || obtainedMarks == "" || totalMarks == "") {
        alert("All fields name must be filled out");
        return false;
    }

    if( obtainedMarks > totalMarks) {
        alert("Enter valid marks");
        return false;
    }

    let data = { 
        id : id,
        name : name,
        obtainedMarks : obtainedMarks,
        totalMarks : totalMarks
    }

    student.push(data);

    onLoadData(student);

    // console.log(data);
    console.log(student);

    document.getElementById('Input1').value = "";
    document.getElementById('Input2').value = "";
    document.getElementById('Input3').value = "";
    document.getElementById('Input4').value = "";
   
    
  
}



function onLoadData(student) {
   document.getElementById('body').innerHTML = createTable(student);
}

function createTable(student) {
    var row = "<tr>";

    student.forEach((value) => {
        // console.log(value.id);

        row += `<td> ${value.id} </td>`;
        row += `<td> ${value.name} </td>`;
        row += `<td> ${value.obtainedMarks} </td>`;
        row += `<td> ${value.totalMarks} </td> </tr>`;
        

    });

    return row;
}