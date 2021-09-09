var i=0;
var sejarah = [] ;
hitungLuas = () => 
{   
    var lebar = document.getElementById('L').value;
    var panjang = document.getElementById('P').value;
        if(lebar > 0 && panjang > 0)
    {
        var luas = (lebar*panjang);
        if (i<11) {
            sejarah[i] = luas;
            i=1+i;       
        }
        else{
            i=0;
        }  
        document.getElementById('luas').value = luas;
        let result =
        luas < 1000 ? document.getElementById('result').value =
        "Terlalu kecil" :
        luas < 1500 && luas> 1000 ? document.getElementById('result').value =
        "Normal" :
        document.getElementById('result').value = "Terlalu besar";
        }
        else{
        alert("masukan angka terlebih dahulu....!!!")
            }   
}

hasilSebelumnya = () => 
{
    document.write("<p>Hasil Luas Sebelumnya :</p>");
    sejarah.forEach((hsl_sejarah)=>{

			document.write("<p>"+hsl_sejarah+"</p>");

			i++;

		});
}