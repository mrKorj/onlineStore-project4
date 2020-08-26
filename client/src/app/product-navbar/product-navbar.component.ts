import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.css']
})
export class ProductNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.Sidenav.init(document.querySelector('#mobile-product-category'), {edge: 'left'});
  }

}
