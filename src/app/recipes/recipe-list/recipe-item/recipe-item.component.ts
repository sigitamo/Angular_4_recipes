import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // if we need to use cmponent outside, use decorator Iput. This decorator alouds to get componnet from outside
  @Input() recipe: Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
     }
  onSelected() {
   this.recipeService.recipeSelected.emit(this.recipe);
  }
    
 }
