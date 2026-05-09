const animes = [
    {
        nome: "One Piece",
        genero: "Aventura",
        nota: 9.5,
        censura: 14,
        episodios: 1000,
        linkImagem: "https://m.media-amazon.com/images/S/pv-target-images/1595dc2f5bd3654d3d263b4fce60780b118bb31ee3af7a9dc9c99f89ba415934.jpg",
        resumo: "Luffy quer encontrar o One Piece e virar o Rei dos Piratas.",
        curiosidade: "É um dos animes mais longos já criados."
    },

    {
        nome: "Naruto",
        genero: "Ação",
        nota: 8.9,
        censura: 12,
        episodios: 720,
        linkImagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/Naruto-e1708720675210.jpg?w=1200&h=675&crop=1",
        resumo: "Naruto sonha em se tornar Hokage da Vila da Folha.",
        curiosidade: "O anime popularizou ainda mais a cultura ninja."
    },

    {
        nome: "Dragon Ball Z",
        genero: "Luta",
        nota: 9.2,
        censura: 10,
        episodios: 291,
        linkImagem: "https://img.elo7.com.br/product/zoom/2C16CE5/big-poster-anime-dragon-ball-z-lo001-tamanho-90x60-cm-poster.jpg",
        resumo: "Goku protege a Terra de inimigos extremamente poderosos.",
        curiosidade: "Foi um dos animes mais famosos do Brasil."
    },

    {
        nome: "Attack on Titan",
        genero: "Ação",
        nota: 9.1,
        censura: 18,
        episodios: 89,
        linkImagem: "https://preview.redd.it/attack-on-titan-launches-new-official-website-promises-v0-dztacs1z90se1.jpg?width=1080&crop=smart&auto=webp&s=5eb9fce0cb9abbf27fef6b4d15f036450073ad61",
        resumo: "Humanos vivem cercados por muralhas para fugir dos titãs.",
        curiosidade: "O anime ficou famoso pelas reviravoltas."
    },

    {
        nome: "Death Note",
        genero: "Suspense",
        nota: 9.0,
        censura: 16,
        episodios: 37,
        linkImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjkSeIg6GwbCbkUq8JjtwkKNz-MWVMEp64w&s",
        resumo: "Um estudante encontra um caderno que mata pessoas.",
        curiosidade: "Light Yagami é um dos personagens mais inteligentes dos animes."
    },

    {
        nome: "Demon Slayer",
        genero: "Aventura",
        nota: 8.8,
        censura: 16,
        episodios: 55,
        linkImagem: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GY5P48XEY-backdrop_wide",
        resumo: "Tanjiro luta contra demônios para salvar sua irmã.",
        curiosidade: "A animação é considerada uma das mais bonitas."
    },

    {
        nome: "Jujutsu Kaisen",
        genero: "Sobrenatural",
        nota: 8.7,
        censura: 16,
        episodios: 47,
        linkImagem: "https://external-preview.redd.it/jujutsu-kaisen-season-3-will-be-some-of-the-best-anime-ever-v0-p0WFRquUzQSEo8nboYUCLPqj5ZhyiL9F6Yuu122FtGQ.jpeg?auto=webp&s=31228a47f906c35e0f0c4ae5f74de82fe460f642",
        resumo: "Yuji entra no mundo das maldições após comer um dedo amaldiçoado.",
        curiosidade: "Gojo é um dos personagens mais populares da atualidade."
    },

    {
        nome: "Tokyo Ghoul",
        genero: "Terror",
        nota: 8.5,
        censura: 18,
        episodios: 48,
        linkImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxxBJYawUHSaNRRwLyyVsytQunO1AFPmqg&s",
        resumo: "Kaneki vira meio ghoul após um acidente.",
        curiosidade: "A abertura Unravel ficou mundialmente famosa."
    },

    {
        nome: "Bleach",
        genero: "Ação",
        nota: 8.6,
        censura: 14,
        episodios: 366,
        linkImagem: "https://m.media-amazon.com/images/S/pv-target-images/3689ce2da20d766284b40513c233a27d4161f846e03c2c2453c4c3654c4daaa9.jpg",
        resumo: "Ichigo ganha poderes de ceifador de almas.",
        curiosidade: "Bleach faz parte do famoso Big 3."
    },

    {
        nome: "Hunter x Hunter",
        genero: "Aventura",
        nota: 9.4,
        censura: 14,
        episodios: 148,
        linkImagem: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GY3VKX1MR-backdrop_wide",
        resumo: "Gon busca se tornar um Hunter e encontrar seu pai.",
        curiosidade: "O sistema de poder Nen é muito elogiado."
    },

    {
        nome: "My Hero Academia",
        genero: "Super-herói",
        nota: 8.4,
        censura: 12,
        episodios: 138,
        linkImagem: "https://ovicio.com.br/wp-content/uploads/2026/04/20260407-my-hero-academia-unite-survival-video-promocional-ovicio.webp",
        resumo: "Midoriya quer virar o maior herói do mundo.",
        curiosidade: "Foi inspirado em histórias da Marvel."
    },

    {
        nome: "Sword Art Online",
        genero: "Game",
        nota: 7.9,
        censura: 14,
        episodios: 96,
        linkImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFyfo3Jyw3V3fdbWL6WPtCVk0xe3WcAb55w&s",
        resumo: "Jogadores ficam presos em um jogo virtual mortal.",
        curiosidade: "Popularizou animes de MMORPG."
    },

    {
        nome: "Fullmetal Alchemist Brotherhood",
        genero: "Fantasia",
        nota: 9.7,
        censura: 14,
        episodios: 64,
        linkImagem: "https://sm.ign.com/t/ign_pt/screenshot/default/fullmetal-alchemist-brotherhood-thumb_djgn.1280.jpg",
        resumo: "Dois irmãos usam alquimia para recuperar seus corpos.",
        curiosidade: "É um dos animes mais bem avaliados do mundo."
    },

    {
        nome: "Black Clover",
        genero: "Magia",
        nota: 8.3,
        censura: 12,
        episodios: 170,
        linkImagem: "https://animenew.com.br/wp-content/uploads/2026/05/Yuki-Tabata-revela-cenas-que-definiram-Black-Clover.webp",
        resumo: "Asta quer virar o Rei Mago mesmo sem poderes.",
        curiosidade: "O protagonista grita muito nos primeiros episódios."
    },

    {
        nome: "Chainsaw Man",
        genero: "Ação",
        nota: 8.9,
        censura: 18,
        episodios: 12,
        linkImagem: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2025/09/chainsaw-man-anime-collage-of-denji-in-hybrid-form-pulling-his-cord-and-cuddling-with-pochita.jpeg?w=1200&h=675&fit=crop",
        resumo: "Denji faz um pacto demoníaco e ganha poderes de motosserra.",
        curiosidade: "O anime ficou famoso pela violência intensa."
    }
];
function mostrarAnimes() {

    const idade = Number(document.getElementById("idadeUsuario").value);

    const catalogo = document.getElementById("catalogo");

    catalogo.innerHTML = "";

    animes.forEach(anime => {

        let classificacao = anime.nota >= 9
            ? "nota-alta"
            : "nota-baixa";

        let premium = (anime.nota > 9 && anime.episodios > 100)
            ? "premium"
            : "";

        let conteudoLiberado = idade >= anime.censura;

        catalogo.innerHTML += `
        
        <div class="card ${premium}">

            <img 
                src="${anime.linkImagem}" 
                class="${conteudoLiberado ? "" : "blur"}"
            >

            <div class="card-conteudo">

                <h2>${anime.nome}</h2>

                <p><strong>Gênero:</strong> ${anime.genero}</p>

                <p class="${classificacao}">
                    <strong>Nota:</strong> ${anime.nota}
                </p>

                ${
                    conteudoLiberado
                    ?
                    `
                    <p>${anime.resumo}</p>

                    <p>
                        <strong>Você sabia?</strong>
                        ${anime.curiosidade}
                    </p>
                    `
                    :
                    `
                    <p class="restrito">
                        Conteúdo Restrito
                    </p>
                    `
                }

            </div>

        </div>
        `;
    });

}