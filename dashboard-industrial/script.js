// Função para validar acesso
function validarAcesso() {

    // Pegando o nome digitado
    let nome = document.getElementById("nomeOperador").value;

    // Área da mensagem
    let mensagem = document.getElementById("mensagemAcesso");

    // Verificação IF/ELSE
    if (nome === "") {

        mensagem.innerHTML = "Digite o nome do operador!";
        mensagem.style.color = "red";

    } else {

        mensagem.innerHTML = "Acesso liberado!";
        mensagem.style.color = "lime";

        // Mostrar o sistema
        document.getElementById("painelSistema").style.display = "block";

        // Gerar máquinas
        gerarListaMaquinas();

        // Iniciar sensor
        setInterval(monitorarSensor, 3000);
    }
}


// Função para gerar máquinas
function gerarListaMaquinas() {

    let select = document.getElementById("listaMaquinas");

    // Limpando opções antigas
    select.innerHTML = `
        <option value="">
            Selecione uma máquina
        </option>
    `;

    // Lista de máquinas
    let maquinas = [
        "Prensa 1",
        "Torno 2",
        "CNC 3",
        "Esteira 4",
        "Robô 5"
    ];

    // FOR
    for (let i = 0; i < maquinas.length; i++) {

        let option = document.createElement("option");

        option.value = maquinas[i];
        option.text = maquinas[i];

        select.appendChild(option);
    }
}


// Função SWITCH
function verificarStatus() {

    let maquina = document.getElementById("listaMaquinas").value;

    let status = document.getElementById("statusMaquina");

    switch (maquina) {

        case "Prensa 1":
            status.innerHTML = "Em operação";
            break;

        case "Torno 2":
            status.innerHTML = "Manutenção necessária";
            break;

        case "CNC 3":
            status.innerHTML = "Desligada";
            break;

        case "Esteira 4":
            status.innerHTML = "Funcionando normalmente";
            break;

        case "Robô 5":
            status.innerHTML = "Aguardando produção";
            break;

        default:
            status.innerHTML = "";
    }
}


// Função do sensor
function monitorarSensor() {

    // Temperatura aleatória
    let temperatura = Math.floor(Math.random() * 101);

    let visor = document.getElementById("temperatura");

    let situacao = document.getElementById("situacaoSensor");

    visor.innerHTML = temperatura + "°C";

    // Limpando classes antigas
    visor.className = "";

    // IF ELSE
    if (temperatura < 50) {

        visor.classList.add("normal");

        situacao.innerHTML = "Normal";

    } else if (temperatura >= 50 && temperatura <= 80) {

        visor.classList.add("alerta");

        situacao.innerHTML = "Alerta";

    } else {

        visor.classList.add("perigo");

        situacao.innerHTML = "PERIGO - SUPERAQUECIMENTO";
    }
}