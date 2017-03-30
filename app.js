/**
 * Created by dsouzaedison on 7/30/2016.
 */
(function () {
    'use strict';
    angular.module('concept', ['route'])
        .controller('AppCtrl', function ($scope) {
            $scope.currentNavItem = 'page1';
        })

        .controller('mainCtrl', function () {
            this.active = 0;

            // this.showSearchbar = function () {
            //     if ($(window).outerWidth() < 768)
            //         return false;
            //     if (this.active == 1)
            //         return true;
            //     else return false;
            // };

            this.nav = [{'name': 'Home', 'icon': 'home'},
                {'name': 'Events', 'icon': 'calendar'},
                {'name': 'Portfolio', 'icon': 'picture-o'},
                {'name': 'About', 'icon': 'info-circle'},
                {'name': 'Contact Us', 'icon': 'phone'}];
            this.getActive = function (id) {
                if (id == this.active)
                    return {'background-color': '#a90e7a'};
            };

            this.setActive = function (id) {
                this.active = id;
            };

        })

        .controller('eventsCtrl', function ($http) {
            var scope = this;
            this.events = [];
            $http.get('http://www.conceptevt.com/events/event_list.php')
                .then(function (res) {
                    scope.events = res.data;
                });
        })

        .controller('galleryCtrl', function ($http) {
            var scope = this;
            this.galleryImages = [];
            this.modalIndex = 0;
            this.modalUrl = '';
            this.showModal = false;

            $http.get('http://www.conceptevt.com/getGalleryPics.php')
                .then(function (res) {
                    scope.galleryImages = res.data;
                });

            this.setUrl = function (index) {
                this.modalIndex = index;
                this.modalUrl = this.galleryImages[index];
                this.showModal = true;
            };

            this.showLeft = function () {
                    this.setUrl(this.modalIndex - 1);
            };

            this.showRight = function () {
                    this.setUrl(this.modalIndex + 1);
            };

            this.closeModal = function () {
                this.showModal = false;
            };
        })

        .controller('teamCtrl', function () {
            this.members = [{
                'name': 'Nitin Vas',
                'desc': 'Artist by profession. Experienced and creative in handling events. Has the ability of binding concept team members.',
                'img': 'nitin.jpg',
                'bg': 'material/material1.jpg'
            },
                {
                    'name': 'Naveen Vas',
                    'desc': 'Adventurous, fun loving personality with the ability to work with team.',
                    'img': 'naveen.jpg',
                    'bg': 'material/material4.jpg'
                },
                {
                    'name': 'Mary Anne Vas',
                    'desc': 'Mary Anne Vas With the prior experience in customer services in TATA Consultancy. Currently she is well known for her delicious and custom made cakes.',
                    'img': 'mary.jpg',
                    'bg': 'material/material2.jpg'
                },
                {
                    'name': 'Saneela',
                    'desc': 'With the academic qualification of MBA. Handles the finance for the company.',
                    'img': 'suneela.jpg',
                    'bg': 'material/material5.jpg'
                },
                {
                    'name': 'Sunil Karkera',
                    'desc': 'With the prior 10years experience in the field of events. He adds strength into our team.',
                    'img': 'sunil.jpg',
                    'bg': 'material/material6.jpg'
                },
                {
                    'name': 'Reena D\'souza',
                    'desc': 'With the background of Master\'s in counselling, a talented dancer and a singer who handles management for Concept.',
                    'img': 'reena.jpg',
                    'bg': 'material/material8.jpg'
                },
                {
                    'name': 'Edison D\'souza',
                    'desc': 'With the background of Bachelor in CSE Engineering, is a talented Web Developer who handles website for Concept.',
                    'img': 'edison.jpg',
                    'bg': 'material/material9.jpg'
                }

            ]
        })

        .controller('contactCtrl', function () {
            $('#sendbtn').click(function () {
                $.post('contactussubmit.php', {
                    'name': $("#name").val(),
                    'email': $("#email").val(),
                    'phone': $("#phone").val(),
                    'message': $("#message").val()
                }, function () {
                    alert('We have received your message. We will contact you shortly.');
                    $("#name").val('');
                    $("#email").val('');
                    $("#phone").val('');
                    $("#message").val('');
                });
            });
        })
})();