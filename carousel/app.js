angular.module('app', ['ui.bootstrap'])
  .controller('CarouselCtrl', function ($scope) {
    var that = $scope;
    that.myInterval = 5000;
    that.active = 0;
    that.slides = [{
      img: 'images/home1.jpg',
      description: 'Fantastic airplane',
    },
    {
      img: 'images/home2.jpg',
      description: 'Fantastic windmill',
    },
    {
      img: 'images/home3.jpg',
      description: 'Fantastic people',
    },
    {
      img: 'images/home4.jpg',
      description: 'Fantastic tablet',
    }];

    that.status = {
      planIsOpen: true,
      tripIsOpen: false,
      checkinIsOpen: false,
    };
  });