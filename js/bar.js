

// Grab skills nav link for click event
document.getElementById("skills-nav").addEventListener('click', holdAnimation);

/* Wait for page to load */
function holdAnimation () {
    setTimeout(function(){ animateGraph(); }, 1000);
}

/* Animate graph to display skills*/
function animateGraph () {
    $('.bar').each(function(i) {  
        var $bar = $(this);
        $(this).append('<span class="count"></span>')
        setTimeout(function() {
            $bar.css('width', $bar.attr('data-percent'));      
        }, i * 100);
        });
    
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).parent('.bar').attr('data-percent')
        }, {
            duration: 2150,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now) + '%');
            }
        });
    });   
}







/*setTimeout(function start (){
    
        $('.bar').each(function(i){  
        var $bar = $(this);
        $(this).append('<span class="count"></span>')
        setTimeout(function(){
            $bar.css('width', $bar.attr('data-percent'));      
        }, i*100);
        });
    
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).parent('.bar').attr('data-percent')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) +'%');
            }
        });
    });
    console.log('here')
}, 500);*/
