const precioBase = 400000;

//formato CL
const precioSpan = document.querySelector("#precio-inicial");
precioSpan.textContent = precioBase.toLocaleString("es-CL");

const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");
const cantidad = document.querySelector("#cantidad");
const total = document.querySelector("#precio-total");

//cantidad
let cantidadProductos = parseInt(cantidad.textContent);

//actualizar total
function actualizarTotal() {
  total.textContent = (precioBase * cantidadProductos).toLocaleString("es-CL");
}

//sumar
btnSumar.onclick = function () {
  cantidadProductos++;
  cantidad.textContent = cantidadProductos;
  actualizarTotal();
};

//restar
btnRestar.onclick = function () {
  if (cantidadProductos > 0) {
    cantidadProductos--;
    cantidad.textContent = cantidadProductos;
    actualizarTotal();
  }
};
