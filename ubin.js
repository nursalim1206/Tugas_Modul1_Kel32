hitungLuas = () => 

{
    
    var lebar = document.getElementById('L').value;
    var panjang = document.getElementById('P').value;

        if(lebar > 0 && panjang > 0)

    {var luas = (lebar*panjang);
    document.getElementById('luas').value = luas;
     let result =
     luas < 1000 ? document.getElementById('result').value =
    "Terlalu kecil" :
     luas < 1500 ? document.getElementById('result').value =
    "Normal" :
     document.getElementById('result').value = "Terlalu besar";
    }


        else{
        alert("masukan angka terlebih dahulu....!!!")
            }  
}