let lista_productos = [];
let lista_carrito = [];
let monto_total = 0;

if (localStorage.getItem("BD_PRODUCTOS")) {
  lista_productos = JSON.parse(localStorage.getItem("BD_PRODUCTOS"));
  //cargarDatos();
  listar();
} else {
  localStorage.setItem("BD_PRODUCTOS", "[]");
}

function cargarDatos() {
  lista_productos.push({
    nombre: "Silla de Madera",
    precio: 150,
    cantidad: 12,
  });
  lista_productos.push({ nombre: "Mesa de Madera", precio: 250, cantidad: 12 });
  lista_productos.push({ nombre: "Escritorio", precio: 550, cantidad: 6 });
  localStorage.setItem("BD_PRODUCTOS", JSON.stringify(lista_productos));
}
//Funcion lista de productos
function listar() {
  var html = "";
  for (var i = 0; i < lista_productos.length; i++) {
    var dato = lista_productos[i];
    html += `
      <tr>
        <td>${lista_productos[i].nombre}</td>
        <td>${lista_productos[i].precio}</td>
        <td>${lista_productos[i].cantidad}</td>
        <td></td>
        <td>
            <button class="btn btn-info" onclick='agregarCarrito(${i})'>+</button>
            <button class="btn btn-danger" onclick='eliminarProducto(${i})'>x</button>
        </td>
    </tr>
      `;
  }
  document.getElementById("productos").innerHTML = html;
}

function agregarCarrito(prod) {
  lista_carrito.push(lista_productos[prod]);
  console.log(lista_productos[prod].precio);
  monto_total =
    parseFloat(monto_total) + parseFloat(lista_productos[prod].precio);
  listar_carrito();
}

function listar_carrito() {
  var html = "";
  for (var i = 0; i < lista_carrito.length; i++) {
    html += `
        <div class="card caja bg-success col-md-6 text-light">
          <h4>Nombre: ${lista_carrito[i].nombre}</h4>
          <h5>${lista_carrito[i].precio}</h5>
          <td>
              <button class="btn btn-danger" onclick='eliminar(${i})'>x</button>
          </td>
      </div>
        `;
  }
  document.getElementById("carrito").innerHTML = html;
  document.getElementById("total").innerHTML = monto_total;
}

function eliminar(pos) {
  lista_carrito.splice(pos, 1);
  listar_carrito();
}
//Funcion para eliminar producto
function eliminarProducto(posicion) {
  lista_productos.splice(posicion, 1);
  localStorage.setItem("BD_PRODUCTOS", JSON.stringify(lista_productos));
  listar();
}

function guardarProducto() {
  var nom = document.getElementById("nombre").value;
  var precio = document.getElementById("precio").value;
  var cant = document.getElementById("cantidad").value;

  $("#exampleModal").modal("hide");
  swal("Producto Registrado!", "Continuar!", "success");
  lista_productos.push({ nombre: nom, precio: precio, cantidad: cant });
  localStorage.setItem("BD_PRODUCTOS", JSON.stringify(lista_productos));
  listar();
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#blah").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#imagen").change(function () {
  readURL(this);
});
