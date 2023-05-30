import acv from "../../assets/GamesAcao/acv.png"
import tlou from "../../assets/GamesAcao/tlou.webp"
import  swjfo from "../../assets/GamesAcao/swjfo.jpg"
import ds from "../../assets/GamesAcao/ds.jpg"
import bl3 from "../../assets/GamesAcao/bl3.jpg"
import gow2018 from "../../assets/GamesAcao/gow2018.jpeg"

const GamesAcao ={

    title: "Jogos De Ação",
    
    gamesAcao:
    [
      {
        id: '1',
        title: 'Assassins C V',
        image: acv,
        value: 200,
        description: "Torne-se um Viking lendário em busca da glória. Ataque seus inimigos, aumente seu assentamento e construa seu poder político."
      },
      {
        id: '2',
        title: 'The Lest Of Us',
        image: tlou,
        value: 250,
        description: "Conheça a história emocionante e os personagens inesquecíveis de The Last of Us™, vencedor de mais de 200 prêmios de Jogo do Ano. "
      },
      {
        id: '3',
        title: 'Star Wars J F O',
        image: swjfo,
        value: 200,
        description: "Prepare-se para cruzar a galáxia em STAR WARS Jedi: Fallen Order, uma aventura em terceira pessoa cheia de ação da Respawn Entertainment. Um padawan perdido precisa completar seu treinamento, desenvolver novas habilidades com a Força e dominar a arte do sabre de luz — tudo isso enquanto..."
      },
      {
        id: '4',
        title: "Death Stranding",
        image: ds,
        value: 40,
        description: "Do lendário diretor Hideo Kojima, surge uma experiência que desafia gêneros, ainda maior em DIRECTOR’S CUT. Jogando como Sam Bridges, sua missão é entregar esperança à humanidade ao conectar os sobreviventes de uma América devastada. Você conseguirá reunir este mundo..."
      },
      {
        id: '5',
        title: "Borderlands 3",
        image: bl3,
        value: 120,
        description: "O jogo de tiro e saque original voltou, trazendo milhares de armas e uma nova aventura movida a caos! Exploda novos inimigos em mundos inéditos como um dos quatro Caça-Arcas novos, com árvores de talentos, habilidades e personalização robustas."
      },
      {
        id: '6',
        title: "God Of War",
        image: gow2018,
        value: 200,
        description: "Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo. "
      },
      

    ]
} 

export default GamesAcao;