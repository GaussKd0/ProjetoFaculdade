import tw3 from "../../assets/GamesDestaques/tw3.jpeg"
import o from "../../assets/GamesDestaques/o.jpeg"
import d from "../../assets/GamesDestaques/d.jpeg"
import it2 from "../../assets/GamesDestaques/it2.webp"
import rev from "../../assets/GamesDestaques/rev.webp"
import v from "../../assets/GamesDestaques/v.webp"

const gamesDestaques = {
    
    title: "Destaques",
    
    gamesDestaques:
    [
      {
        id: '1',
        title: 'Valheim',
        image: v,
        value: 40,
        description: "-Um jogo de sobrevivência em mundo aberto com elementos de construção e exploração."
      },
      {
        id: '2',
        title: 'Resident Evil Village',
        image: rev,
        value: 140,
        description: '-A mais recente entrada na popular série de jogos de terror e sobrevivência "Resident Evil".'
      },
      {
        id: '3',
        title: 'It Takes Two',
        image: it2,
        value: 200,
        description: '-Um jogo cooperativo de aventura e quebra-cabeças, onde você controla dois personagens em uma emocionante jornada.'  
      },
      {
        id: '4',
        title: 'Deathloop',
        image: d,
        value: 250,
        description: "- Um jogo de tiro em primeira pessoa com elementos de furtividade e um enredo intrigante, onde você está preso em um ciclo temporal."
      },
      {
        id: '5',
        title: "Outriders",
        image: o,
        value: 190,
        description: "Um jogo de tiro e RPG cooperativo, com elementos de ficção científica e habilidades especiais."
    
      },
      {
        id: '6',
        title: "The Witcher 3: Wild Hunt",
        image: tw3,
        value: 100,
        description: "Você é Geralt de Rívia, mercenário matador de monstros. Você está em um continente devastado pela guerra e infestado de monstros para você explorar à vontade. Sua tarefa é encontrar Ciri, a Criança da Profecia — uma arma viva que pode alterar a forma do mundo."
  
      },

    ]
} 


export default gamesDestaques;