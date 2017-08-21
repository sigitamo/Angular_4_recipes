import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service'

@Injectable()
export class DataStorageService {

constructor(private http: Http,     
            private recipeService: RecipeService) {} 

storeRecipes() {
    return this.http.put(
        'https://ng-recipe-http.firebaseio.com/recipes.json',
        this.recipeService.getRecipes());
}

// fetchRecipes() {
//     return this.http.get('https://ng-recipe-http.firebaseio.com/recipes.json',
//     this.recipeService.getRecipes());
// }

}