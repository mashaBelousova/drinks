import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Drink, DrinkService } from "../../services/drinks.service";

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {
  title = 'Drinks before Eating!';
  drinks: Drink[] = [];
  isLoading = true;
  form: FormGroup = new FormGroup({});

  constructor(private drinkService: DrinkService, private fb: FormBuilder) { }

  ngOnInit() {
    this.drinkService.list().subscribe(drinks => {
      this.drinks = drinks;

      drinks.forEach(drink => {
        this.form.addControl(drink.id, this.fb.control({value: 0, disabled: true}));
      })
      this.isLoading = false;
    });
  }
}
