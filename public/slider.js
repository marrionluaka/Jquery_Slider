const Slider = (function(){
"use strict";

var _container,
    _imgs,
    _imgWidth,
    _imgsLen,
    _current;

  function _Slider(container, nav){
      _container = container;
      this.nav   = nav.show();

      _imgs      = _container.find('img');
      _imgWidth  = _imgs[0].width;// 750px
      _imgsLen   = _imgs.length;// 4

      _current   = 0;
  }

  _Slider.prototype = {
      transition: function _transition( coords ){
          _container.animate({
              'margin-left': coords || -(_current * _imgWidth)
          });
      },

      setCurrent: function _setCurrent( dir ){
          var pos = _current;
          pos += ( ~~(dir === 'next') || -1 );
          _current = (pos < 0) ? _imgsLen - 1 : pos % _imgsLen ;

          return pos;
      }
  };

return _Slider;

}());
