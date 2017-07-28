import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Hamburger', 
      'The best one on Lithuanian country. Taste it!!', 
      'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
      [
        new Ingredient('bread', 4),
        new Ingredient('meat', 2),
        new Ingredient ('souce', 2)
      ]),
    new Recipe(
      'A Salad', 
      'fresh, tasty, green!!!', 
      'http://www.simplyrecipes.com/wp-content/uploads/2016/07/2016-08-12-BLT-Salad-3-600x400.jpg',
      [
        new Ingredient('salad', 1),
        new Ingredient('tomato', 2),
        new Ingredient('cucumber', 1),
        new Ingredient('oil', 1)
      ])
  ]; 
  
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}