import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {addProduct} from '../store/product/product.actions';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent implements OnInit {

  allCategories = ['Milk & Eggs', 'Vegetables & Fruits', 'Meat & Fish', 'Wine & Drink', 'Sweets & Kandy'];

  constructor(private fb: FormBuilder, private productStore: Store<IState>) {
  }

  addProductForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    category: this.fb.control('', [Validators.required]),
    price: this.fb.control('', [Validators.required]),
    picUrl: this.fb.control('', [Validators.required])
  });

  changeCategory(e): void {
    this.category.setValue(e.target.value);
  }

  get category(): any {
    return this.addProductForm.get('category');
  }

  addProduct(): void {
    const {name, category, price, picUrl} = this.addProductForm.value;
    this.productStore.dispatch(addProduct({product: {name, category, price, picUrl}}));
  }

  ngOnInit(): void {
  }

}
