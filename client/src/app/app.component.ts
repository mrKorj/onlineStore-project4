import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    M.toast({html: 'hello', displayLength: 5000, classes: 'rounded'});
  }
}
