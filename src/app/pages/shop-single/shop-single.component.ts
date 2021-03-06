import { Component, OnInit } from '@angular/core';
declare var tns;
declare var lightGallery;

@Component({
    selector: 'app-shop-single',
    templateUrl: './shop-single.component.html'
})

export class ShopSingleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.animationSlider()
    }

    animationSlider() {

        setTimeout(() => {

            // Product gallery
            tns({
                container: '.tns-carousel-inner',
                controlsText: ['<i class="ci-arrow-left"></i>', '<i class="ci-arrow-right"></i>'],
                gutter: 15,
                navContainer: '#tns-thumbnails',
                navAsThumbnails: true,
                navPosition: "top",
                controlsPosition: "top",
                mouseDrag: !0,
                speed: 600,
                autoplayHoverPause: !0,
                autoplayButtonOutput: !1,
            })

            var e = document.querySelectorAll(".gallery");
            if (e.length) {
                for (var t = 0; t < e.length; t++) {
                    lightGallery(e[t], { selector: ".gallery-item", download: !1, videojs: !0, youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0 }, vimeoPlayerParams: { byline: 0, portrait: 0 } });
                }
            }

            // Product card carousel
            // tns({
            //     container: '.tns-carousel-inner-two',
            //     nav: false,
            //     controlsText: ['<i class="ci-angle-left"></i>', '<i class="ci-angle-right"></i>'],
            // })

            // Product card carousel
            // tns({
            //     container: '.tns-carousel-inner-three',
            //     nav: false,
            //     controlsText: ['<i class="ci-angle-left"></i>', '<i class="ci-angle-right"></i>'],
            // })

            // Look
            tns({
                container: '.tns-carousel-inner-four',
                controlsContainer: "#tns-look-controls",
                mouseDrag: !0,
                responsive: {
                    0: {
                        items: 1,
                        gutter: 20
                    },
                    480: {
                        items: 2,
                        gutter: 24
                    },
                    767: {
                        items: 1
                    },
                    991: {
                        items: 2,
                        gutter: 30
                    }
                },
            })

            // Related products
            tns({
                container: '.tns-carousel-inner-five',
                nav: false,
                controlsContainer: "#custom-controls-related",
                mouseDrag: !0,
                responsive: {
                    0: {
                        items: 1,
                        gutter: 20
                    },
                    480: {
                        items: 2,
                        gutter: 24
                    },
                    700: {
                        items: 3,
                        gutter: 24
                    },
                    1100: {
                        items: 4,
                        gutter: 30
                    }
                }

            });

            // Recently viewed products
            tns({
                container: '.tns-carousel-inner-six',
                nav: false,
                mouseDrag: !0,
                controlsContainer: "#custom-controls-recent",
                responsive: {
                    0: {
                        items: 1,
                        gutter: 20
                    },
                    480: {
                        items: 2,
                        gutter: 24
                    },
                    700: {
                        items: 3,
                        gutter: 24
                    },
                    1100: {
                        items: 4,
                        gutter: 30
                    }
                }

            });

        }, 500)

    }

}