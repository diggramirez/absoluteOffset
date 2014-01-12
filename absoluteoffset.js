/**
* @function absoluteOffset
* @description Get the absolute coordinates(top,left,right,bottom) relative to the document.
* @example
*  $('div').absoluteOffset();
*  => {top:25,left:100,right:5,bottom:50}
*/
(function($) {
  $.fn.extend({
    absoluteOffset: function () {
      var $this = $(this);
      var sizes = $this.offset();

      if($this.css('display')=='none')
      {
        sizes = $this.css('display','block').offset();
        $this.css('display','');
      }

      sizes['right']=$(document).width()-(sizes.left+sizes.width());
      sizes['bottom']=$(document).height()-(sizes.top+sizes.height());
      return sizes;
    }

  });
})(jQuery); //absoluteOffset
