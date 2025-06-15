import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useLocalSearchParams, Stack } from 'expo-router'
import { IRecipe } from '../../interfaces/IRecipe'
import { backgroundColor } from '../../src/colors/color'

export default function DetailsScreen() {
  const { recipe } = useLocalSearchParams()
  const recipeData: IRecipe = recipe ? JSON.parse(recipe as string) : null

  return (
    <>
      <Stack.Screen 
        options={{
          title: recipeData?.name
        }} 
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.recipeInfo}>
            <Text style={styles.title}>Nome da receita</Text>   
            <Text style={styles.text}>{recipeData?.name}</Text>     
          </View>
          <View style={styles.recipeInfo}>
            <Text style={styles.title}>Ingredientes</Text>
            {recipeData.ingredients.map((item, index) => (
              <View style={styles.ingredient} key={index}>
                <Text>{item.name} - </Text>
                {item.units && item.units.length > 0 ? (
                  item.units.map((unit, index) => (
                    <Text key={index}>{`${unit.quantity}${unit.unit} ${index === (item.units?.length ?? 0) - 1 ? '' : 'ou '}`}</Text>
                  ))
                ) : (
                  <>
                    <Text>{item.quantity}</Text>
                    <Text>{item.unit}</Text>
                  </>
                )}
              </View>
            ))}
          </View>
          <View style={styles.recipeInfo}>
            <Text style={styles.title}>Instruções</Text>
            {recipeData.directions.map((instruction, index) => (
              <View style={styles.instructionsText} key={index}>  
                <Text>{index + 1}. {instruction}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  content: {
    padding: 20,
  },
  recipeInfo: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
  },
  ingredient: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ingredientText: {
    fontSize: 14,
  },
  instructions: {
    fontSize: 14,
  },
  instructionsText: {
    marginBottom: 10,
    fontSize: 14,
  },
}) 