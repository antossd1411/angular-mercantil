import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormComponent } from './payment-form.component';
import { HttpClientModule } from '@angular/common/http';

describe('PaymentFormComponent', () => {
  let component: PaymentFormComponent;
  let fixture: ComponentFixture<PaymentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentFormComponent, HttpClientModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should disable Submit Button in first render', () => {
    const formElement: HTMLElement = fixture.nativeElement;
    const submitButton = formElement.querySelector(`button[type='submit']`) as HTMLButtonElement;
    expect(submitButton.disabled).toBeTrue();
  });
});
