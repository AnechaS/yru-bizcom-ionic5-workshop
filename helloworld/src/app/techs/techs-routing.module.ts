import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechsPage } from './techs.page';
import { TechDetailPage } from './tech-detail/tech-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TechsPage,
  },
  {
    path: ':id',
    component: TechDetailPage
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechsPageRoutingModule {}
