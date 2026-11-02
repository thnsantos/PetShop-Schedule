// Procura no HTML o campo onde a pessoa escolhe uma data.
const datePicker = document.querySelector("#schedule-date");

// Cria um objeto com a data atual do computador.
const today = new Date();

// Pega o ano atual, por exemplo: 2026.
const year = today.getFullYear();

// Pega o mês atual. Como os meses começam em zero,
// somamos 1. Depois garantimos que tenha dois dígitos.
const month = String(today.getMonth() + 1).padStart(2, "0");

// Pega o dia do mês atual e também garante dois dígitos.
const day = String(today.getDate()).padStart(2, "0");

// Preenche o campo no formato exigido pelo HTML: ano-mês-dia.
datePicker.value = `${year}-${month}-${day}`;

