import { Component, OnInit } from '@angular/core';
import { NaujienosService } from '../naujienos.service';

@Component({
  selector: 'app-naujienos-vienas',
  templateUrl: './naujienos-vienas.page.html',
  styleUrls: ['./naujienos-vienas.page.scss'],
})
export class NaujienosVienasPage implements OnInit {
straipsnis;

  constructor(private naujienos: NaujienosService) { }

  ngOnInit() {

this.straipsnis = this.naujienos.skaitomaNaujiena;


  }

}
