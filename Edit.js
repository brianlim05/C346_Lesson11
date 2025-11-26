import React, {useState} from 'react';
import {Text, TextInput, Button, View, Alert} from 'react-native';
import {datasource} from './Data.js';
const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);
    return(
        <View>
            <Text>Letter: </Text>
            <TextInput value={letter}
                       maxLength={1}
                       style={{borderWidth: 1}}
                       onChangeText={ (text) => setLetter(text) }/>
            <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1, marginLeft: 5, marginRight: 10}}>
                    <Button title="SAVE"
                            onPress={() => {
                                let indexnum=1;
                                if (route.params.type == 'Vowels'){
                                    indexnum=0;
                                }
                                datasource[indexnum].data[route.params.index].key=letter;
                                navigation.navigate("Home");
                            }}/>
                </View>
                <View style={{flex: 1, marginRight: 5, marginLeft: 10}}>
                    <Button title="DELETE"
                            onPress={()=>{
                                let indexnum=1;
                                if (route.params.type == 'Vowels'){
                                    indexnum=0;
                                }
                                Alert.alert("Are you sure?", '',
                                    [{text: 'Yes', onPress:()=>{
                                            datasource[indexnum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home");
                                        }},
                                        {text: 'No'}])
                            }}/>
                </View>
            </View>
        </View>
        );
};
export default Edit;