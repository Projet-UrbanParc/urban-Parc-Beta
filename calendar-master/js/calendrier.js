// Calendrier "datepicker" Jquery //

$("#calendar").datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Dim', 'Lun', 'Mar', 'Mer','Jeu', 'Ven', 'Sam'],
    dateFormat: "dd-mm-yy",
    onSelect: function(dateText, inst) {
        $("input[name='from']").val(dateText);
    }
});

// Boîte de dialogue //

$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 750
        },
        hide: {
            effect: "explode",
            duration: 750
        }
    });

// Fonction au click //

    { $( "a").on( "click", function() {

        $( "#dialog" ).dialog( "open" );
        $("#calendar").datepicker().val()
    });
}});

