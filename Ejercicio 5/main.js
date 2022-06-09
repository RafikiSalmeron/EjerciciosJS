function moneda() {
  return Math.round(Math.random());
}

if (moneda() == 1) {
  console.log("Cruz");
} else {
  console.log("Cara");
}
