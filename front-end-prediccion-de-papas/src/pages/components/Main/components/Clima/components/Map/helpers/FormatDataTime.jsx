export const FormatDataTime = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0"); // Asegura que el día tenga 2 dígitos
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses son 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
