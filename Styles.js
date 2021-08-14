import React from 'react';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
   
    containerApp: {
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor: '#c2145a',
        alignItems: 'center',
        justifyContent: 'center',
        padding:30,
      },
      container2: {
        flex: 1,
        marginTop:700,
        marginLeft:250,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding:30,
      },

      Image: {
        marginTop:90,
        marginBottom:90,
        width:150,
        height:150
        
      },

      textInput:{
          width:'100%',
          height:40,
          backgroundColor:'white',
          borderRadius:20,
          paddingLeft:20,
          marginBottom:10
      },
      button:{
        width:'80%',
        height:40,
        backgroundColor:'#eb3483',
        borderRadius:20,
        justifyContent: 'center',
        paddingLeft:30,

      },
      cont:{
        flex:1,
        backgroundColor: '#c2145a'
      },
      title:{
          marginTop:10,
          paddingBottom:10,
          fontSize: 25,
          textAlign:'center',
          color:'white'
      },
      fab:{
          position: 'absolute',
          width:60,
          height:60,
          backgroundColor: "#a50fdb",
          alignItems:'center',
          justifyContent:'center',
          borderRadius:30,
          right:25,
          bottom:25,
          elevation:2,
          zIndex:9,
          shadowColor:'#000',
          shadowOpacity:0.2,
          shadowOffset:{
              width:1,
              height:3,
          }

      },
      fab2:{
        position: 'absolute',
        width:60,
        height:60,
        backgroundColor: "#a50fdb",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        right:25,
        bottom:100,
        elevation:2,
        zIndex:9,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:1,
            height:3,
        }

    },
    modal:{
        flex:1,
        backgroundColor: '#c2145a'
    },
    modalHeader:{
        marginLeft:10,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'

    },
    modalTitle:{
        marginLeft:15,
        fontSize:23,
        color:'#FFF'

    },
    modalBody:{
        marginTop:15,
    },
    input:{
        fontSize:15,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        backgroundColor:'#FFF',
        padding:9,
        height:85,
        textAlignVertical:'top',
        color:'#000',
        borderRadius:5,
    },
    handleAdd:{
        backgroundColor:'#FFF',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginRight:10,
        height:40,
        borderRadius:5,
    },
    handleAddText:{
        fontSize:15,
    }




    })