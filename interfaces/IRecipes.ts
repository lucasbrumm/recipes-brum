export interface IRecipe {
  id: number
  name: string
  ingredients: IIngredient[]
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
