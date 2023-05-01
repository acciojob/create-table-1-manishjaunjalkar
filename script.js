function insert_Row() {
    //Write your code here
	let tr = document.createElement("tr");
	tr.innerHTML = '<td>New Cell1</td><td>New Cell2</td>';
	let tablerow= document.getElementById("sampleTable");
	tablerow.prepend(tr);
  
}
