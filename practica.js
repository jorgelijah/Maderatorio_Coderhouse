function imc(peso, altura) {
  // completa el cuerpo de esta función
  var result = peso / Math.pow(altura, 2);
  if (result <= 18.5) {
    console.log("Bajo peso");
  } else if (result > 18.5 && result <= 25) {
    console.log("Normal");
  } else {
    console.log("Sobrepeso");
  }
}

// No borres la siguiente linea:
imc;
