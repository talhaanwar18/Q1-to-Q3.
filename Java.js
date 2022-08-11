function creatLoop() {
    let number= document.getElementById('value').value;
    let sum =0;
    for (let index = 1; index <= number; index++){
        sum+=index;
    }
    document.getElementById('result').innerText=sum;
}

function creatLoop1() {
    let number= document.getElementById('value1').value;
    let ml =1.5;
    for (let index = 1; index <= number; index++){
    totalMl=index*ml;
    document.getElementById('result1').innerText= totalMl;}

}

function creatLoop2() {
    let number= document.getElementById('value2').value;
    let ml =3.6;
    for (let index = 1; index <= number; index++){
    totalMl=index*ml;
    document.getElementById('result2').innerText= totalMl;}
}