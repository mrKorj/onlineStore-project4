import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.Sidenav.init(document.querySelector('#dropdown'), {edge: 'left'});
    M.Sidenav.init(document.querySelector('#slide-out'), {edge: 'right'});
  }

}
