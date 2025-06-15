import axios from 'axios'
import { IRecipe } from '../interfaces/IRecipes'

export async function getRecipesFromGit(): Promise<IRecipe[]> {
  try {
    // const response = await axios.get(
    //   'https://raw.githubusercontent.com/lucasbrumm/recipes/main/recipes.json'
    // )
    const response = await axios.get(
      'https://raw.githubusercontent.com/lucasbrumm/recipes/refs/heads/main/recipesTeste.json'
    )
    return response.data.recipes as IRecipe[]
  } catch (error) {
    console.error(error)
    throw new Error('Falha ao buscar receitas')
  }
}
