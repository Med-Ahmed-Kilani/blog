import React, { useContext } from 'react'
import { Text, StyleSheet, FlatList, Button, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';


const Home = () => {

    const {state, addBlogPost, deleteBlogPost} = useContext(Context)


    return<>
        <Text>Hello there !</Text>
        <Button title='Add Blog' onPress={addBlogPost}/>
        <FlatList
            data={state}
            keyExtractor={(state)=>state.id.toString()}
            renderItem={({item})=>{
                return <View style={styles.blogCard}>
                    <Text style={styles.Blog} >{item.title}  {item.id}</Text>
                    <TouchableOpacity
                        onPress={()=>deleteBlogPost(item.id)}
                    >
                        <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            }}
        />
    </>
}

const styles = StyleSheet.create({
    blogCard:{
        flexDirection:'row',
        height:60,
        width:'96%',
        flex:1,
        marginHorizontal:'2%',
        marginVertical:3,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
    },
    Blog:{
        fontSize:30,
        flex:1
    }
})

export default Home