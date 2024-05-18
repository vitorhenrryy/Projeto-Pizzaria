

function increaseValue() {
    var value = parseInt(document.getElementById('pedido').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('pedido').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('pedido').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    value = value < 1 ? 1 : value; // Não permitir valores menores que 1
    document.getElementById('pedido').value = value;
}