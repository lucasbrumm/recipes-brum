export interface IRecipe {
  id: number
  name: string
  ingredients: IIngredient[]
  directions: string[]
}

interface IIngredient {
  name: string
  quantity: string
  unit: string
  units?: IUnit[]
}

interface IUnit {
  unit: string
  quantity: string
}
