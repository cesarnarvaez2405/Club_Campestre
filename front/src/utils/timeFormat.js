export function getFormatDate(fechaAAjustar) {
  const fecha = new Date(fechaAAjustar);

  // Obtener los componentes de la fecha (día, mes y año)
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Los meses en JavaScript son indexados desde 0, por lo que sumamos 1
  const año = fecha.getFullYear();

  // Crear una cadena de texto formateada
  const fechaFormateada = `${dia}/${mes}/${año}`;

  return fechaFormateada;
}
