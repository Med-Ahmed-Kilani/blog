import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';


const Home = () => {

    const blogPosts = useContext(BlogContext)

    return<>
        <Text>Hello there !</Text>
        <FlatList
            data={blogPosts}
            keyExtractor={(value)=>value.name}
            renderItem={({item})=>{
                return<>
                    <Text>{item.name}</Text>
                    <Text>{item.age}</Text>
                </>
            }}
        />
    </>
}

const styles = StyleSheet.create({

})

export default Home