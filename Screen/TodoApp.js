import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appbar, Button, TextInput } from 'react-native-paper'
import { db } from '../Database/firebaseConfig'
import { collection, addDoc, updateDoc, onSnapshot, doc } from "firebase/firestore";
import { listAll } from 'firebase/storage';
import { FlatList } from 'react-native';
const TodoApp = () => {
    const [newTodo, setNewTodo] = React.useState('');
    const [toDoList, setToDoList] = useState([]);
    const todos = collection(db, "ToDos");

    const AddNewTodo = () => {
        addDoc(todos, {
            name: newTodo,
            isDone: false
        }).then(() => alert("Them thanh cong"), setNewTodo(""))
            .catch((e) => alert(e))
    }

    useEffect(() => {
        onSnapshot(todos, (

            todolist => {
                var result = []
                todolist.forEach(
                    todo => {
                        const { name, isDone } = todo.data()
                        result.push(
                            {
                                id: todo.id,
                                name: name,
                                isDone: isDone
                            }
                        )
                    }
                )
                setToDoList(result)
            }
        ))


    }, [])
    const renderItem = ({ item }) => {
        const { id, name, isDone } = item
        return (
            <Button
                icon={isDone ? "star" : "home"}
                onPress={() => UpdateTodo(item)}
            >
                {name}
            </Button>
        );
    }

    const UpdateTodo = ({ id, isDone }) => {
        const todoid = doc(db, "ToDos", id);
        updateDoc(todoid, {
            isDone: !isDone
        })
        console.log(id)
    }

    return (
        <View style={styles.container}>
            <Appbar style={{ backgroundColor: "blue" }}>
                <Appbar.Content title="Todo App" style={{ alignItems: "center" }} color='white' />
            </Appbar>
            <Text>Todo List</Text>
            <FlatList
                data={toDoList}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />

            <TextInput
                placeholder='new todo'
                value={newTodo}
                onChangeText={(text) => setNewTodo(text)}
            />
            <Button mode='contained' name onPress={() => AddNewTodo()} >
                Add Todo
            </Button>
        </View>
    )
}

export default TodoApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

})