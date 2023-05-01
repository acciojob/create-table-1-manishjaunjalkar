function insert_Row() {
    //Write your code here
	const samp = document.getElementById('sampleTable');
  const newRow = samp.insertRow(0);
  const leftCell = newRow.insertCell(0);
  const rightCell = newRow.insertCell(1);
  leftCell.innerHTML = 'New Cell1';
  rightCell.innerHTML = 'New Cell2';
  
}
