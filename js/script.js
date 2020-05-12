/*Solo quiete la barra diagonal y el asterisco*/

/*var texto , resultado;
texto= prompt("Ingresa Numero:")
resultado = Math.sqrt(texto)
document.write(resultado);
console.log(resultado);
alert(resultado);*/

/*var x,y , op;
x = parseFloat(prompt("n1: "));
y = parseFloat(prompt("n1: "));
op =parseInt(prompt("Op: "));*/
/*CALCULAR SI UN NUMERO ES MAYOR Y TAMBIEM SI SON IGUALES*/
/*if (a,b) {
    mostrar(a)   
} else if (b>a) {
    mostrar(b)
} else {
    mostrar("iguales")
}*/
/*function mostrar(resultado){
    document.write(resultado);
    console.log(resultado);
    alert(resultado);
}
switch(op){
    case 1: mostrar(suma());
            break;
    case 2: mostrar(resta()); 
            break;
    case 3: mostrar(multi());
            break;
    case 4:mostrar(divi());
            break;
    default:break;

}*/
/*var w= prompt("N:");
var i , sum=0;
for (i= 1; i <=w;index++) {
    sum+=i*i;
}
document.write(sum);*/
function suma() {
    return(x+y)
}
function resta() {
    return(x-y)
}
function multi() {
    return(x*y)
}
function divi() {
    if(y==0)
    return "NO SE PUEDE";
    return(x/y);
}

/*Para poder mandar un texto como notificacion*/
var x , y ,op;
var res = document.getElementById("result");
function calcular() {
    x = parseInt(document.getElementById("n1").value);
     y = parseInt(document.getElementById("n2").value);
     op = parseInt(document.getElementById("oper").value);
    /*var name = document.getElementById("texto").value;*/
    /*document.getElementById("result").value = "Bienvenido: " +name;*/
    /*alert("Hola:" +name);*/
    switch (op) {
        case 1:
            res.value = suma();
            break;
         case 2:
            res.value = resta();
            break;
        case 3:
            res.value= multi();
            break;
        case 4:
            res.value=divi();
            break;
        default:
            break;
    }

}