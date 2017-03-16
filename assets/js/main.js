(function () {
  function slabText () {
    $('.tagline > *').slabText()
  }

  function navBar() {
    var navbar = document.querySelector('.main-nav')
    var waypoint = new Waypoint({
      element: document.querySelector('.about'),
      offset: 60,
      handler: function () {
        navbar.classList.toggle('has-background')
      }
    })
  }

  slabText()
  navBar()

}())
