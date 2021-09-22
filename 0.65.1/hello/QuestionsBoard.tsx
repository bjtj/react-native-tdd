import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

const QuestionBoard = (props) => {
    const { questions, onSubmit } = props;

    const [ data, setData ] = useState();

    return (
	<>
	    <View style={styles.container}>
		{
		    questions.map((q, index) => {
			return (
			    <View key={q}>
				<Text>{q}</Text>
				<TextInput
				    accessibilityLabel="answer input"
				    onChangeText={text => {
					setData(state => ({
					    ...state,
					    [index + 1]: { q, a: text },
					}));
				    }}
				/>
			    </View>
			);
		    })
		}
		<TouchableOpacity onPress={() => {onSubmit(data)}}>
		    <Text>Submit</Text>
		</TouchableOpacity>
	    </View>
	</>
    )
};

const styles = StyleSheet.create({
    container: {
	flex: 1,
    }
})

export default QuestionBoard;
