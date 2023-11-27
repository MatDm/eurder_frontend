import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {CreateItemComponent} from "./create-item/create-item.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Item details',
  },
  {
    path: 'create-item',
    component: CreateItemComponent,
    title: 'Item creation',
  },
];
export default routeConfig;
