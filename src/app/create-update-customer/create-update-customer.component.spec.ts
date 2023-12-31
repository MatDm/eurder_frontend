import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateCustomerComponent } from './create-update-customer.component';

describe('CreateUpdateCustomerComponent', () => {
  let component: CreateUpdateCustomerComponent;
  let fixture: ComponentFixture<CreateUpdateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
