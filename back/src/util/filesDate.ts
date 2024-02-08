/**
 * Obtiene la fecha de un arhivo file
 * @param fecha Date
 * @returns Año y mes de almacenamiento
 *
 * */

const obtenerFechaAlmacenamiento = (fecha: Date) => {
  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  return { año, mes };
};

export { obtenerFechaAlmacenamiento };
