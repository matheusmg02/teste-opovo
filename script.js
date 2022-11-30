const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cep = document.getElementById('cep');
const endereco = document.getElementById('endereco');
const numero = document.getElementById('numero');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');

nome.addEventListener('focus', ()=>{
  nome.style.borderColor = "blue";
});

nome.addEventListener('blur', ()=>{
  nome.style.borderColor = "black";
});

email.addEventListener('focus', ()=>{
  email.style.borderColor = "blue";
});

email.addEventListener('blur', ()=>{
  email.style.borderColor = "black";
});

cep.addEventListener('focus', ()=>{
  cep.style.borderColor = "blue";
});

cep.addEventListener('blur', ()=>{
  cep.style.borderColor = "black";
});

endereco.addEventListener('focus', ()=>{
  endereco.style.borderColor = "blue";
});

endereco.addEventListener('blur', ()=>{
  endereco.style.borderColor = "black";
});

numero.addEventListener('focus', ()=>{
  numero.style.borderColor = "blue";
});

numero.addEventListener('blur', ()=>{
  numero.style.borderColor = "black";
});

bairro.addEventListener('focus', ()=>{
  bairro.style.borderColor = "blue";
});

bairro.addEventListener('blur', ()=>{
  bairro.style.borderColor = "black";
});

cidade.addEventListener('focus', ()=>{
  cidade.style.borderColor = "blue";
});

cidade.addEventListener('blur', ()=>{
  cidade.style.borderColor = "black";
});

estado.addEventListener('focus', ()=>{
  estado.style.borderColor = "blue";
});

estado.addEventListener('blur', ()=>{
  estado.style.borderColor = "black";
});