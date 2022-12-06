class Scroll {
  constructor(info) {
    if (typeof info.el == 'string') {
      this.element = document.querySelector(info.el)

    } else if (info.el instanceof HTMLElement) {
      this.element = info.el


    }


    this.element.style.position = 'fixed',
      this.range = info.top,
      this.unit = info.unit ?? '%'
    this.element.style.top = this.scrollUnit() + 'px',

      // adding event listener to the whole web site
      window.addEventListener('scroll', () => this.move())
    window.addEventListener('resize', () => this.move())




  }
  move() {

    this.scrollValue = this.scrollUnit()

    //scrollY -- provides distance scrolled on the Y axis of the web page




    if (this.scrollValue - scrollY > 0) {
      this.element.style.top = this.scrollValue - scrollY + 'px'
    } else {
      this.element.style.top = 0 + "px"
    }

  }

  scrollUnit() {
    if (this.unit == 'px') {
      return this.range >= 0 ? this.range : 0
    } else if (this.unit == '%') {
      return this.calc(window.innerHeight, this.range) - this.element.clientHeight
    }
  }

  calc(height, range) {
    return height / 100 * range
  }


}

let myScroll = new Scroll({
  el: '.header__nav',
  top: 100,




})


class Run {
  constructor(example) {
    if (typeof example.runner == 'string') {
      this.elem = document.querySelector(example.runner)

    } else if (example.runner instanceof HTMLElement) {
      this.elem = example.runner


    }





    this.bottomElem = document.querySelector('.header__nav')

    this.elem.style.position = 'fixed'
    this.elem.style.top = window.innerHeight / 2 - this.elem.clientHeight + 'px'
    this.elem.style.right = window.innerWidth / 2 - (this.elem.offsetWidth / 2) + 'px'


    this.elem.addEventListener('mouseover', () => {
      this.elem.style.top = this.randomMoveY()
      this.elem.style.right = this.randomMoveX()


    })
  }

  randomMoveY() {
    let currentValueY = this.elem.clientHeight + this.bottomElem.clientHeight;
    let randomValueY = Math.floor(Math.random() * (window.innerHeight - currentValueY))
    return randomValueY + 'px'

  }


  randomMoveX() {
    let currentValueX = this.elem.clientWidth
    let randomValueX = Math.floor(Math.random() * (window.innerWidth - currentValueX) - 10)
    return randomValueX + 'px'

  }







}


let runElement = new Run({
  runner: '.header__content',
  bottom: '.header__nav'
})