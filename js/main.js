$('.carousel').carousel({
	pause:"hover"
})
$(function() {
            $('#whoWe').click(function() {
                $.scrollTo('#first', { duration:800 });
            });
            $('#testimo').click(function() {
                $.scrollTo('#section2', { duration:800 });
            });
            $('#howWork').click(function() {
                $.scrollTo('#second', { duration:800 });
            });
            $('#keeptouch').click(function() {
                $.scrollTo('#fourth', { duration:800 });
            });
        });
$(function() {
    $('#testimo').click(function() {
                $.scrollTo('#section2', { duration:800 });
            });
})