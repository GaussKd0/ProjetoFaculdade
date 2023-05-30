import re4 from "../../assets/GamesTerror/re4.png"
import re7 from "../../assets/GamesTerror/re7.jpeg";
import sh2 from "../../assets/GamesTerror/sh2.webp";
import ot from "../../assets/GamesTerror/ot.jpg"
import btmk from "../../assets/GamesTerror/btmk.png"
import ds from "../../assets/GamesTerror/ds.jpg"

const GamesTerror ={

    title: "Jogos De Terror",
    
    gamesTerror:
    [
      {
        id: '1',
        title: 'Resident Evil 4',
        image: re4,
        value: 250,
        description: "Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes. "
      },
      {
        id: '2',
        title: 'Resident Evil 7',
        image: re7,
        value: 100,
        description: 'Medo e isolamento se infiltram nas paredes de uma casa de campo abandonada. "7" marca um novo início para o horror de sobrevivência com a “Visão Isolada” da visceral perspectiva em primeira pessoa. '
      },
      {
        id: '3',
        title: 'Silent Hill 2',
        image: sh2,
        value: 300,
        description: '"Chamo-me... Maria", diz a mulher sorrindo. O rosto, a voz... é igual a ela.'  
      },
      {
        id: '4',
        title: 'Outlast Trials',
        image: ot,
        value: 90,
        description: "Red Barrels convida você a experimentar o terror entorpecente, desta vez com amigos. Quer você passe pelos testes sozinho ou em equipe, se sobreviver o suficiente e concluir a terapia, Murkoff ficará feliz em deixá-lo partir ... mas você será o mesmo?"
      },
      {
        id: '5',
        title: "Bramble T M K",
        image: btmk,
        value: 100,
        description: "Bramble The Mountain King é uma aventura em um mundo inspirado por fábulas nórdicas sombrias. Explore as lindas – porém, perigosas e obscuras – terras de Bramble, ao tentar salvar sua irmã. Atravesse a magnífica paisagem e sobreviva a encontros mortais com as criaturas horríveis de..."
    
      },
      {
        id: '6',
        title: "Dead Space",
        image: ds,
        value: 200,
        description: "O clássico de terror de sobrevivência e ficção científica está de volta, totalmente reformulado para oferecer uma experiência ainda mais imersiva, incluindo aprimoramentos visuais, de áudio e de jogabilidade, ao mesmo tempo em que se mantém fiel à emocionante visão do jogo original. "
  
      },

    ]
} 

export default GamesTerror;