$(document).ready(function(){
      $('.nav-list.contact').click(function(){
            $('.contact-pop-up-bg').addClass('on');
      });

      $('.contact-pop-up-bg').click(function(e){
            if(e.target == e.currentTarget){
            $('.contact-pop-up-bg').removeClass('on');
            }
            // $('.contact-pop-up-bg').removeClass('on');
      });
      $('.close-btn').click(function(){
            $('.contact-pop-up-bg').removeClass('on');
      });

      //portfolio
      $('.center-txt li').click(function(){
            $('.portfolio-bg').addClass('on');
      });
      $('.portfolio-close-btn').click(function(){
            $('.portfolio-bg').removeClass('on');
      });

      $('.portfolio-bg').click(function(e){
            if(e.target == e.currentTarget){
            $('.portfolio-bg').removeClass('on');
            }
            // $('.contact-pop-up-bg').removeClass('on');
      });

      $('.center-txt li').click(function(){
            const result = $(this).attr('data-alt');
            $('.portfolio-section div').removeClass('on');
            $(`#${result}`).addClass('on');
      })


      $('.dark-mode-btn').click(function(){
            $(this).addClass('off');
            $('.light-mode-btn').addClass('on');
            $('body').addClass('dark');
            $('.header-wrap').addClass('hd-dark');
            $('.center-txt').addClass('center-dark');
            $('.portfolio').addClass('portfolio-dark');
            $('.site-btn').addClass('btn-dark');
            $('.contact-pop-up').addClass('contact-dark');
          
      });
      
      $('.light-mode-btn').click(function(){
            $(this).removeClass('on');
            $('.dark-mode-btn').removeClass('off');
            $('body').removeClass('dark');
            $('.header-wrap').removeClass('hd-dark');
            $('.center-txt').removeClass('center-dark');
            $('.portfolio').removeClass('portfolio-dark');
            $('.site-btn').removeClass('btn-dark');
            $('.contact-pop-up').removeClass('contact-dark');
      });

});
