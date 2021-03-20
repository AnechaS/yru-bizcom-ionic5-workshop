import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tech } from '../tech.model';
import { techs } from '../mock-techs';

@Component({
  selector: 'app-tech-detail',
  templateUrl: './tech-detail.page.html',
  styleUrls: ['./tech-detail.page.scss'],
})
export class TechDetailPage implements OnInit {
  tech: Tech;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // นำข้อมูล state มาใช้
    const state = this.router.getCurrentNavigation().extras.state;

    // ถ้ามีข้อมูล state ให้ดำการเซ็ต property tech และถ้าไม่มีให้ไปดึงข้อมูลมา
    if (typeof state !== 'undefined') {
      this.tech = state as Tech;
      return;
    }

    // นำข้อมูล parameter 'id' มาใช้
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.tech = techs.find((o) => o.id = id);

    // ถ้า id นี้ไม่พบข้อมูล ให้ส่งกลับไปยังหน้า techs
    if (typeof this.tech === 'undefined') {
      this.router.navigate(['techs']);
    }
  }
}
