import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { backgroundColor } from '../src/colors/color'
import { useEffect, useState } from 'react'
import { getRecipesFromGit } from '../api/recipes'
import { IRecipe } from '../interfaces/IRecipe'
import { router } from 'expo-router'

export default function Recipes() {
  const [recipes, setRecipes] = useState<IRecipe[]>([])

  useEffect(() => {
    getRecipes()
  }, [])

  async function getRecipes() {
    const teste = await getRecipesFromGit()
    setRecipes(teste)
    return teste
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%', padding: 10 }}
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              paddingVertical: 10,
              paddingHorizontal: 5,
              borderWidth: 1,
              marginBottom: 5,
            }}
            onPress={() => router.push({
              pathname: 'details/[id]',
              params: { id: item.id, recipe: JSON.stringify(item) }
            })}
          >
            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
