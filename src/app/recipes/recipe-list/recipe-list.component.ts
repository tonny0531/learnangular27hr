import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modle';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV42s2pQG8KOaXZ4kD4z-A9DOa7pUaN1cZiK_IdG2bM7ir1tTf'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV42s2pQG8KOaXZ4kD4z-A9DOa7pUaN1cZiK_IdG2bM7ir1tTf')
  ];
  constructor() { }

  ngOnInit() {
  }

}
