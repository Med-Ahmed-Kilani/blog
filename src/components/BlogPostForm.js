import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

const blogPostForm = ({onSubmit, initialValues}) => {

    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return<View style={styles.card}>
        <Text>Blog Post Title:</Text>
        <TextInput style={styles.input} value={title} placeholder='Place your Title here' onChangeText={(value)=>setTitle(value)} />
        <Text>Blog Post Content:</Text>
        <TextInput style={styles.input} value={content} placeholder='Place your Content here' onChangeText={(value)=>setContent(value)}/>
        <Button title='Save' onPress={()=>onSubmit(title, content)} />
    </View>
}

blogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    card:{
        width:'90%',
        alignSelf:'center',
        padding:10,
        borderWidth:1,
        marginTop:30
    },
    input:{
        borderWidth:0.5,
        justifyContent:'center',
        paddingVertical:0,
        paddingHorizontal:4,
        marginVertical:3
    }
})

export default blogPostForm