$('#videoModal').magnificPopup({
    items: {
      src: 'https://vimeo.com/228108926'
    },
    type: "iframe", // this is default type

    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

      patterns: {
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: 'https://player.vimeo.com/video/228108926'
        }
        // you may add here more sources

      },

      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }
});
