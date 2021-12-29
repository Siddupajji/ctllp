import { Component, OnInit } from '@angular/core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog'; 
import * as $ from 'jquery'

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})

export class AboutusComponent implements OnInit{
  faDumbbell=faDumbbell

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    $('.counter').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 8000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });

    
    
  }



  
}

 



export class DialogContentExampleDialog {}

