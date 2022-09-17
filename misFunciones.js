function sumar(){
		var x=parseInt($("#numA").val());
		var y=parseInt($("#numB").val());
		var z=x+y;


 console.log(z);	
	}

function llamado(){
	$.ajax({    
    url : 'https://gdb18a87a3985ec-n7vnc1demw3s7dxo.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/api/costume',
    type : 'POST',
    dataType : 'json',
    success : function(resultado) {
    	console.log(resultado.items);
    	$("#respuestas").html(resultado.items[0].name);

    },
    error : function(xhr, status) {
        alert('ha sucedido un problema');
    }
});
}