console.log(document.getElementById("plus"))

document.getElementById("plus").addEventListener("click", function() {
    first = parseInt(document.getElementById("num1").value)
    second = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerHTML="Your result is "+(first+ second)
  });
document.getElementById("minus").addEventListener("click", function() {
    first = parseInt(document.getElementById("num1").value)
    second = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerHTML="Your result is "+(first-second)  });
  document.getElementById("mul").addEventListener("click", function() {
    first = parseInt(document.getElementById("num1").value)
    second = parseInt(document.getElementById("num2").value)
    console.log(first, second)
    document.getElementById("result").innerHTML="Your result is "+(first* second)  });
  document.getElementById("div").addEventListener("click", function() {
    first = parseInt(document.getElementById("num1").value)
    second = parseInt(document.getElementById("num2").value)
    console.log(first, second)
    document.getElementById("result").innerHTML="Your result is "+(first/ second)  });