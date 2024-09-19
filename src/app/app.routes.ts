import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { ForgotPasswordComponent } from '../views/authentication/forgot-password/forgot-password.component';
import { LockScreenComponent } from '../views/authentication/lock-screen/lock-screen.component';
import { ResetPasswordComponent } from '../views/authentication/reset-password/reset-password.component';
import { SignInComponent } from '../views/authentication/sign-in/sign-in.component';
import { SignOutComponent } from '../views/authentication/sign-out/sign-out.component';
import { SignUpComponent } from '../views/authentication/sign-up/sign-up.component';
import { TwoFAComponent } from '../views/authentication/two-fa/two-fa.component';
import { BookingComponent } from '../views/customer/booking/booking.component';
import { CheckoutComponent } from '../views/customer/checkout/checkout.component';
import { FlightOptionsComponent } from '../views/customer/flight-options/flight-options.component';
import { CarDetailsComponent } from '../views/customer/car-details/car-details.component';
import { FlightDetailsComponent } from '../views/customer/flight-details/flight-details.component';
import { EventDetailsComponent } from '../views/customer/event-details/event-details.component';
import { HomepageComponent } from '../views/customer/homepage/homepage.component';
import { HotelCompareComponent } from '../views/customer/hotel-compare/hotel-compare.component';
import { HotelDetailsComponent } from '../views/customer/hotel-details/hotel-details.component';
import { TripDetailsComponent } from '../views/customer/trip-details/trip-details.component';
import { TicketSelectionComponent } from '../views/customer/ticket-selection/ticket-selection.component';
import { PaymentComponent } from '../views/customer/payment/payment.component';
import { ProfileComponent } from '../views/user/profile/profile.component';
import { FlightPaymentComponent } from '../views/customer/flight-payment/flight-payment.component';
import { SearchRoomComponent } from '../views/search-room/search-room.component';
import { ServicesComponent } from '../views/services/services.component';
import { HotelOnboardingComponent } from '../views/onboarding/hotel-onboarding/hotel-onboarding.component';
import { EventOnboardingComponent } from '../views/onboarding/event-onboarding/event-onboarding.component';
import { ProductOnboardingComponent } from '../views/onboarding/product-onboarding/product-onboarding.component';

export const routes: Routes = [
    // auth routes //
  { path: '', component: HomeComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'lockscreen', component: LockScreenComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signout', component: SignOutComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '2factor', component: TwoFAComponent },

  // customer routes//
  { path: 'booking', component: BookingComponent },
  { path: 'cardetails', component: CarDetailsComponent },
  { path: 'hotelcheckouts', component: CheckoutComponent },
  { path: 'eventdetails', component: EventDetailsComponent },
  { path: 'flightOptions', component: FlightOptionsComponent },
  { path: 'flightdetails', component: FlightDetailsComponent },
  { path: 'flightpayment', component: FlightPaymentComponent },
  { path: 'customerpage', component: HomepageComponent },
  { path: 'hotelcompare', component: HotelCompareComponent },
  { path: 'hoteldetails', component: HotelDetailsComponent },
  { path: 'searchroom', component: SearchRoomComponent },
  { path: 'hoteldetails', component: HotelDetailsComponent },
  { path: 'hotelpayment', component: PaymentComponent },
  { path: 'eventtickets', component: TicketSelectionComponent },
  { path: 'tripdetails', component: TripDetailsComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'hotel-onboarding', component: HotelOnboardingComponent },
  { path: 'event-onboarding', component: EventOnboardingComponent },
  { path: 'product-onboarding', component: ProductOnboardingComponent },

  // user specific routes//
  { path: 'profile', component: ProfileComponent },


];
