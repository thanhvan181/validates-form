// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const student = document.getElementById('student')
const grade = document.getElementById("grade")
const search = document.getElementById("search")
const table = document.getElementById("table-content")


search.addEventListener('keyup', searchStudent);
grade.addEventListener('click', hightLight);

function searchStudent(event){
    console.log(student.value);
    console.log(event.target);
    searchIntoTable(event);
}

function hightLight(){
    let rows = table.getElementsByTagName("tr");
    console.log(rows, typeof rows);
    for (let i=1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
        console.log("Cells", cells)
        if (parseFloat(cells[4].textContent) >= 5){
            console.log("filtered", cells)
            rows[i].style.background = 'yellow';
            }


    }

}

function searchIntoTable(e) {
    const text = e.target.value.toLowerCase();
    console.log("SEARchFor: ", text)
    let rows = table.getElementsByTagName("tr");
    console.log(rows, typeof rows);
   for (let i=1; i < rows.length; i++) {
       let cells = rows[i].getElementsByTagName('td');
       console.log("Cells", cells)
       if (cells[1].textContent.toLowerCase().indexOf(text) != -1){
           console.log("filtered", cells)
           rows[i].style.display = 'table-row';

       }else{
           rows[i].style.display = 'none';
       }

   }
}