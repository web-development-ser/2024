// count 9 - Controle da função analiz(...);
let count = 16;
function play() {
  // Acessa Date() como palavra chave, e obj js;
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const dayOfWeek = currentDate.getDay();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  // Adiciona elementos de informações data atual;
  const i_date = document.getElementById("i_date")
  i_date.innerHTML = `${day}/${month}/${year}`;
  // Adiciona elementos de informações hora atual;
  const i_hours = document.getElementById("i_hours");
  i_hours.innerHTML = `${hours}:${minutes}:${seconds}`;
  // analiz - Função de análise de porcentagem de tempo por dias, (31 dias dividido por 3, dando o resultado de porcentagem);
  count++;
  // count recebe 1 a cada segundo, permitindo que a função analiz seja chamada a cada 17 segundos;
  if (count === 17) {
    analiz(day);
    // estiloCron - Função que faz análise da data, e entrega o link ao usuário;
    estiloCron(day);
    // Zera count, reiniciando contagem;
    count = 0;
  };
}

// Palavra chave, que será acionado o gatilho chamando a função de início a cada segundo;
setInterval(play, 1000);

function analiz(day) {
  console.log("Pausa")
  // Acessa id gold;
  const gold = document.getElementById('gold');
  // Acessa id green;
  const green = document.getElementById('green');
  // Acessa ig blue;
  const blue = document.getElementById('blue');
  
  // Decisão das cores referente a porcentagem dos elementos id correspondente no html para class css.
  if (day == !1 || day < 10.33) {
    // Adiciona a class blue no id blue;
    blue.classList.add("blue");
  } else if (day < 20.66) {
    //Adiciona a class gold no id gold;
    gold.classList.add("gold");
  } else if (day <= 31) {
    // Adiciona a class green no id green;
    green.classList.add("green");
  } else {
    // Comentário aleatório no .js console;
    console.log("Inválido!")
  }
}

function estiloCron(liDay) {
  // Acessa o id link_day;
  const link_day = document.getElementById('link-day');
  const link = document.getElementById('link');
  // Controle, de criação de elemento link;
  let x = 31 - liDay;
  if (liDay <= 3) {
    link.style.display = "block";
  } else {
    // Adiciona a quantidade de dias faltante correspondente ao mês;
    link_day.textContent = `Faltam ${x} dias!`;
    console.log("Válido!");
    link_day.style.color = 'gold';
    link_day.style.fontSize = '1.3rem';
    /* Oculta o link; */
    link.style.display = 'none'
  }
}