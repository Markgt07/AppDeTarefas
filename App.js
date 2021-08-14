import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect,useRef,useCallback} from 'react';
import { Animated,StyleSheet, Text, View,Image, TextInput, TouchableOpacity,SafeAreaView,FlatList,Modal,AsyncStorage} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styleExterno from './Styles.js';
import { auth } from './firebase.js';

import{Ionicons} from '@expo/vector-icons'
import TaskList from './src/components/TaskList/index.js';
import * as Animatable from 'react-native-animatable'

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {

  //const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  const [user,setUser] = useState('');


  const fadeAnim = useRef(new Animated.Value(0)).current;


  useEffect(()=>{
    auth.onAuthStateChanged(function(val){
      if (val != null){
        setUser(val.email);
      }
      })
  },[])


  const login = () => {
    auth.signInWithEmailAndPassword(email,senha).then(function(val){
        setUser(val.email);
    }).catch(function(error){
      alert(error.message);
    })
    // alert(nome);
    // alert(email);
    // alert(senha);
    // fazer chama no back-end para cadastro
    
  }
  const logout = ()=>{
    auth.signOut();
    setUser('');
  }

  useEffect(()=>{

      Animated.timing(fadeAnim,{
        toValue:1,
        duration:5000,
      }).start();
      
  },[])

  const [task,setTask] = useState([]);
  const [open,setOpen]= useState(false);
  const [input,setInput] = useState('');
  
  //salvando todas as tarefas ao iniciar o app
  useEffect(()=>{
    async function loadTasks(){
      const taskStorage = await AsyncStorage.getItem('@task');

      if(taskStorage){
        setTask(JSON.parse(taskStorage));
      }
    }

    loadTasks();
  },[]);


  //salvando caso tarefa seja alterada
  useEffect(()=>{

    async function saveTasks(){
     await  AsyncStorage.setItem('@task', JSON.stringify(task));
    }
    saveTasks();

  },[task]);
  function handleAdd(){
    if(input === '') return;

    const data = {
      key : input,
      task : input
    };
    setTask([...task,data]);
    setOpen(false);
    setInput('');
    alert('Produto cadastrado')

  }
  const handleDelete = useCallback((data)=> {
    const find =task.filter(r => r.key !== data.key);
    setTask(find);

  })


  if(!user){
  return (
    <View style={styleExterno.containerApp}>   
      <StatusBar hidden/>
      
      <Animated.View
      style={[
        
        {
          alignItems:'center',
          justifyContent:'center',
          width:'100%',
          opacity: fadeAnim
        },
      ]}>
        
      <Image style={styleExterno.Image} source={require('./assets/carrinho.jpg')}/>

     
      <TextInput placeholder="Seu e-mail..." style={styleExterno.textInput} onChangeText={text=>setEmail(text)}/>
      <TextInput secureTextEntry={true} placeholder="Seu senha..." style={styleExterno.textInput} onChangeText={text=>setSenha(text)}/>

    <TouchableOpacity style={styleExterno.button} onPress={()=>login()}>
      <Text style={{color:'white', textAlign:'center'}}>Login</Text>
    </TouchableOpacity>

    </Animated.View>

    </View>
  );
    }else{

      return (
        <SafeAreaView style={styleExterno.cont}>
            <StatusBar hidden/>

            <View style={styleExterno.content}>
              <Text style={styleExterno.title}>Cadastro de Produtos</Text>
            </View>

          <FlatList
            marginHorizontal={10}
            showsHorizontalScrollIndicator={false}
            data={task}
            keyExtractor={ (item) => String(item.key)}
            renderItem={ ({item}) => <TaskList data={item} handleDelete={handleDelete} />}
          />

          <Modal animationType="slide" transparent={false} visible={open}>
            <SafeAreaView style={styleExterno.modal}>

              <View style={styleExterno.modalHeader}>
                <TouchableOpacity onPress={()=> setOpen(false)}> 
                  <Ionicons style={{marginLeft:5,marginRight:5}} name="md-arrow-back" size={40} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styleExterno.modalTitle}>Novo produto</Text>
              </View>

              <Animatable.View style={styleExterno.modalBody} animation="fadeInUp" useNativeDriver>
                <TextInput
                multiline={true}
                placeholderTextColor="#747474"
                autoCorrect={false}
                placeholder="Nome do produto"
                style={styleExterno.input}
                value={input}
                onChangeText={(texto) => setInput(texto)}
                />

              </Animatable.View>
              <Animatable.View style={styleExterno.modalBody} animation="fadeInUp" useNativeDriver>
                <TextInput
                multiline={true}
                placeholderTextColor="#747474"
                autoCorrect={false}
                placeholder="Tipo de produto"
                style={styleExterno.input}
                
                />
              </Animatable.View>
              <Animatable.View style={styleExterno.modalBody} animation="fadeInUp" useNativeDriver>
                <TextInput
                multiline={true}
                placeholderTextColor="#747474"
                autoCorrect={false}
                placeholder="Valor do produto"
                style={styleExterno.input}
                
                
                />

                <TouchableOpacity style={styleExterno.handleAdd} onPress = {handleAdd}>
                  <Text style={styleExterno.handleAddText}>Cadastrar</Text>
                </TouchableOpacity>
              </Animatable.View>
            </SafeAreaView>
          </Modal>


          <AnimatedBtn 
              style={styleExterno.fab}
              useNativeDriver
              animation="bounceInUp"
              duration={2000}
              onPress={()=> setOpen(true)}
          >
              <Ionicons name="ios-add" size={35} color='#fff' />
          </AnimatedBtn>

          <AnimatedBtn 
              style={styleExterno.fab2} 
              useNativeDriver
              animation="bounceInUp"
              duration={2000}
              onPress={()=>logout()}
            >
              <Text style={{color:'white', textAlign:'center'}}>LOGOUT</Text>
          </AnimatedBtn>

        </SafeAreaView>
           
          
          

         
      );

    }
}

