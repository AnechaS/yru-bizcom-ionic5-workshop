import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { techs } from './mock-techs';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.page.html',
  styleUrls: ['./techs.page.scss'],
})
export class TechsPage implements OnInit {
  techs = techs;

  constructor(private router: Router) { }

  ngOnInit() {}

  showDetail(index) {
    const tech = this.techs[index];
    this.router.navigate(['/techs', tech.id], { state: tech })
  }
}
