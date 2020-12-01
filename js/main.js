/**
 * 
 * VE CONFIGURATION
 * 
 */

const app = new Vue({
    el:'#app',
    data: {
        logo: './img/logo-restaurant-2x-400x77.png',
        menu: [
            {
                name: 'Home',
                url: '#',
                new: false
        },
            {
                name: 'Culinary History',
                url: '#',
                new: false
        },
            {
                name: 'Our Home',
                url: '#',
                new: false
        },
            {
                name: 'Our Menu',
                url: '#',
                new: false
        },
            {
                name: 'Takeout',
                url: '#',
                new: true
        },
            {
                name: 'Bulletin',
                url: '#',
                new: false
        },
            {
                name: 'Reservations',
                url: '#',
                new: false
        },
            {
                name: 'cart',
                url: '#',
                new: false
        }
        ],
        footerText: 'Quam eu proin sit massa condimentum. Volupat non pulvinar aliquet nunc. Quam eu proin sit massa condimentum.',
        footerSocial: [
            {
                icon: 'fa-facebook-f',
                url: '#'
            },
            {
                icon: 'fa-twitter',
                url: '#'
            },
            {
                icon: 'fa-youtube',
                url: '#'
            },
            {
                icon: 'fa-instagram',
                url: '#'
            },
            {
                icon: 'fa-linkedin-in',
                url: '#'
            }
        ],
        copy: 'Copyright 2012 - 2019 Avada | All Rights Reserved | Powered by WordPress | ThemeFusion',
    },
    methods: {
    }

});