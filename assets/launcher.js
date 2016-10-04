gitbook.events.bind( "page.change", function () {
  ExecutorEditor.setup();
  $( ".executor-env" ).css( "width", "7em" );
} );
