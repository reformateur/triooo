import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //ON INIT STATE


    //ON CLICK SETTING ICON (NAVBAR)
    $("#setting-icon").on('click', function(event) {
        event.preventDefault();
        $('.navbar').css( "background", "transparent");
        $('.navbar').css( "z-index", "0");
        $('.couverture-page').fadeIn(1000);
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('#couverture-page-categories-row').css( "display", "none");
        $('#couverture-page-row').css( "display", "flex");
    });

    //ON CLICK BUTTON CATEGORIES (NAVBAR)
    $(".btn-categories").on('click', function(event) {
        event.preventDefault();
        $('.navbar').css( "background", "transparent");
        $('.navbar').css( "z-index", "0");
        $('.couverture-page').fadeIn(1000);
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('#couverture-page-row').css( "display", "none");
        $('#couverture-page-categories-row').css( "display", "flex");
    });

    //HIDE BLACK COVER AFTER CLICK
    $(".a-menuAndCategories").on('click', function(event) {
        event.preventDefault();
        $('.couverture-page').fadeOut(1000);
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
    });
    $(".couverture-page").on('click', function(event) {
        event.preventDefault();
        $('.couverture-page').fadeOut(1000);
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('.navbar').css( "background", "");
        $('.navbar').css( "z-index", "");
        $('#couverture-page-row').css( "display", "none");
        $('#couverture-page-categories-row').css( "display", "none");
    });
  }

}
