import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './flight-details.component.html',
  styleUrl: './flight-details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlightDetailsComponent {

}
