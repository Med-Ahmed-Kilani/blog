import React, { useContext, useEffect } from 'react'
import { Text, StyleSheet, FlatList, Button, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';

const Home = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create') }>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            ),
        });
    });

    useEffect(() => {
        getBlogPosts()

        const listener = navigation.addListener('focus', ()=>{
            getBlogPosts()
        })

        return () => {
            listener.remove()
        }
    }, [])

    const {state, deleteBlogPost, getBlogPosts } = useContext(Context)

    return<>
        <FlatList
            data={state}
            keyExtractor={(state)=>state.id.toString()}
            renderItem={({item})=>{
                return <>
                    <TouchableOpacity
                        style={styles.blogCard}
                        onPress={()=>navigation.navigate('Details', {id: item.id})}
                    >
                        <Text style={styles.Blog} >{item.title}  {item.id}</Text>
                        <TouchableOpacity
                            onPress={()=>deleteBlogPost(item.id)}
                        >
                            <AntDesign style={styles.icon} name="delete" size={24} color="black" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    
                </>
            }}
        />
    </>
}


const styles = StyleSheet.create({
    blogCard:{
        flexDirection:'row',
        height:60,
        width:'96%',
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
    },
    icon: {
        padding:15
    }
})

export default Home