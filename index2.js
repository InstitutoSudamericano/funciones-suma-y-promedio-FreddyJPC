function verificacion(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
  
    if (promedio > 70) {
      return "Aprobado con un promedio de " + promedio;
    } else {
      return "Reprobado con un promedio de " + promedio;
    }
  }
  
  let resultado = verificacion(90, 90, 90);
  alert(resultado);