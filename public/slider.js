(function(){
  "use strict";

  function Slider(container, nav){
    this.container = container;
    this.nav       = nav.show();

    this.imgs      = this.container.find('img');
    this.imgWidth  = this.imgs[0].width;// 750px
    this.imgsLen    = this.imgs.length;// 4

    this.current   = 0;
  }

  Slider.prototype = (function(){

    function _transition( coords ){
      this.container.animate({
        'margin-left': coords || -(this.current * this.imgWidth)
      })
    }

    function _setCurrent( dir ){
      var pos = this.current;
      pos += ( ~~(dir === 'next') || -1 );
      this.current = (pos < 0) ? this.imgsLen - 1 : pos % this.imgsLen ;

      return pos;
    }

    return{
      transition: _transition,
      setCurrent: _setCurrent
    };
  }());

  window._slider = Slider;

}());
