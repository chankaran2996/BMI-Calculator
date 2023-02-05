const cal = () =>{
    const weigth = document.getElementById("mass").value;
    const heigth = document.getElementById("Heigth").value;
    document.getElementById("mass").value="";
    document.getElementById("Heigth").value="";
    if(weigth==""||heigth==""){
        alert("Enter height and weigth");
        return;
    }
    let bmi = weigth/((heigth/100)*(heigth/100));
    document.getElementById("output").innerHTML="Your BMI value is "+bmi;
    // console.log(weigth,heigth,bmi)
}