import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

@Component({
  selector: 'app-humour',
  templateUrl: './humour.component.html',
  styleUrls: ['./humour.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HumourComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext(){
    this?.swiper?.swiperRef.slideNext(100);
  }
  slidePrev(){
    this?.swiper?.swiperRef.slidePrev(100);
  }

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

    //DISPLAY PARAMS PAGE
    $(".coverture-page-row_icone--params").on('click', function(event) {
        event.preventDefault();
        $('.userSessionInfo-bloc').css( "display", "none");
        $('.userEvents-bloc').css( "display", "none");
        $('.userWallet-bloc').css( "display", "none");
        $('.userSettings-bloc').fadeIn(700);
        $('.form-control-profil').css("font-size", "0.85rem");
        $('.form-select-profil').css("font-size", "0.85rem");
    });

    //NOTIFICATIONS CODE
    $(".notification-icon").on('click', function(event) {
        event.preventDefault();
        $('.notification-show-bloc').fadeToggle(800);
    });
    $(".notif-close-popup").on('click', function(event) {
        event.preventDefault();
        $('.notification-show-bloc').fadeOut(800);
    });
  }

}
