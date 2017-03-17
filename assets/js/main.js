(function () {
  function slabText () {
    $('.tagline > *').slabText()
  }

  function navBar () {
    var navbar = document.querySelector('.main-nav')

    new Waypoint({
      element: document.querySelector('.about'),
      offset: 80,
      handler: function (direction) {
        navbar.classList.toggle('past-threshold')

        // IE10/11 doesn't support toggle's 2nd arg
        if (direction === 'up') {
          navbar.classList.add('transition')
        } else {
          navbar.classList.remove('transition')
        }
      }
    })

    var headroom = new Headroom(navbar)
    headroom.init()
  }

  slabText()
  navBar()
}())
