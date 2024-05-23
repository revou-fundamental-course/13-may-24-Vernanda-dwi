// Ini JS

let isKelilingVisible = false
function hideOrShow() {
    document.getElementById('luas-section').style.display = 'none';
    document.getElementById('keliling-section').style.display ='block';

}

function hideOrShow2() {
    document.getElementById('luas-section').style.display = 'block';
    document.getElementById('keliling-section').style.display ='none';

}

function hitungLuas() {
    var alas = parseFloat(document.getElementById('inputAlas').value);
    var tinggi = parseFloat(document.getElementById('inputTinggi').value);
    var luas = 0.5 * alas * tinggi;
    document.getElementById('hasilLuas').innerHTML = "L = 1/2 x " + alas + " x " + tinggi + " = " + luas;
}



function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById('inputSisi1').value);
    var sisi2 = parseFloat(document.getElementById('inputSisi2').value);
    var sisi3 = parseFloat(document.getElementById('inputSisi3').value);
    var keliling = sisi1 + sisi2 + sisi3;
    document.getElementById('hasilKeliling').innerHTML = "K = " +  sisi1 +  "+" +  sisi2 + " + " + sisi3 + " = " + keliling;

}







