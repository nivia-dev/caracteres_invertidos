function inverter(){
    const inverter = document.getElementsByName("txt");
    valor = inverter.item(0).value.toString().split("");
    normal = valor.reverse().join("");
    res.innerHTML += normal + "<br />";
}