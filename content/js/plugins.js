"use strict";

// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Place any jQuery/helper plugins in here.


(function (targetWidth) {
  var deviceWidth = screen.width;
  var ratio = deviceWidth / targetWidth;
  var viewport = document.querySelector('meta[name="viewport"]');

  if (ratio < 1) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio + ', user-scalable=yes');
  }
})(360); // magnificPopup Extend


(function ($, undefined) {
  'use strict';

  var pluginName = 'magnificPopupExtend';
  var defaults = {
    fixedContentPos: true,
    fixedBgPos: true,
    showCloseBtn: false,
    removalDelay: 300,
    mainClass: 'mfp-fade',
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.startWindowScroll = $(window).scrollTop();
      },
      open: function open() {
        if ($('.mfp-content').height() < $(window).height()) {
          $('body').on('touchmove', function (e) {
            e.preventDefault();
          });
        }

        setTimeout(function () {
          var $scroller = $.magnificPopup.instance.content.find('[data-scrollbar]');
          $scroller.each(function (i, el) {
            new SimpleBar(el, {
              autoHide: false
            });
          });
        }, 10);
      },
      beforeClose: function beforeClose() {
        if (this.content.data('popup') == 'index') {
          clickAnchors.showAll();
        }

        this.content.removeClass('is-active');
      },
      close: function close() {
        $(window).scrollTop(this.startWindowScroll);
        $('body').off('touchmove');
      },
      change: function change() {
        this.content.addClass('is-active');
      }
    }
  };

  function Plugin(element, options) {
    this.element = element;
    this.$element = $(element);
    this.options = $.extend(true, {}, defaults, options, this.$element.data());
    delete this.options[pluginName];
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
    this.$element.data('plugin_' + pluginName, this);
  }

  $.extend(Plugin.prototype, {
    init: function init() {
      this.$element.magnificPopup(this.options);
    }
  });
  $.magnificPopupExtend = {
    open: function open(options, index) {
      if (!$.magnificPopup) {
        return;
      }

      options = $.extend(true, {}, defaults, options);
      $.magnificPopup.open(options, index);
    }
  };

  $.fn[pluginName] = function (methodOrOptions) {
    return this.each(function () {
      if (!jQuery().magnificPopup) {
        console.error('jQuery plugin "magnificPopup" has not been loaded.');
        return;
      }

      var plugin = $.data(this, 'plugin_' + pluginName) || new Plugin(this, methodOrOptions);

      if (typeof methodOrOptions === 'string' && plugin[methodOrOptions]) {
        plugin[methodOrOptions].apply(plugin, Array.prototype.slice.call(arguments, 1));
      }
    });
  };

  $('[data-popup="true"]').magnificPopupExtend();
})(jQuery);