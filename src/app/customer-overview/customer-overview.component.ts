import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer/customer.service";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NameFilterPipe} from "../pipe/name-filter.pipe";

@Component({
  selector: 'app-customer-overview',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, NameFilterPipe],
  templateUrl: './customer-overview.component.html',
  styleUrl: './customer-overview.component.css'
})
export class CustomerOverviewComponent implements OnInit {
  customers$: Observable<Customer[]> | undefined;
  public filter: string = '';

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customers$ = this.getCustomers();
  }

  getCustomers(): Observable<Customer[]> {
    return this.customerService.getCustomers();
  }
}
