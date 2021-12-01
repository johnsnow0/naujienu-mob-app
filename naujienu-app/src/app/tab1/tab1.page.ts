import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NaujienosService } from '../naujienos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  data: any;

  constructor(private naujienos: NaujienosService, private router: Router) {}



  ngOnInit() {
    this.naujienos.getData().subscribe(data => {console.log(data); this.data = data});
  }

  skaitytiStraipsni(straipsnis) {
this.naujienos.skaitomaNaujiena=straipsnis;
this.router.navigate(['/naujienos-vienas']);
  }
}
