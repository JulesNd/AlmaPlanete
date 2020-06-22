import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#zebraFirst").mouseover(function(){this.src="https://drive.google.com/uc?export=view&id=1m_K9S5qMt207mIb5rR5fY_fQxcQ4GDwA"}).mouseout(function(){this.src="https://drive.google.com/uc?export=view&id=1QfdPtPJLEwVn69PwnrZ6j4crO1fimqWR"});
  }

}
