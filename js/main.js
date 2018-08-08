jQuery(function ($) {

    'use strict';

    // Sticky Nav
    // Countdown
    // Slick Slider
    // select-category Change
    // MagnificPopup
    // tab view change
    // Gmap


    // -------------------------------------------------------------
    //  Sticky Nav
    // -------------------------------------------------------------

     (function () {  
        function menuToggle(){
            var windowWidth = $(window).width();
           $(window).on('scroll', function(){
                if( $(window).scrollTop()>55 ){
                    $('.navbar').addClass('navbar-fixed-top fadeInDown')
                } else {
                    $('.navbar').removeClass('navbar-fixed-top');
                };
            });
        }

        menuToggle();
    }()); 

    // -------------------------------------------------------------
    //  Countdown
    // -------------------------------------------------------------

    (function () {

        $(".countdown").countdown({
            date: "25 aug 2018 09:00:00",
            format: "on"
        });

    }());  

    // -------------------------------------------------------------
    //  Slick Slider
    // -------------------------------------------------------------  

    (function() {
      
       $(".brand-slider").slick({
            dots: true,
            infinite: true,
            slidesToShow: 5,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]        
        });            

    }());

    // -------------------------------------------------------------
    //  select-category Change
    // -------------------------------------------------------------

    $('.expandable').on('click', function() {
       $('.expandable').not(this).removeClass('active');
        $(this).toggleClass('active');
    });


    // -------------------------------------------------------------
    //  MagnificPopup
    // -------------------------------------------------------------

    (function() {
        
        $('.video-link').magnificPopup({type:'iframe'});

    }()); 

    (function () {
        $('.image-link').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
    }()); 


    // -------------------------------------------------------------
    //  tab view change
    // -------------------------------------------------------------

    $('.gallery-tabs .small-view-tab').on('click', function() {
        $('.gallery-tabs .small-view-tab').addClass('active');
        $('.gallery-tabs .large-view-tab').removeClass('active');
        $('.gallery-tab-content').removeClass('large-view-tab').addClass('small-view-tab');
    });    

    $('.gallery-tabs .large-view-tab').on('click', function() {
        $('.gallery-tabs .large-view-tab').addClass('active');
        $('.gallery-tabs .small-view-tab').removeClass('active');
        $('.gallery-tab-content').removeClass('small-view-tab').addClass('large-view-tab');
    });



    /*==============================================================*/
    // Gmap
    /*==============================================================

    (function(){

        var map;  

        map = new GMaps({
            el: '#gmap',
            lat: 35.969872,  
            lng: -93.946463,
            scrollwheel:false,
            zoom: 6,
            zoomControl : false,
            panControl : false,
            streetViewControl : true,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        var image = 'images/others/map-icon.png';
        map.addMarker({
            lat: 35.969872,  
            lng: -93.946463,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'left',
            backgroundColor: '#efece0',
        });


        var styles = [ 

            {
                "featureType": "road",
                "stylers": [
                    { "color": "#efc182" }
                ]
            },{
                "featureType": "water",
                "stylers": [
                    { "color": "#cbe6a3" }
                ]
          },{
              "featureType": "landscape",
              "stylers": [
              { "color": "#f3f1ed" }
              ]
            },{
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#a8a8a8" }
                ]
            },{
                "featureType": "poi",
                "stylers": [
                 { "color": "#e2f0cd" }
                ]
            },{
                "elementType": "labels.text",
                "stylers": [
                    { "saturation": 1 },
                    { "weight": 0.1 },
                    { "color": "#a8a8a8" }
                ]
            }

        ];

         map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });

        map.setStyle("map_style");
    }()); */


  

// script end
});

