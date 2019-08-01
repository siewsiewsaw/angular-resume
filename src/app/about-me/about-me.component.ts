import { Component, OnInit } from '@angular/core';
import { truncate } from 'fs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  navItemTitle = "About Me"
  // add a new boolean variable
  isStudent = false
  // 1. adding a css class (color, background-color)
  // 2. add a boolean property in ts file
  // 3. check that boolean property in html to apply css

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isStudent = true
  }

  toggleClick() {
    this.isStudent = !this.isStudent
  } 
}
