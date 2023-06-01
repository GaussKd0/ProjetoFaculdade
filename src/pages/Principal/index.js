import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity,FlatList, Image, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { CarregaGamesDestaques, CarregaPrincipal } from "../../services/CarregaDados";
import { carregaGamesTerror } from "../../services/CarregaDados";
import { carregaGamesAcao } from "../../services/CarregaDados";
import { carregaGamesRpg } from "../../services/CarregaDados";
import { CarregaGamesCorrida } from "../../services/CarregaDados";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Principal = (props) =>{

    
    const [username, setUsername] = useState('');
    const [money, setMoney] = useState('');
    const [icon, setIcon] = useState('');
    const [titleGamesTerror, setTitleGamesTerror] = useState('');
    const [gamesRpg, setGamesRpg] = useState('');
    const [titleGamesRpg, setTitleGamesRpg] = useState('');
    const [gamesTerror, setGamesTerror] = useState('');
    const [titleGamesAcao, setTitleGamesAcao] = useState('');
    const [gamesAcao, setGamesAcao] = useState('');
    const [titleGamesCorrida, setTitleGamesCorrida] = useState('');
    const [gamesCorrida, setGamesCorrida] = useState('');
    const [gamesDestaques, setGamesDestaques] = useState('');
    const [titleDestaques, setTitleDestaques] = useState('');

    useEffect(() => {

        const returnCarregaPrincipal = CarregaPrincipal();
        setIcon(returnCarregaPrincipal.icon);
        setMoney(returnCarregaPrincipal.money);

        const returnGamesTerror = carregaGamesTerror();
        setTitleGamesTerror(returnGamesTerror.title);
        setGamesTerror(returnGamesTerror.gamesTerror);

        const returnGamesRpg = carregaGamesRpg();
        setTitleGamesRpg(returnGamesRpg.title);
        setGamesRpg(returnGamesRpg.gamesRpg);
        
        const returnGamesAcao = carregaGamesAcao();
        setTitleGamesAcao(returnGamesAcao.title);
        setGamesAcao(returnGamesAcao.gamesAcao);

        const returnGamesCorrida = CarregaGamesCorrida();
        setTitleGamesCorrida(returnGamesCorrida.title);
        setGamesCorrida(returnGamesCorrida.GamesCorrida);

        const returnGamesDestaques = CarregaGamesDestaques();
        setGamesDestaques(returnGamesDestaques.gamesDestaques);
        setTitleDestaques(returnGamesDestaques.title);

      
    const getUserName = async () => {
        try {
        const value = await AsyncStorage.getItem('username');
        if (value !== null) {
            setUsername(value);
        }
        } catch (error) {
            console.log('Erro ao obter o nome de usuário:', error);
        }
    };

    getUserName();

    if (props.route.params && props.route.params.onEditProfile) {
        props.route.params.onEditProfile(username);
    }
    }, [props.route.params]);
        
    
    const salvarDados = async () => {
        try {
          const imageArray = await AsyncStorage.getItem('imageArray');
          let dinheiroArray = await AsyncStorage.getItem('dinheiroArray');
          let newArray = [];
          let newDinheiroArray = [];
    
          if (imageArray !== null) {
            newArray = JSON.parse(imageArray);
          }
    
          if (dinheiroArray !== null) {
            newDinheiroArray = JSON.parse(dinheiroArray);
          }

    
          await AsyncStorage.setItem('imageArray', JSON.stringify(newArray));
          await AsyncStorage.setItem('dinheiroArray', JSON.stringify(newDinheiroArray));
    
          navigation.navigate('Carrinho', { imageArray: newArray, dinheiroArray: newDinheiroArray }); 
        } catch (error) {
          console.error('Erro ao salvar os dados:', error);
        }
      };
       
    const Item = ( {title, image, value, description}) => (
    
        <View style={styles.gamesList} >
            <TouchableOpacity onPress={() => props.navigation.navigate("Games", {title, image, value, description})}>
                <Image source={image} style={styles.gamesImage} />
                <Text style={styles.gamesText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

    const ItemDestaques = ( {title, image, value, description}) => (
    
        <View style={styles.gamesList} >
            <TouchableOpacity onPress={() => props.navigation.navigate("Games", {title, image, value, description})}>
                <Image source={image} style={styles.gamesImageDestaques} />
                <Text style={styles.gamesTextDestaques}>{title}</Text>
            </TouchableOpacity>
        </View>
    );


    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500}>
                <View style={styles.form}>
                    <TouchableOpacity onPress={salvarDados}>
                        <Icon style={styles.icon2} name={"shopping-cart"} color={"#FFF"} size={20}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
                        <Image source={icon} style={styles.icon} resizeMode="contain"/>
                        <Text style={styles.username}>{username}</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={styles.buttonDollar}
                onPress={() => navigation.navigate('Creditos')}>
                    <Text style={styles.textDollar}>{money}$</Text>
                </TouchableOpacity>
            </Animatable.View>


            <Animatable.View animation="fadeInUp" delay={1000} style={styles.gamesForm}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    directionalLockEnabled={true}
                    alwaysBounceVertical={false}>

                    <Text style ={styles.gamesTitle}>{titleDestaques}</Text>
                    
                    <FlatList
                        contentContainerStyle={{alignSelf: 'flex-start'}}
                        horizontal
                        pagingEnabled
                        data={gamesDestaques}
                        renderItem={({item}) => <ItemDestaques title={item.title} image={item.image} value={item.value} description={item.description}/>}
                        keyExtractor={item => item.id}
                    />


                    <Text style ={styles.gamesTitle}>{titleGamesTerror}</Text>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{alignSelf: 'flex-start'}}
                        horizontal
                        pagingEnabled
                        data={gamesTerror}
                        renderItem={({item}) => <Item title={item.title} image={item.image} value={item.value} description={item.description}/>}
                        keyExtractor={item => item.id}
                    />
                   

                    <Text style={styles.gamesTitle}>{titleGamesAcao}</Text>
                    
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{alignSelf: 'flex-start'}}
                        horizontal
                        pagingEnabled
                        data={gamesAcao}
                        renderItem={({item}) => <Item title={item.title} image={item.image} value={item.value} description={item.description}
                        keyExtractor={item => item.id}/>}
                    />

                    <Text style={styles.gamesTitle}>{titleGamesRpg}</Text>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{alignSelf: 'flex-start'}}
                        horizontal
                        pagingEnabled
                        data={gamesRpg}
                        renderItem={({item}) => <Item title={item.title} image={item.image} value={item.value} description={item.description}
                        keyExtractor={item => item.id}/>}
                    />

                    <Text style={styles.gamesTitle}>{titleGamesCorrida}</Text>

                    <FlatList
                        contentContainerStyle={{alignSelf: 'flex-start'}}
                        horizontal
                        pagingEnabled
                        data={gamesCorrida}
                        renderItem={({item}) => <Item title={item.title} image={item.image} value={item.value} description={item.description}
                        keyExtractor={item => item.id}/>}
                    />

        
                </ScrollView>
                   
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000",   
        
    },
    containerScroll:{
        flexDirection: "row",
        alignItems: "center",
    },
    form:{
        flexDirection: "column",
        
    },
    icon:{
        width: 30,
        height: 30,
        position: "absolute",
        marginTop: 15,
        marginLeft: 7,
        borderRadius: 20,
    },
    username:{
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        position: "absolute",
        marginTop: 18,
        marginLeft: 40
    },
    icon2:{
        position: "absolute",
        marginTop: 20,
        paddingRight: 70,
        borderRadius: 20,
        alignSelf: "flex-end",
    },
    
    buttonDollar:{
        alignSelf: "flex-end"
        
    },
    textDollar:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 3,
        marginTop: 18,
        marginRight: 10
        
        
    },
    textValue:{
        fontSize: 18,
        color: "#99B7F9",
        fontWeight: "bold",
        position: "absolute",
        alignSelf: "flex-end",
        marginTop:  20,
        
    },

    gamesForm:{
        marginTop: 20,
        flex: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        
    },

    gamesList:{
        marginBottom: 10,
        marginHorizontal: 15,
        alignSelf: "center",
       
    },
    gamesText:{
        color: "#131A40",
        marginTop: 15,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 30,
        alignSelf: "center",
      
    },
    gamesTitle:{
        color: "#131A40",
        marginTop: 15,
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 30,
        alignSelf: "center",
    },
    gamesImage:{
        width: 140,
        height: 140,
        borderRadius: 10,
        alignSelf: "center", 
        
    },
    gamesImageDestaques:{
        width: 300,
        height: 300,
        borderRadius: 8,
        alignSelf: "center", 
        
    },
    gamesTextDestaques:{
        color: "#131A40",
        marginTop: 15,
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 30,
        alignSelf: "center",
        
    }

})

export default Principal;