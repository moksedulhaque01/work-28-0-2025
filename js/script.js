$(document).ready(function(){
	/* alert("Hello world");

	$('#sbtn').click(function(){
		alert("Hello SSB");
	});

	$('button').on('click',function(){
		alert("Hello SSB");
	}); */

	$('#show').on('click',function(){
		$('h3').show();
	});

	$('#hide').on('click',function(){
		$('h3').hide();
	});

	$('#toggle').on('click',function(){
		$('h3').toggle(2000);
	});

	$('.ques').on('click',function(){
		$('.answ').slideToggle(300);
	});

	$( "#draggable" ).draggable();

	$( "#droppable" ).droppable({
      drop: function( event, ui ) {
    $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
});
    $( "#accordion" ).accordion({
      collapsible: true
    });

     var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    $( "#tabs" ).tabs();

        $( document ).tooltip();

        $( "#resizable" ).resizable();
  } );



