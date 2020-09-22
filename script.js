
function values(){
	var rno = document.myform.rollno.value;
	var std = document.myform.stud.value;
	var strm = document.myform.stream.value;
	var per = document.myform.percent.value;
	
	var arr =[rno,std,strm,per];
	var table1 = document.getElementById('tbl1');
	var row = table1.insertRow(0);
	var rowcnt = table1.rows.length;
	var tr =table1.insertRow(rowcnt);
	
	for(var r=0; r<arr.length;r++){
		
	    var x = tr.insertCell(r);
	    x.innerHTML=arr[r];
	 }
}

function reset(){
	
	document.getElementById('rollno').value = "";
	document.getElementById('stud').value = "";
	document.getElementById('stream').value = "";
	document.getElementById('percent').value = "";
	//alert('hii i am reset');
}

