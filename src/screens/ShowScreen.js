import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Context } from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons'; 


const ShowScreen = ({ route, navigation }) => {

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
                <TouchableOpacity
                    onPress={()=>navigation.navigate('edit',{id:route.params.id})}
                >
                    <AntDesign style={styles.icon} name="edit" size={24} color="black" />
                </TouchableOpacity>
            )
        })
    })


    const { state } = useContext(Context)    
    const blogPost = state.find((blogPost)=> blogPost.id === route.params.id)
    
    return <View style={styles.card}>
        <View style={styles.titleCard}>
            <Text style={{flex:1, justifyContent:'center', fontSize:18}}> Title: {blogPost.title}</Text>
        </View>
        <Text style={{fontSize:25, alignSelf:'flex-start'}}>Content:  </Text>
        <Text style={styles.content}> {blogPost.content} </Text>
    </View>
}

const styles = StyleSheet.create({
    card:{
        padding:10,
        marginTop:30,
        marginHorizontal:'5%',
        width:'90%',
        height:'40%',
        borderWidth:1,
        alignItems:'center',
    },
    titleCard:{
        flexDirection:'row',
        width:'96%',
        height:40,
        borderWidth:1,
        alignItems:'center',
    },
    content:{
        alignSelf:'flex-start',
        flex:1,
    },
    icon:{
        padding:6
    }
})

export default ShowScreen