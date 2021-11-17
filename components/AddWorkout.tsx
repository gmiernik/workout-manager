import React, { useState } from 'react';
import { Alert, Button, ButtonProps, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default () => {

    const [series, setSeries] = useState<Array<string>>([]);
    const [excersiseType, setExcersiseType] = useState();
    const [repetition, setRepetition] = useState<string>('');

    return (
        <View>
            <Text>Rodzaj ćwiczenia</Text>
            <Picker selectedValue={excersiseType} onValueChange={(itemValue, itemIndex) => setExcersiseType(itemValue)}>
                <Picker.Item label="Przysiady" value="przysiady" />
                <Picker.Item label="Pompki" value="pompki" />
                <Picker.Item label="Brzószki" value="brzuszki" />
            </Picker>
            <Text>Ilość powtórzeń</Text>
            <TextInput keyboardType={'numeric'} value={repetition} 
                onChangeText={(data) => { console.log("Repetition has been updated."); setRepetition(data)}} />
            <Button title="Dodaj" onPress={addRepetition} />
        </View>
    );

    function addRepetition() {
        console.log("Add repetition has been invoked.");
        if (!repetition.trim()) {
            alert('Proszę wprowadzić ilość powtórzeń');
            return;
        }
        console.debug(repetition);
        setSeries([
            repetition
        ]);
        console.debug(series);
        console.debug(repetition);
    }
}