import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flight-payment',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './flight-payment.component.html',
  styleUrl: './flight-payment.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlightPaymentComponent {

}
