import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ItemService} from "../service/item/item.service";
import {Item} from "../model/item";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {CharacterCounterPipe} from "../pipe/character-counter.pipe";

@Component({
  selector: 'app-create-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CharacterCounterPipe],
  templateUrl: './create-update-item.component.html',
  styleUrl: './create-update-item.component.css'
})
export class CreateUpdateItemComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  createItemForm!: FormGroup;
  item: Item | undefined;
  itemId: number;
  constructor(private itemService: ItemService, private router: Router, private _activatedRoute: ActivatedRoute) {
    this.itemId = this._activatedRoute.snapshot.params['id'];
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.createItemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      stockAmount: new FormControl('', [Validators.required, Validators.min(1)])
    });
    if (this.itemId){
      let subscription1$ = this.itemService.getItem(this.itemId).subscribe(
        (item) =>this.item = item
      );
      this.subscription.add(subscription1$)
    }
  }

  get name() {
    return this.createItemForm.get('name');
  }

  get description() {
    return this.createItemForm.get('description');
  }

  get price() {
    return this.createItemForm.get('price');
  }

  get stockAmount() {
    return this.createItemForm.get('stockAmount');
  }

  onCreate() {
    let subscription2$= this.itemService.createItem(this.createItemForm.value as Item).subscribe({
      next: (item) => {
        this.router.navigateByUrl(`/details/${item.id}`);
        this.createItemForm.patchValue(item)
        console.log(item)
      },
      error: (error) => alert(`Error creating item. Error message : ${error}`),
      complete: () => alert('creation complete')
    });
    this.subscription.add(subscription2$)
    this.createItemForm.reset();
  }

  onUpdate() {
    let itemToUpdate = {
      ...this.createItemForm.value as Item,
      id: this.itemId
    };
    let subscription3$ = this.itemService.updateItem(itemToUpdate).subscribe({
      next: (item) => {
        console.log(`Item wih id ${item.id} and name ${item.name} is updated.`);
        this.router.navigateByUrl(`/details/${item.id}`);
      },
      error: (error) => alert(`Error updating item. Error message : ${error}`),
      complete: () => alert('update complete')
    });
    this.subscription.add(subscription3$)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
