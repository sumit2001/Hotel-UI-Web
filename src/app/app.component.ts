import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator' ;
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'  ;
import {MatFormFieldControl} from '@angular/material/form-field'  ;
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';

export interface UserData {
  channel:String,
  bookingId:String,
  customerName:String,
  bookedOn:String,
  CheckIn:String,
  CheckOut:String,
  NumberOfRooms:String,
  Price:String,
  Country:String,
  email:String,
  phoneNo:Number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'project';
  constructor() {
    // Create 100 users


    // Assign the data to the data source for the table to render
  
  }
  
in:any={
  "hotel_name": "Octave Bengaluru",
  "bookingId": "87654321",
  "status": "new",
  "booked_on": "2020-06-10 06:30:19",
  "source": "ezee",
  "check_in": "2020-06-11",
  "check_out": "2020-06-12",
  "channel": "Booking.com",
  "total_price": 3000,
  "total_tax": 300,
  "total_payment": 3300,
  "comment": [
    "I want tea bags",
    "Need breakfast"
  ],
  "booked_by": {
    "firstName": "Arun",
    "lastName": "S",
    "address": {
      "country": "India"
    },
    "email": "one@test.com",
    "phone": "+91-9999999999"
  },
  "rooms": [
    {
      "name": "Deluxe",
      "occupancy": {
        "adult": 2,
        "child": 0
      },
      "price": {
        "sell_rate": 1000.0,
        "tax": 100.0
      }
    },
    {
      "name": "Suite",
      "occupancy": {
        "adult": 2,
        "child": 2
      },
      "price": {
        "sell_rate": 2000.0,
        "tax": 200.0
      }
    }
  ]
}



}
