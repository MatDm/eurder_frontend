import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemDetailsComponent} from './details/item-details.component';
import {CreateUpdateItemComponent} from "./create-update-item/create-update-item.component";
import {CustomerOverviewComponent} from "./customer-overview/customer-overview.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'create-update-item/:id',
    // component: ItemDetailsComponent,
    component: CreateUpdateItemComponent,
    title: 'Item update',
  },
  {
    path: 'create-update-item',
    component: CreateUpdateItemComponent,
    title: 'Item creation',
  },
  {
    path: 'details/:id',
    component: ItemDetailsComponent,
    title: 'Item creation',
  },
  {
    path: 'customer-overview',
    component: CustomerOverviewComponent,
    title: 'Customer overview',
  },
  {
    path: 'create-update-customer',
    component: CustomerOverviewComponent,
    title: 'Customer overview',
  },
  {
    path: 'create-update-customer/:id',
    component: CustomerOverviewComponent,
    title: 'Customer overview',
  }
];
export default routeConfig;
