import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useLocalSearchParams, Stack } from 'expo-router'
import { IRecipe } from '../../interfaces/IRecipe'
import { backgroundColor } from '../../src/colors/color'
import { Ingredients } from '../components/Ingredients'
import { Instructions } from '../components/Instructions'

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
          <Ingredients ingredients={recipeData?.ingredients || []} />
          <Instructions directions={recipeData?.directions || []} />
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
}) 