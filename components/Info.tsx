import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, ButtonProps, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Info() {
    const [value, setValue] = useState("StartValue")
  
    return (
      <View style={styles2.container}>
        <Text>Testowa wartosc:</Text>
        <TextInput value={value} onChangeText={setValue} />
        <Button title="Zapisz" onPress={() => console.info(value)} />
      </View>
    );
  }
  
  const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#999',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  