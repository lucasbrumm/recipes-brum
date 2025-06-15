import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IUnit {
  unit: string
  quantity: string
}

interface IIngredient {
  name: string
  quantity: string
  unit: string
  units?: IUnit[]
}

interface IngredientsProps {
  ingredients: IIngredient[]
}

export function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <View style={styles.recipeInfo}>
      <Text style={styles.title}>Ingredientes</Text>
      {ingredients.map((item, index) => (
        <View style={styles.ingredient} key={index}>
          <Text>{item.name} - </Text>
          {item.units && item.units.length > 0 ? (
            item.units.map((unit: IUnit, index: number) => (
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
  ingredient: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
}) 