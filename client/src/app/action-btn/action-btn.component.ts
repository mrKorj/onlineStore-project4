import {Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.css']
})
export class ActionBtnComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    M.FloatingActionButton.init(document.getElementById('action-btn'));
  }

}
