import "./styles/style.scss";
$(document).ready(function(){
  let cansel = $('.thanks__cansel');
  let thanks = $('.thanks');
  let formInner = $('form.form-inner')[0];


  document.getElementById('burger').onclick = function() {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})
  $('.video').click(function () {
    $('.video__overlay').css('display', 'none')
  })

  $('.program__slider-img').not('.slick-initialized').slick({
    fade: true,
    asNavFor: '.program__content-inner',
    arrows: false,
    infinite: false,
  });
  $('.program__content-inner').not('.slick-initialized').slick({
    fade: true,
    asNavFor: '.program__slider-img',
    infinite: false,
prevArrow: '<button type="button" class="slick-btn button-prev"><svg class="slick-left" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="16" y1="5.79578" x2="-4.37114e-08" y2="5.79577" stroke="white"/><path d="M1.02419 5.84764L0.640083 5.52755L-0.000101268 6.29577L0.384009 6.61586L1.02419 5.84764ZM5.61579 10.9757C5.82793 11.1525 6.14321 11.1238 6.31999 10.9117C6.49677 10.6995 6.46811 10.3842 6.25597 10.2075L5.61579 10.9757ZM0.384009 6.61586L5.61579 10.9757L6.25597 10.2075L1.02419 5.84764L0.384009 6.61586Z" fill="white"/><path d="M1.02419 5.74391L0.640083 6.06401L-0.000101268 5.29578L0.384009 4.97569L1.02419 5.74391ZM5.61579 0.615876C5.82793 0.439094 6.14321 0.467756 6.31999 0.679895C6.49677 0.892033 6.46811 1.20732 6.25597 1.3841L5.61579 0.615876ZM0.384009 4.97569L5.61579 0.615876L6.25597 1.3841L1.02419 5.74391L0.384009 4.97569Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick-btn button-next"><svg class="slick-right" width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="5.5" x2="16" y2="5.5" stroke="white"/><path d="M14.9758 5.44814L15.3599 5.76823L16.0001 5.00001L15.616 4.67992L14.9758 5.44814ZM10.3842 0.3201C10.1721 0.143318 9.85679 0.17198 9.68001 0.384118C9.50323 0.596256 9.53189 0.911539 9.74403 1.08832L10.3842 0.3201ZM15.616 4.67992L10.3842 0.3201L9.74403 1.08832L14.9758 5.44814L15.616 4.67992Z" fill="white"/><path d="M14.9758 5.55186L15.3599 5.23177L16.0001 5.99999L15.616 6.32008L14.9758 5.55186ZM10.3842 10.6799C10.1721 10.8567 9.85679 10.828 9.68001 10.6159C9.50323 10.4037 9.53189 10.0885 9.74403 9.91168L10.3842 10.6799ZM15.616 6.32008L10.3842 10.6799L9.74403 9.91168L14.9758 5.55186L15.616 6.32008Z" fill="white"/></svg></button>',
  });


  $('.reviews__content').not('.slick-initialized').slick({
    fade: true,
    asNavFor: '.reviews__slider-img',
    infinite: false,
    prevArrow: '<button class="reviews__arrows reviews__arrows-left"><svg class="reviews-arr-left" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="16" y1="5.79578" x2="-4.37114e-08" y2="5.79577" stroke="white"/><path d="M1.02419 5.84764L0.640083 5.52755L-0.000101268 6.29577L0.384009 6.61586L1.02419 5.84764ZM5.61579 10.9757C5.82793 11.1525 6.14321 11.1238 6.31999 10.9117C6.49677 10.6995 6.46811 10.3842 6.25597 10.2075L5.61579 10.9757ZM0.384009 6.61586L5.61579 10.9757L6.25597 10.2075L1.02419 5.84764L0.384009 6.61586Z" fill="white"/><path d="M1.02419 5.74391L0.640083 6.06401L-0.000101268 5.29578L0.384009 4.97569L1.02419 5.74391ZM5.61579 0.615876C5.82793 0.439094 6.14321 0.467756 6.31999 0.679895C6.49677 0.892033 6.46811 1.20732 6.25597 1.3841L5.61579 0.615876ZM0.384009 4.97569L5.61579 0.615876L6.25597 1.3841L1.02419 5.74391L0.384009 4.97569Z" fill="white"/></svg></button>',
    nextArrow: '<button class="reviews__arrows reviews__arrows-right"><svg class="reviews-arr-right" width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="5.5" x2="16" y2="5.5" stroke="white"/><path d="M14.9758 5.44814L15.3599 5.76823L16.0001 5.00001L15.616 4.67992L14.9758 5.44814ZM10.3842 0.3201C10.1721 0.143318 9.85679 0.17198 9.68001 0.384118C9.50323 0.596256 9.53189 0.911539 9.74403 1.08832L10.3842 0.3201ZM15.616 4.67992L10.3842 0.3201L9.74403 1.08832L14.9758 5.44814L15.616 4.67992Z" fill="white"/><path d="M14.9758 5.55186L15.3599 5.23177L16.0001 5.99999L15.616 6.32008L14.9758 5.55186ZM10.3842 10.6799C10.1721 10.8567 9.85679 10.828 9.68001 10.6159C9.50323 10.4037 9.53189 10.0885 9.74403 9.91168L10.3842 10.6799ZM15.616 6.32008L10.3842 10.6799L9.74403 9.91168L14.9758 5.55186L15.616 6.32008Z" fill="white"/></svg></button>',
  });
  $('.reviews__slider-img').not('.slick-initialized').slick({
    infinite: false,
    fade: true,
    asNavFor: '.reviews__content',
    arrows: false,
  });


  $('.gallery__inner').not('.slick-initialized').slick({
    fade: true,
    dots: true,
    prevArrow: '<button class="gallery__arrows gallery__arrows-left"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303Z" fill="#fff"/></svg></button>',
    nextArrow: '<button class="gallery__arrows gallery__arrows-right"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z" fill="#fff"/></svg></button>',
  });
  $('.gallery__item-adapt').not('.slick-initialized').slick({
    fade: true,
    dots: true,
    prevArrow: '<button class="gallery__arrows gallery__arrows-left"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303Z" fill="#fff"/></svg></button>',
    nextArrow: '<button class="gallery__arrows gallery__arrows-right"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z" fill="#fff"/></svg></button>',
  });

  $.each($('.radiobtn__item'), function(index, val) {
    if($(this).find('input').prop('checked')==true) {
      $(this).addClass('active');
    }
  });
  $(document).on('click', '.radiobtn__item', function(event) {
    
    $(this).parents('.amount__inner').find('.radiobtn__item').removeClass('active');
    $(this).parents('.amount__inner').find('.radiobtn__item input').prop('checked', false);
    $(this).toggleClass('active');
    $(this).find('input').prop('checked', true);
    return false;
  })

  $('#submit').click(function() {
    let name = $('#name');
    let phone = $('#phone');
    let hasError = false;
  
    $('.error-input').hide()
    
    if(!name.val()){
      name.next().show();
      hasError = true;
    }

    if(!phone.val()){
      phone.next().show();
      hasError = true;
    }

    if(!hasError) {
      $.ajax({
        method: "POST",
        url: "https://testologia.site/checkout",
        data: { name: name.val(), phone: phone.val() }
      })
        .done(function( msg ) {
          if (msg.success) { 
              thanks.css({'display' : 'block'});
          } else{
            alert ('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
          }
        });
        formInner.reset();
        }});

  cansel.click(function () {     
    thanks.css({'display' : 'none'});
    });
  $('.thanks__btn').click(function () {     
    thanks.css({'display' : 'none'});
    });


  new WOW({
    animateClass: 'animate__animated',
  }).init();  

  $('.popup-link').magnificPopup({
    type: 'image'
  });


  $(function () {
    $('[data-phone-pattern]').on('input blur focus', (e) => {
        var el = e.target,
            clearVal = $(el).data('phoneClear'),
            pattern = $(el).data('phonePattern'),
            matrix_def = "+375 (__) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = $(el).val().replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                $(el).val('');
                return;
            }
        }
        if (def.length >= val.length) val = def;
        $(el).val(matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        }));
    });
});

});
