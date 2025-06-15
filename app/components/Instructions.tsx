import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface InstructionsProps {
  directions: string[]
}

export function Instructions({ directions }: InstructionsProps) {
  return (
    <View style={styles.recipeInfo}>
      <Text style={styles.title}>Instruções</Text>
      {directions.map((instruction, index) => (
        <View style={styles.instructionsText} key={index}>  
          <Text>{index + 1}. {instruction}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  recipeInfo: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  instructionsText: {
    marginBottom: 10,
    fontSize: 14,
  },
}) 