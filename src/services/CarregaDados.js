import GamesTerror from "../mocks/Games/GamesTerror";
import GamesAcao from "../mocks/Games/GamesAcao";
import GamesCorrida from "../mocks/Games/GamesCorrida"
import GamesRpg from "../mocks/Games/GamesRpg";
import GamesDestaques from "../mocks/Games/GamesDestaques";
import BemVindo from "../mocks/BemVindo";
import Login from "../mocks/Login";
import Registro from "../mocks/Registro";
import Principal from "../mocks/Principal";
import Creditos from "../mocks/Creditos";

export const CarregaGamesDestaques = () =>{
    return GamesDestaques;
}
export const CarregaGamesCorrida = () =>{
    return GamesCorrida
}
export const carregaGamesRpg = () =>{
    return GamesRpg;
}
export const carregaGamesTerror = () =>{
    return GamesTerror;
}
export const carregaGamesAcao = () =>{
    return GamesAcao;
}
export const carregaBemVindo = () =>{
    return BemVindo;
}
export const CarregaLogin = () =>{
    return Login;
}
export const CarregaRegistro = () =>{
    return Registro;
}
export const CarregaPrincipal = () =>{
    return Principal;
}
export const CarregaCreditos = () =>{
    return Creditos;
}


