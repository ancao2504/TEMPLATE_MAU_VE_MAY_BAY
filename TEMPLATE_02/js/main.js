// Set enscroll for id Select2
var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
if (mac) {
    var duration_enscroll = 300;
} else {
    var duration_enscroll = 100;
}

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll && !$("body").hasClass("overflow_hidden")) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

function set_enscroll_select2(idname) {
    setTimeout(function () {
        if ($('.select2-results div').length > 0) {
            $('.select2-results div').remove();
        }
    }, 1);
    setTimeout(function () {
        $('#select2-' + idname + '-results').enscroll({
            showOnHover: false,
            verticalTrackClass: 'track3',
            addPaddingToPane: false,
            verticalHandleClass: 'handle3',
            easingDuration: duration_enscroll
        });
    }, 2);
    setTimeout(function () {
        $('.select2-results__option[aria-selected]').css('width', '100%');
    }, 3);
}
// End Set enscroll for id Select2


// Scroll to top
$(window).scroll(function () {
    0 != $(this).scrollTop() ? $("#bttop").fadeIn() : $("#bttop").fadeOut()
});

$("#bttop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 800);
});

$(".box-icon-nation ul li").click(function () {
    var $class = $(this).find("i").attr("class");
    $(".box-icon-nation").find("i#flag-selected").removeClass().addClass($class);
});

$(".box-btn").click(function(){

  if (($(".box-diem").hasClass('open'))) {
      $(".box-diem").removeClass('open');
  }
  $(this).parent().addClass('open');
  if ($(window).width() < 768) {
    $("body").css("overflow", "hidden");
  }

  $('#city_name_go').val("");
  $('#city_name_back').val("");
  $('#city_name_go_modal').val("");
  $('#city_name_back_modal').val("");
  
  if ($(window).width() > 992) {
    $('#city_name_go').focus();
    $('#city_name_back').focus();
    $('#city_name_go_modal').focus();
    $('#city_name_back_modal').focus();
  }
});

$(".item-diem-di").on('click', function() {
  var html_nn = $(this).html();
  var html_nn_code = $(this).data("code");
  $(".bt-diem-di").html('<span class="txt-ellipse" data-code="'+html_nn_code+'">' + html_nn  + ' (' +html_nn_code + ')' + '</span>');
  $(this).closest(".box-diem").removeClass('open');
  $('body').removeAttr('style');
  $('.go-flight .input-flight').val(html_nn);
  $('input.input-flight').removeClass('input-err');
});


$(".item-diem-den").on('click', function() {
  var html_nn = $(this).html();
  var html_nn_code = $(this).data("code");
  $(".bt-diem-den").html('<span class="txt-ellipse" data-code="'+html_nn_code+'">' + html_nn  + ' (' +html_nn_code + ')' + '</span>');
  $(this).closest(".box-diem").removeClass('open');
  $('body').removeAttr('style');
  $('.back-flight  .input-flight').val(html_nn);
  $('input.input-flight').removeClass('input-err');
}); 

$(document).mouseup(function (e)
{
    var container = $(".box-select-option");
    var btn = $('.bt-diem-den');
    var btn2 = $('.bt-diem-di');
    var close1 = $('.close1');
    var close2 = $('.close2');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0 && !btn.is(e.target) && !btn2.is(e.target))
    {
        $(".box-diem").removeClass("open");
        $(".box-search-tours").removeClass("open");
        $('body').removeAttr('style');
    }
});

$(".close1, .close2").click(function () {
    $(".box-search-tours").removeClass("open");
    $(".box-diem").removeClass("open");
    $('body').removeAttr('style');
    $('input#city_name').removeClass('input-err');

    if ($(window).width() < 768) {
      if($("#ve_may_bay").length) {
        $('html, body').animate({
            scrollTop: $("#ve_may_bay").offset().top
        }, 100);
      }
    }

    $(this).closest(".form-date").removeClass('open');
    $(".form-date").removeClass('open');

    $('body').removeAttr('style');
    $('body').removeAttr('onclick');
    return false;

});

(function ($) {
    $.fn.datepicker.dates['vi'] = {
        days: ["Ch??? nh???t", "Th??? hai", "Th??? ba", "Th??? t??", "Th??? n??m", "Th??? s??u", "Th??? b???y"],
        daysShort: ["CN", "Th??? 2", "Th??? 3", "Th??? 4", "Th??? 5", "Th??? 6", "Th??? 7"],
        daysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        months: ["Th??ng 1", "Th??ng 2", "Th??ng 3", "Th??ng 4", "Th??ng 5", "Th??ng 6", "Th??ng 7", "Th??ng 8", "Th??ng 9", "Th??ng 10", "Th??ng 11", "Th??ng 12"],
        monthsShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
        today: "H??m nay",
        clear: "X??a",
        format: "dd/mm/yyyy"
    };
}(jQuery));

$('#num_people').select2({
    placeholder: "1",
    minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('num_people');
});

$('#num-adault').select2({
    placeholder: "1",
    minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('num-adault');
});

$('#num-child').select2({
    placeholder: "0",
    minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('num-child');
});

$('#num-baby').select2({
    placeholder: "0",
     minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('num-baby');
});

$('#num-adault2').select2({
    placeholder: "1",
     minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('num-adault2');
});

$('#num-child2').select2({
    placeholder: "0",
     minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('num-child2');
});

$('#num-baby2').select2({
    placeholder: "0",
     minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('num-baby2');
});

$('#hang-ghe').select2({
    placeholder: "H???ng gh???",
     minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('hang-ghe');
});

$('#num-date').select2({
    placeholder: "S??? ????m",
     minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('num-date');
});

$('#sl-lang').select2({
    placeholder: "Ch???n qu???c gia, ng??n ng???",
     minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('sl-lang');
});

$('.search-month').select2({
    placeholder: "1",
    minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('search-month');
});

$(document).ready(function () {

    $('.tab-tour.nav-tabs a').click(function(){
        $(this).tab('show');
    })

    onDateTimePicker();
    onDateTimePickerHome();
    filterFlightHistory();
    filterDateback();

    $(".location_name").on("click", function(){
        $(".location_pos").hide();
        $(".location_pos_"+$(this).data("id")).show();
    })
    
    $('#city_name_go, #city_name_go_modal').typeahead({
        scrollBar: true,
        ajax: '/flight_data',
        autoSelect: false,
        onSelect: function(item) {

          var text = item.value.split(' ');

          var code = text[text.length - 1];
          code = code.replace('(','');
          code = code.replace(')','');

          $(".bt-diem-di").html('<span class="txt-ellipse" data-code="'+code+'">' + item.value + '</span>');

          $(".box-diem").removeClass("open");
          $('body').removeAttr('style');
          $('input.input-flight').removeClass('input-err');
          $('#city_name_go').val("");
        },
        highlighter: function (item) {
          var parts = item.split('#');
          return parts[0] + "<label class='country-search'>" + parts[1] + "</div>";
        }
    });

    $('#city_name_back, #city_name_back_modal').typeahead({
        scrollBar: true,
        hint: false,
        ajax: '/flight_data',
        autoSelect: false,
        onSelect: function(item) {

          var text = item.value.split(' ');

          var code = text[text.length - 1];
          code = code.replace('(','');
          code = code.replace(')','');

          $(".bt-diem-den").html('<span class="txt-ellipse" data-code="'+code+'">' + item.value + '</span>');
          
          $(".box-diem").removeClass("open");
          $('body').removeAttr('style');
          $('input.input-flight').removeClass('input-err');
          $('#city_name_back').val("");
        },
        highlighter: function (item) {
          var parts = item.split('#');
          return parts[0] + "<label class='country-search'>" + parts[1] + "</div>";
        }
    });

    $('.div-in-search .fa-times').click(function(){
      $(this).parent().find('.typeahead').val('');
      $(this).parent().find('.typeahead').focus();
    })

    $('.div-input-search-hotel .fa-times').click(function(){
      $(this).parent().find('.typeahead').val('');
      $(this).parent().find('.typeahead').focus();
    })

    $('.btn-choice-area').click(function(){
      var value = $(this).parent().find('input.typeahead').val();
      if(value != ""){
        $(".box-diem").removeClass("open");
        if($(this).closest(".box-diem").hasClass("go-flight")) {
          $(".bt-diem-di").html('<span class="txt-ellipse">' + value + '</span>');
        }
        if($(this).closest(".box-diem").hasClass("back-flight")) {
          $(".bt-diem-den").html('<span class="txt-ellipse">' + value + '</span>');
        }
        $(this).parent().find('input.input-flight').removeClass('input-err');
      } else {
        $(this).parent().find('input.input-flight').addClass('input-err');
      }
    })
    
    if ($(window).width() < 768) {
      $('.form-date .form-control').attr("readonly","true");
      $(".form-date .form-control").datepicker("option", "disabled", true);
      $(document).ready(function() {
        $("select").each(function () {
          var instance = $(this).data('select2');
          if (instance != null){
            $(this).select2('destroy');
          }
        });
      })
    }

    $('.btn-support').click(function () {
        $('.support-right').addClass('open');
    })
    $('.btn-close-support').click(function () {
        $('.support-right').removeClass('open');
    })

    $('.btn-reverse').click(function () {
        var diem_den = $('.bt-diem-den').html();
        var diem_di = $('.bt-diem-di').html();

        $('.bt-diem-den').html(diem_di);
        $('.bt-diem-di').html(diem_den);

        //custom functions?
    });

    var d = new Date();

    var month = d.getMonth() + 1;
    var day = d.getDate();
    var next_day = d.getDate() + 2;

    var output = day + '/' +
            (month < 10 ? '0' : '') + month + '/' +
            (day < 10 ? '0' : '') + d.getFullYear();

    var output2 = next_day + '/' +
            (month < 10 ? '0' : '') + month + '/' +
            (day < 10 ? '0' : '') + d.getFullYear();
});

$(".bg-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    autoplay: true
});

var h_header = $(".header").height();
$(window).scroll(function () {
    if ($(window).scrollTop() >= h_header) {
        $(".header").addClass('fixed-header');
    } else {
        $(".header").removeClass('fixed-header');
    }
});

$('input:radio[name="loai-ve"]').change(
  function() {
      var search_month = $("input[name='checkbox-search-months']").is(':checked');
      if ($(this).is(':checked') && $(this).val() == 'return') {
          $('.date-return').removeClass('hidden');
          if(search_month) {
            $("#box-search-month-back").show();
          }
      } else {
          $('.date-return').addClass('hidden');
          if(search_month) {
            $("#box-search-month-back").hide();
          }
      }
  });

$('input:radio[name="journey_1"]').change(
  function(){
    if ($(this).is(':checked') && $(this).val() == "2") {
        $('.ngay-ve-1').removeClass('hidden');
    } else {
        $('.ngay-ve-1').addClass('hidden');
    }
    $('input[name="journey"]').val($(this).val());
});

$('input:radio[name="journey_2"]').change(
  function(){
    if ($(this).is(':checked') && $(this).val() == "2") {
        $('.ngay-ve-2').removeClass('hidden');
    } else {
        $('.ngay-ve-2').addClass('hidden');
    }
    $('input[name="journey"]').val($(this).val());
});

$('#num-adault').on('change', function (e) {
    $('#num-adault-xs').val($(this).val());
    $('#adults').html($(this).val());
    _adults = parseInt($(this).val());
});

$('#num-child').on('change', function (e) {
    $('#num-child-xs').val($(this).val());
    $('#child').html($(this).val());
    _child = parseInt($(this).val());
});

$('#num-baby').on('change', function (e) {
    $('#num-baby-xs').val($(this).val());
    $('#baby').html($(this).val());
    _baby = parseInt($(this).val());
});

$( "input[type='datetime']" ).focus(function() {
  $(this).blur();
});

$( "#input-search-tours" ).focus(function() {
  $(this).blur();
});

$(".btn-tim-ve").click(function(e){

    localStorage.clear();

    var partner = $("#partner").val();
    var product_key = $("#product_key").val();

    var diem_den = $(".bt-diem-den span").data("code");
    var diem_di = $(".bt-diem-di span").data("code");

    var date_di_plain = $("#date_di").val();
    var date_di = $("#date_di").val();
    date_di = date_di.replace('/','');
    date_di = date_di.replace('/','');

    var date_ve_plain = $("#date_ve").val();
    var date_ve = $("#date_ve").val();
    date_ve = date_ve.replace('/','');
    date_ve = date_ve.replace('/','');

    var adault = $("#num-adault-xs").val();
    if(adault == undefined){
        adault = $("#num-adault").val();
    }

    var child = $("#num-child-xs").val();
    if(child == undefined){
        child = $("#num-child").val();
    }

    var baby = $("#num-baby-xs").val();
    if(baby == undefined){
        baby = $("#num-baby").val();
    }

    var loaive = $("input[name='loai-ve']:checked").val();
    var itineraryType = 1;
    if(loaive == 'return' && date_ve != null && date_ve != "") {
      itineraryType = 2;
    }

    var search_month = $("input[name='checkbox-search-months']").is(':checked');
    var search_month_go = $("select[name='select-search-month-go']").val();
    var search_month_back = $("select[name='select-search-month-back']").val();

    var html_diem_di = $(".bt-diem-di span").html();
    var html_diem_den = $(".bt-diem-den span").html();
    localStorage.setItem("diemdi", html_diem_di);
    localStorage.setItem("diemden", html_diem_den);
    localStorage.setItem("codediemdi", diem_di);
    localStorage.setItem("codediemden", diem_den);
    localStorage.setItem("date_di", date_di_plain);
    localStorage.setItem("date_ve", date_ve_plain);
    localStorage.setItem("adault", adault);
    localStorage.setItem("child", child);
    localStorage.setItem("baby", baby);
    localStorage.setItem("itineraryType", loaive);

    if(partner == 'maybaytech') {
      $.post("https://ibev3.webvemaybay.com/Modulerequest.ashx", {
        Adt: adault,
        Chd: child,
        Departure: diem_di,
        DepartureDate: date_di_plain, 
        Destination: diem_den,
        Inf: baby,
        ItineraryType: itineraryType,
        ReturnDate: date_ve_plain,
        fn: "search",
        languageCode: "vi-VN",
        m: "searchbox",
        productKey: product_key
      }).done(function (data, status) {
        var ref = $.parseJSON(data);
        if(ref.Success == true && ref.Data != null) {
           window.location = ref.Data; 
        } else {
          alert(ref.Message);
        }
      });

    } else {
      if(itineraryType == 2){
          // window.location.href = "/flight?Request="+diem_di+"-"+diem_den+"-"+date_di+"-"+date_ve+"-"+adault+"-"+child+"-"+baby;
          window.location.href = "/flight?Request="+diem_di+diem_den+date_di+"-"+diem_den+diem_di+date_ve+"-"+adault+"-"+child+"-"+baby;
          if(search_month) {
            window.location.href = "/flight?Request="+diem_di+diem_den+search_month_go+"-"+diem_den+diem_di+search_month_back+"-"+adault+"-"+child+"-"+baby;
          }
      } else {
          // window.location.href = "/flight?Request="+diem_di+"-"+diem_den+"-"+date_di+"-"+adault+"-"+child+"-"+baby;
          window.location.href = "/flight?Request="+diem_di+diem_den+date_di+"-"+adault+"-"+child+"-"+baby;
          if(search_month) {
            window.location.href = "/flight?Request="+diem_di+diem_den+search_month_go+"-"+adault+"-"+child+"-"+baby;
          }
      }
    }
})

var timeout;
/*
$(".list-cate ul li a").click(function (e) {
    e.preventDefault();
    
    $(".list-cate ul li a").removeClass("selected");
    $(this).addClass("selected");

    var keywords = get_keywords();
    clearTimeout(timeout);
    if (keywords) {
        timeout = setTimeout(function () {
            search();
        }, 1000);
    }
});
*/

$("#search-btn").click(function () {
    search();
});

$("#keywords-search").keypress(function (e) {
    if (e.which == 10 || e.which == 13) {
        search();
    }
});

var timeout_;
var old_keywords = get_keywords();
$("#keywords-search").keyup(function (e) {
    clearTimeout(timeout_);
    var keywords = get_keywords();
    
    if (keywords != old_keywords) {
        timeout_ = setTimeout(function () {
            old_keywords = keywords;
            search();
        }, 1000);
    }
});

function get_keywords() {
    var keywords = $("#keywords-search").val();
    if (keywords) {
        keywords = keywords.replace(/ /g, '+');
        keywords = keywords.replace(/\?/g, '');
        keywords = keywords.replace(/\&/g, '');

        return keywords.trim();
    }
    return '';
}

function search() {
    var keywords = get_keywords();
    var cate_id = $(".list-cate ul li a.selected").data("code") || 0;

    if (keywords) {
        window.location.assign("/tim-kiem/" + cate_id + "?q=" + keywords);
    }
}

$('form').submit(function(){
    $(this).find(':input[type=submit]').prop('disabled', true);
    $(this).find(':button[type=submit]').prop('disabled', true);
});


function returnCheapFlight(id) {
    var partner = $("#cheap_partner").val();
    var product_key = $("#cheap_product_key").val();

    var diem_di = $("#start_code_" + id).val();
    var diem_den = $("#destination_code_" + id).val();

    var date_di_plain = $("#start_date_" + id).val();
    var date_di = $("#start_date_" + id).val();
    date_di = date_di.replace('/','');
    date_di = date_di.replace('/','');

    var date_ve = "";
    var date_ve_plain = "";
    var itineraryType = 1;

    var adault = 1;
    var child = 0;
    var baby = 0;

    if(partner == 'maybaytech') {
      $.post("https://ibev3.webvemaybay.com/Modulerequest.ashx", {
        Adt: adault,
        Chd: child,
        Departure: diem_di,
        DepartureDate: date_di_plain, 
        Destination: diem_den,
        Inf: baby,
        ItineraryType: itineraryType,
        ReturnDate: date_ve_plain,
        fn: "search",
        languageCode: "vi-VN",
        m: "searchbox",
        productKey: product_key
      }).done(function (data, status) {
        var ref = $.parseJSON(data);
        if(ref.Success == true && ref.Data != null) {
           window.location = ref.Data; 
        } else {
          alert(ref.Message);
        }
      });

    } else {
      if(date_ve){
          // window.location.href = "/flight?Request="+diem_di+"-"+diem_den+"-"+date_di+"-"+date_ve+"-"+adault+"-"+child+"-"+baby;
          window.location.href = "/flight?Request="+diem_di+diem_den+date_di+"-"+diem_den+diem_di+date_ve+"-"+adault+"-"+child+"-"+baby;
      } else {
          // window.location.href = "/flight?Request="+diem_di+"-"+diem_den+"-"+date_di+"-"+adault+"-"+child+"-"+baby;
          window.location.href = "/flight?Request="+diem_di+diem_den+date_di+"-"+adault+"-"+child+"-"+baby;
      }
    }
}

$("#email_promotion").submit(function(event) {

  /* stop form from submitting normally */
  event.preventDefault();

  /* get the action attribute from the <form action=""> element */
  var $form = $( this ),
      url = $form.attr( 'action' );

  /* Send the data using post with element id name and name2*/
  var posting = $.post( url, { email_promotion: $('input[name="email_promotion"]').val() } );

  /* Alerts the results */
  posting.done(function( data ) {
    var obj = jQuery.parseJSON( data );
    if(parseInt(obj.code) == 1) {
      $('#register-email-success').show();
      $('#register-email-error').hide();
    } else {
      $('#register-email-success').hide();
      $('#register-email-error').show();
    }
    $form.find(':button[type=submit]').prop('disabled', false);
  });
});

var _adults = 1;
var _child = 0;
var _baby = 0;

// Adult
$("#adults_plus").click(function(e){ 
  e.preventDefault();
  $("#adults_minus").prop('disabled', false);
  if(_adults < 9 && Number.isInteger(_adults)) {
    _adults++; 
    $('#adults').html(_adults);
    $('#num-adault-xs').val(_adults);
    $("#num-adault").val(_adults).change();
  } else {

    // alert('S??? h??nh kh??ch ng?????i l???n t???i ??a l?? 9');

    $(this).prop('disabled', true);
    $("#adults_minus").prop('disabled', false);
  }
  
});

$("#adults_minus").click(function(e){ 
  e.preventDefault();
  $("#adults_plus").prop('disabled', false);
  if (_adults > 1 && Number.isInteger(_adults)) {
    _adults--; 
    $('#adults').html(_adults);
    $('#num-adault-xs').val(_adults);
    $("#num-adault").val(_adults).change();
  } else {
    $(this).prop('disabled', true);
    $("#adults_plus").prop('disabled', false);
  }
  
});
// End Adult

// Child
$("#child_plus").click(function(e){ 
  e.preventDefault();
  $("#child_minus").prop('disabled', false);
  if(_child < 9 && Number.isInteger(_child)) {
    _child++; 
    $('#child').html(_child);
    $('#num-child-xs').val(_child);
    $("#num-child").val(_child).change();
  } else {

    // alert('S??? h??nh kh??ch tr??? em t???i ??a l?? 9');

    $(this).prop('disabled', true);
    $("#child_minus").prop('disabled', false);
  }

});

$("#child_minus").click(function(e){ 
  $("#child_plus").prop('disabled', false);
  if(_child > 0 && Number.isInteger(_child)) {
    _child--; 
    $('#child').html(_child);
    $('#num-child-xs').val(_child);
    $("#num-child").val(_child).change();
  } else {
    $(this).prop('disabled', true);
    $("#child_plus").prop('disabled', false);
  }
});
// End Child

// Baby
$("#baby_plus").click(function(e){ 
  e.preventDefault();
  $("#baby_minus").prop('disabled', false);
  if(_baby < 2 && Number.isInteger(_baby)) {
    _baby++; 
    $('#baby').html(_baby);
    $('#num-baby-xs').val(_baby);
    $("#num-baby").val(_baby).change();
  } else {

    // alert('S??? h??nh kh??ch em b?? t???i ??a l?? 2');

    $(this).prop('disabled', true);
    $("#baby_minus").prop('disabled', false);
  }

});

$("#baby_minus").click(function(e){ 
  $("#baby_plus").prop('disabled', false);
  if(_baby > 0 && Number.isInteger(_baby)) {
    _baby--; 
    $('#baby').html(_baby);
    $('#num-baby-xs').val(_baby);
    $("#num-baby").val(_baby).change();
  } else {
    $(this).prop('disabled', true);
    $("#baby_plus").prop('disabled', false);
  }

});

$("#date_ve, #date_ve_taxi, #date_ve_road").click(function(){
  if ($(window).width() < 768) {
      $("#main-nav").hide();
      $(".header").removeClass("nav-up");
      $("#main-nav-date").show().find("span").html("Ch???n ng??y ??i");
      $(".overlay-body").show();
      $("body, html").addClass("overflow_hidden");
      document.body.addEventListener("touchmove", freezeVp, false);
      $("body,html").animate({
          scrollTop: 0
      }, 100);
    }
});

$("#date_di, #start_date, #date_di_taxi, #date_di_road").click(function(){
  if ($(window).width() < 768) {
      $("#main-nav").hide();
      $(".header").removeClass("nav-up");
      $("#main-nav-date").show().find("span").html("Ch???n ng??y v???");
      $(".overlay-body").show();
      $("body, html").addClass("overflow_hidden");
      document.body.addEventListener("touchmove", freezeVp, false);
      $("body,html").animate({
          scrollTop: 0
      }, 100);
    }
});

function overflowHidden() {
  $("body").css("overflow", "hidden");
  $("body").css("position", "fixed");
}

var _num_people = 1;

$('#num_people').on('change', function (e) {
    $('#num-people-xs').val($(this).val());
    $('#people').val($(this).val());
    _num_people = parseInt($(this).val());
});

$("#num_people_plus").click(function(e){ 
  e.preventDefault();
  $("#num_people_minus").prop('disabled', false);
  if(_num_people < 10 && Number.isInteger(_num_people)) {
    _num_people++; 
    $('#people_html').html(_num_people);
    $('#people').val(_num_people);
    $("#num_people").val(_num_people).change();
  } else {
    $(this).prop('disabled', true);
    $("#num_people_minus").prop('disabled', false);
  }
});

$("#num_people_minus").click(function(e){ 
  $("#num_people_plus").prop('disabled', false);
  if(_num_people > 1 && Number.isInteger(_num_people)) {
    _num_people--; 
    $('#people_html').html(_num_people);
    $('#people').val(_num_people);
    $("#num_people").val(_num_people).change();
  } else {
    $(this).prop('disabled', true);
    $("#num_people_plus").prop('disabled', false);
  }
});

$("#input-search-tours").click(function(){
    if (($(".box-search-tours").hasClass('open'))) {
        $(".box-search-tours").removeClass('open');
    }
    $(this).parent().addClass('open');
    if ($(window).width() < 768) {
      $("body").css("overflow", "hidden");
    }
});

$("#form_book_taxi, #form_book_road, #booktour").submit(function(event) {

  event.preventDefault();

  var $form = $( this ),
      url = $form.attr( 'action' );

  var posting = $.post( url, $form.serialize() );

  posting.done(function( data ) {
    var obj = jQuery.parseJSON( data );
    if(parseInt(obj.code) == 1) {
      $form.find('input[type="text"]').val("");
      $form.find('input[type="tel"]').val("");
      $form.find('input[type="email"]').val("");
      $form.parent().find('#alert_book_error').hide();
      $form.parent().find('#alert_book_success').empty().show().html(obj.msg).delay(6000).fadeOut(300);
    } else {
      $form.parent().find('#alert_book_success').hide();
      $form.parent().find('#alert_book_error').empty().show().html(obj.msg).delay(6000).fadeOut(300);
    }

    $("#confirm_rail_success").show();
    $("#booktour").hide();
    $(".jrp-step-bar .step:nth-child(2)").addClass("active");
    $(".jrp-step-bar .step:nth-child(3) b").addClass("active");

    $form.find(':button[type=submit]').prop('disabled', false);
  });
});

var date_start= $('input[name="start_date"]'); 
var date_input = $('input[name="date_di"]');
var date_input_ve = $('input[name="date_ve"]');
var date_di_taxi=$('input[name="date_di_taxi"]'); 
var date_ve_taxi=$('input[name="date_ve_taxi"]'); 
var date_di_road=$('input[name="date_di_road"]'); 
var date_ve_road=$('input[name="date_ve_road"]'); 

var options = {
    format: 'dd/mm/yyyy',
    autoclose: true,
    language: 'vi',
    todayBtn: 'linked',
    todayHighlight: true,
    startDate: '-0d',
    changeMonth: true,
    stepMonths: 0
};

var freezeVp = function(e) {
    e.preventDefault();
};

$("#main-nav-date i").click(function () {
  close_datetime_picker();
});

function close_datetime_picker() {
  date_start.datepicker("hide");
  date_input.datepicker("hide");
  date_input_ve.datepicker("hide");
  date_di_taxi.datepicker("hide");
  date_ve_taxi.datepicker("hide");
  date_di_road.datepicker("hide");
  date_ve_road.datepicker("hide");
  $("body, html").removeClass("overflow_hidden");
  $('body, html').removeAttr('style');
  $('body, html').removeAttr('onclick');
  $("#main-nav").show();
  $("#main-nav-date").hide();
  $(".overlay-body").hide();
}

function appendLunaCalendar() {
  $.each($("td.day"), function( index, value ) {
      $(this).html('');
      var strtotime = $(this).attr('data-date');
      var day = $(this).html();
      var date = new Date(parseInt(strtotime));

      var days = date.getDate();
      var months = parseInt(date.getMonth()) + 1;
      var years = date.getFullYear();

      var datetime_lunar = convertSolar2Lunar(parseInt(days), parseInt(months), parseInt(years), parseInt(7.0));

      var days_lunar = datetime_lunar[0];
      if(parseInt(days_lunar) == 1) {
          days_lunar = datetime_lunar[0] + '/' + datetime_lunar[1];
      } else {
         days_lunar = datetime_lunar[0];
      }

      /*
      if(parseInt(days) == 1) {
          days = days + '/' + months;
      } else {
          days = date.getDate();
      }
      */
      
      $(this).html('<label class="cld">'+days+'</label><label class="cld_lunar">'+days_lunar+'</label>');

      if($(this).parent().find('td.new.day').length == 7) {
        $(this).parent().addClass('hide');
      }
      if($(this).parent().find('td.old.day').length == 7) {
        $(this).parent().addClass('hide');
      }

      $(this).parent().find('td.old.day').addClass('disabled');
      $(this).parent().find('td.new.day').addClass('disabled');
  });
}

function showHidePrevCalendar(datetime) {
  var calendarDate = new Date(datetime);
  var _calendarMonth = calendarDate.getMonth();
  var _calendarYear = calendarDate.getFullYear();

  var currentDate = new Date();
  var _currentMonth = currentDate.getMonth();
  var _currentYear = currentDate.getFullYear();

  if(_calendarMonth == _currentMonth && _calendarYear == _currentYear) {
    $("th.prev").addClass("hide_prev_calendar").removeClass("show_prev_calendar");
    $("th.prev").parent("tr").addClass("border_ccc");
  } else {
    $("th.prev").addClass("show_prev_calendar").removeClass("hide_prev_calendar");
    $("th.prev").parent("tr").removeClass("border_ccc");
  }
}

function onDateTimePicker() {
    date_start.datepicker(options);
    date_input.datepicker(options);
    date_input_ve.datepicker(options);

    // Date start
    $(date_start).datepicker().on('show', function(e) {
        if ($(window).width() < 768) {
          $("#main-nav").hide();
          $(".header").removeClass("nav-up");
          $("#main-nav-date").show().find("span").html("Ch???n ng??y ??i");
          $(".overlay-body").show();
          $("body,html").addClass("overflow_hidden");
          document.body.addEventListener("touchmove", freezeVp, false);
          $("body,html").animate({
              scrollTop: 0
          }, 100);
        }
        showHidePrevCalendar(e.dates);
        appendLunaCalendar();
        $(".datepicker .next").html('<i class="fa fa-arrow-right" aria-hidden="true"></i>');
        $(".datepicker .prev").html('<i class="fa fa-arrow-left" aria-hidden="true"></i>');
    });
    $(date_start).datepicker().on('changeMonth', function(e) {
      setTimeout(function(){ 
        showHidePrevCalendar(e.date);
        appendLunaCalendar(); 
      }, 10);
    });
    $(date_start).datepicker().on('changeYear', function(e) {
      setTimeout(function(){ appendLunaCalendar(); }, 10);
    });
    $(date_start).datepicker().on('changeDecade', function(e) {
      setTimeout(function(){ appendLunaCalendar(); }, 10);
    });
    $(date_start).datepicker().on('changeCentury', function(e) {
      setTimeout(function(){ appendLunaCalendar(); }, 10);
    });

    // Date dat ve di
    $(date_input).datepicker().on('show', function(e) {
        if ($(window).width() < 768) {
          e.preventDefault();
          $("#main-nav").hide();
          $(".header").removeClass("nav-up");
          $("#main-nav-date").show().find("span").html("Ch???n ng??y ??i");
          $(".overlay-body").show();
          $("body,html").addClass("overflow_hidden");
          document.body.addEventListener("touchmove", freezeVp, false);
          $("body,html").animate({
              scrollTop: 0
          }, 100);
        }
        showHidePrevCalendar(e.dates);
        appendLunaCalendar();
        $(".datepicker .next").html('<i class="fa fa-arrow-right" aria-hidden="true"></i>');
        $(".datepicker .prev").html('<i class="fa fa-arrow-left" aria-hidden="true"></i>');
    });
    $(date_input).datepicker().on('changeMonth', function(e) {
        setTimeout(function(){ 
          showHidePrevCalendar(e.date);
          appendLunaCalendar(); 
        }, 10);
    });
    $(date_input).datepicker().on('changeYear', function(e) {
        setTimeout(function(){ appendLunaCalendar(); }, 10);
    });
    $(date_input).datepicker().on('changeDecade', function(e) {
        setTimeout(function(){ appendLunaCalendar(); }, 10);
    });
    $(date_input).datepicker().on('changeCentury', function(e) {
        setTimeout(function(){ appendLunaCalendar(); }, 10);
    });

    // Date dat ve ve
    $(date_input_ve).datepicker().on('show', function(e) {
        if ($(window).width() < 768) {
          $("#main-nav").hide();
          $(".header").removeClass("nav-up");
          $("#main-nav-date").show().find("span").html("Ch???n ng??y v???");
          $(".overlay-body").show();
          $("body,html").addClass("overflow_hidden");
          document.body.addEventListener("touchmove", freezeVp, false);
          $("body,html").animate({
              scrollTop: 0
          }, 100);
        }
        showHidePrevCalendar(e.dates);
        appendLunaCalendar();
        $(".datepicker .next").html('<i class="fa fa-arrow-right" aria-hidden="true"></i>');
        $(".datepicker .prev").html('<i class="fa fa-arrow-left" aria-hidden="true"></i>');
    });
    $(date_input_ve).datepicker().on('changeMonth', function(e) {
        setTimeout(function(){ 
          showHidePrevCalendar(e.date);
          appendLunaCalendar(); 
        }, 10);
    });
    $(date_input_ve).datepicker().on('changeYear', function(e) {
        setTimeout(function(){ appendLunaCalendar(); }, 10);
    });
    $(date_input_ve).datepicker().on('changeDecade', function(e) {
        setTimeout(function(){ appendLunaCalendar(); }, 10);
    });
    $(date_input_ve).datepicker().on('changeCentury', function(e) {
        setTimeout(function(){ appendLunaCalendar(); }, 10);
    });

    var datetime_calendar_go = date_input.val();
    if(datetime_calendar_go) {
        var arr_d_m_y_go = datetime_calendar_go.split("/");
        var datetime_lunar_go = convertSolar2Lunar(parseInt(arr_d_m_y_go[0]), parseInt(arr_d_m_y_go[1]), parseInt(arr_d_m_y_go[2]), parseInt(7.0));
        var luna_go_string = getDateVi(parseInt(arr_d_m_y_go[1]) + '/' + parseInt(arr_d_m_y_go[0]) + '/' + parseInt(arr_d_m_y_go[2])) + ' ' + datetime_lunar_go[0] + '/' + datetime_lunar_go[1];
        $(".lunar-go").html('??m l???ch: ' + luna_go_string + '');
    }

    date_start.change(function(){
        if($(".tab-ve-ks").length && $(window).width() < 768) {
          $('html, body').animate({
              scrollTop: $(".tab-ve-ks").offset().top
          }, 100);
        }
        close_datetime_picker();
        $(".form-date").removeClass('open');
        $('body,html').removeAttr('style');
        $('body,html').removeAttr('onclick');
    });

    date_input.change(function(){
        var _datetime_calendar_go = $(this).val();
        if(_datetime_calendar_go) {
          var _arr_d_m_y_go = _datetime_calendar_go.split("/");
          var _datetime_lunar_go = convertSolar2Lunar(parseInt(_arr_d_m_y_go[0]), parseInt(_arr_d_m_y_go[1]), parseInt(_arr_d_m_y_go[2]), parseInt(7.0));
          var _luna_go_string = getDateVi(parseInt(_arr_d_m_y_go[1]) + '/' +  parseInt(_arr_d_m_y_go[0]) + '/' + parseInt(_arr_d_m_y_go[2])) + ' ' + _datetime_lunar_go[0] + '/' + _datetime_lunar_go[1];
          $(".lunar-go").show();
          $(".lunar-go").html('??m l???ch: ' + _luna_go_string + '');

          var date_ve = $("#date_ve").val();
          var _arr_d_m_y_ve = date_ve.split("/");

          var _date_di_ = new Date(_arr_d_m_y_go[2], parseInt(_arr_d_m_y_go[1], 10) - 1, _arr_d_m_y_go[0], "00", "00");
          var _date_ve_ = new Date(_arr_d_m_y_ve[2], parseInt(_arr_d_m_y_ve[1], 10) - 1, _arr_d_m_y_ve[0], "00", "00");

          if(_date_di_ >= _date_ve_) {
            var date_ve_next = (parseInt(_arr_d_m_y_go[0]) + 1) + "/" + parseInt(_arr_d_m_y_go[1])  + "/" +parseInt(_arr_d_m_y_go[2]);
            $("#date_ve").val(date_ve_next);
            $("#date_ve").datepicker('setStartDate', _datetime_calendar_go);
            $("#date_ve").datepicker('setDate', date_ve_next);
          } else {
            $("#date_ve").datepicker('setStartDate', _datetime_calendar_go);
          }
        }

        if($(".tab-ve-ks").length && $(window).width() < 768) {
          $('html, body').animate({
              scrollTop: $(".tab-ve-ks").offset().top
          }, 100);
        }
        close_datetime_picker();
        $(".form-date").removeClass('open');
        $('body,html').removeAttr('style');
        $('body,html').removeAttr('onclick');
    });

    date_input_ve.change(function(){
        var _datetime_calendar_back = $(this).val();
        if(_datetime_calendar_back) {
          var _arr_d_m_y_back = _datetime_calendar_back.split("/");

          /* Validate dateve > datedi */
          var date_di = $("#date_di").val();
          var _arr_d_m_y_di = date_di.split("/");
          
          var _date_di_ = new Date(_arr_d_m_y_di[2], parseInt(_arr_d_m_y_di[1], 10) - 1, _arr_d_m_y_di[0], "00", "00");
          var _date_ve_ = new Date(_arr_d_m_y_back[2], parseInt(_arr_d_m_y_back[1], 10) - 1, _arr_d_m_y_back[0], "00", "00");

          if(_date_di_ > _date_ve_) {
            alert("Ng??y v??? ph???i b???ng ho???c sau ng??y ??i");
            var _date_ve_next = (parseInt(_arr_d_m_y_di[0]) + 1) + "/" + parseInt(_arr_d_m_y_di[1])  + "/" +parseInt(_arr_d_m_y_di[2]);
            $("#date_ve").val(_date_ve_next);
            $("#date_ve").datepicker('setStartDate', date_di);
            $("#date_ve").datepicker('setDate', _date_ve_next);
            $(".form-date").removeClass('open');
            $('body,html').removeAttr('style');
            $('body,html').removeAttr('onclick');
            return false;
          }
          /* Validate dateve > datedi */

          var _datetime_lunar_back = convertSolar2Lunar(parseInt(_arr_d_m_y_back[0]), parseInt(_arr_d_m_y_back[1]), parseInt(_arr_d_m_y_back[2]), parseInt(7.0));
          var _luna_back_string = getDateVi(parseInt(_arr_d_m_y_back[1]) + '/' + parseInt(_arr_d_m_y_back[0]) + '/' + parseInt(_arr_d_m_y_back[2])) + ' ' + _datetime_lunar_back[0] + '/' + _datetime_lunar_back[1];
          $(".lunar-back").show();
          $(".lunar-back").html('??m l???ch: ' + _luna_back_string + '');
        }

        if($(".tab-ve-ks").length && $(window).width() < 768) {
          $('html, body').animate({
              scrollTop: $(".tab-ve-ks").offset().top
          }, 100);
        }
        close_datetime_picker();
        $(".form-date").removeClass('open');
        $('body,html').removeAttr('style');
        $('body,html').removeAttr('onclick');
    });
}

function onDateTimePickerHome() {
  date_di_taxi.datepicker(options);
  date_ve_taxi.datepicker(options);
  date_di_road.datepicker(options);
  date_ve_road.datepicker(options);

  $(date_di_taxi).datepicker().on('show', function(e) {
      if ($(window).width() < 768) {
        $("#main-nav").hide();
        $(".header").removeClass("nav-up");
        $("#main-nav-date").show().find("span").html("Ch???n ng??y ??i");
        $(".overlay-body").show();
        $("body, html").addClass("overflow_hidden");
        $("body,html").animate({
            scrollTop: 0
        }, 100);
      }
      showHidePrevCalendar(e.dates);
      appendLunaCalendar();
      $(".datepicker .next").html('<i class="fa fa-arrow-right" aria-hidden="true"></i>');
      $(".datepicker .prev").html('<i class="fa fa-arrow-left" aria-hidden="true"></i>');
  });
  $(date_di_taxi).datepicker().on('changeMonth', function(e) {
    setTimeout(function(){ 
      showHidePrevCalendar(e.date);
      appendLunaCalendar(); 
    }, 10);
  });
  $(date_di_taxi).datepicker().on('changeYear', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });
  $(date_di_taxi).datepicker().on('changeDecade', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });
  $(date_di_taxi).datepicker().on('changeCentury', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });

  $(date_ve_taxi).datepicker().on('show', function(e) {
      if ($(window).width() < 768) {
        $("#main-nav").hide();
        $(".header").removeClass("nav-up");
        $("#main-nav-date").show().find("span").html("Ch???n ng??y v???");
        $(".overlay-body").show();
        $("body, html").addClass("overflow_hidden");
        document.body.addEventListener("touchmove", freezeVp, false);
        $("body,html").animate({
            scrollTop: 0
        }, 100);
      }
      showHidePrevCalendar(e.dates);
      appendLunaCalendar();
      $(".datepicker .next").html('<i class="fa fa-arrow-right" aria-hidden="true"></i>');
      $(".datepicker .prev").html('<i class="fa fa-arrow-left" aria-hidden="true"></i>');
  });
  $(date_ve_taxi).datepicker().on('changeMonth', function(e) {
    setTimeout(function(){ 
      showHidePrevCalendar(e.date);
      appendLunaCalendar(); 
    }, 10);
  });
  $(date_ve_taxi).datepicker().on('changeYear', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });
  $(date_ve_taxi).datepicker().on('changeDecade', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });
  $(date_ve_taxi).datepicker().on('changeCentury', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });

  $(date_di_road).datepicker().on('show', function(e) {
      if ($(window).width() < 768) {
        $("#main-nav").hide();
        $(".header").removeClass("nav-up");
        $("#main-nav-date").show().find("span").html("Ch???n ng??y ??i");
        $(".overlay-body").show();
        $("body, html").addClass("overflow_hidden");
        document.body.addEventListener("touchmove", freezeVp, false);
        $("body,html").animate({
            scrollTop: 0
        }, 100);
      }
      showHidePrevCalendar(e.dates);
      appendLunaCalendar();
      $(".datepicker .next").html('<i class="fa fa-arrow-right" aria-hidden="true"></i>');
      $(".datepicker .prev").html('<i class="fa fa-arrow-left" aria-hidden="true"></i>');
  });
  $(date_di_road).datepicker().on('changeMonth', function(e) {
    setTimeout(function(){ 
      showHidePrevCalendar(e.date);
      appendLunaCalendar(); 
    }, 10);
  });
  $(date_di_road).datepicker().on('changeYear', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });
  $(date_di_road).datepicker().on('changeDecade', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });
  $(date_di_road).datepicker().on('changeCentury', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });

  $(date_ve_road).datepicker().on('show', function(e) {
      if ($(window).width() < 768) {
        $("#main-nav").hide();
        $(".header").removeClass("nav-up");
        $("#main-nav-date").show().find("span").html("Ch???n ng??y v???");
        $(".overlay-body").show();
        $("body, html").addClass("overflow_hidden");
        document.body.addEventListener("touchmove", freezeVp, false);
        $("body,html").animate({
            scrollTop: 0
        }, 100);
      }
      showHidePrevCalendar(e.dates);
      appendLunaCalendar();
      $(".datepicker .next").html('<i class="fa fa-arrow-right" aria-hidden="true"></i>');
      $(".datepicker .prev").html('<i class="fa fa-arrow-left" aria-hidden="true"></i>');
  });
  $(date_ve_road).datepicker().on('changeMonth', function(e) {
    setTimeout(function(){ 
      showHidePrevCalendar(e.date);
      appendLunaCalendar(); 
    }, 10);
  });
  $(date_ve_road).datepicker().on('changeYear', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });
  $(date_ve_road).datepicker().on('changeDecade', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });
  $(date_ve_road).datepicker().on('changeCentury', function(e) {
    setTimeout(function(){ appendLunaCalendar(); }, 10);
  });

  date_di_road.change(function(){
      var _datetime_calendar_go = $(this).val();
      if(_datetime_calendar_go) {
        var _arr_d_m_y_go = _datetime_calendar_go.split("/");

        var date_ve = $("#date_ve_road").val();
        var _arr_d_m_y_ve = date_ve.split("/");

        var _date_di_ = new Date(_arr_d_m_y_go[2], parseInt(_arr_d_m_y_go[1], 10) - 1, _arr_d_m_y_go[0], "00", "00");
        var _date_ve_ = new Date(_arr_d_m_y_ve[2], parseInt(_arr_d_m_y_ve[1], 10) - 1, _arr_d_m_y_ve[0], "00", "00");

        if(_date_di_ >= _date_ve_) {
          var date_ve_next = (parseInt(_arr_d_m_y_go[0]) + 1) + "/" + parseInt(_arr_d_m_y_go[1])  + "/" +parseInt(_arr_d_m_y_go[2]);
          $("#date_ve_road").val(date_ve_next);
          $("#date_ve_road").datepicker('setStartDate', _datetime_calendar_go);
          $("#date_ve_road").datepicker('setDate', date_ve_next);
        } else {
          $("#date_ve_road").datepicker('setStartDate', _datetime_calendar_go);
        }
      }

      if($(".tab-ve-ks").length && $(window).width() < 768) {
          $('html, body').animate({
              scrollTop: $(".tab-ve-ks").offset().top
          }, 100);
        }
      close_datetime_picker();
      $(".form-date").removeClass('open');
      $('body, html').removeAttr('style');
      $('body, html').removeAttr('onclick');
      return false;
  });

  date_ve_road.change(function(){
      var _datetime_calendar_back = $(this).val();
      if(_datetime_calendar_back) {
        var _arr_d_m_y_back = _datetime_calendar_back.split("/");

        /* Validate dateve > datedi */
        var date_di = $("#date_di_road").val();
        var _arr_d_m_y_di = date_di.split("/");
        
        var _date_di_ = new Date(_arr_d_m_y_di[2], parseInt(_arr_d_m_y_di[1], 10) - 1, _arr_d_m_y_di[0], "00", "00");
        var _date_ve_ = new Date(_arr_d_m_y_back[2], parseInt(_arr_d_m_y_back[1], 10) - 1, _arr_d_m_y_back[0], "00", "00");

        if(_date_di_ > _date_ve_) {
          alert("Ng??y v??? ph???i b???ng ho???c sau ng??y ??i");
          var _date_ve_next = (parseInt(_arr_d_m_y_di[0]) + 1) + "/" + parseInt(_arr_d_m_y_di[1])  + "/" +parseInt(_arr_d_m_y_di[2]);
          $("#date_ve_road").val(_date_ve_next);
          $("#date_ve_road").datepicker('setStartDate', date_di);
          $("#date_ve_road").datepicker('setDate', _date_ve_next);
          $(".form-date").removeClass('open');
          $('body, html').removeAttr('style');
          $('body, html').removeAttr('onclick');
          return false;
        }
        /* Validate dateve > datedi */
      }

      if($(".tab-ve-ks").length && $(window).width() < 768) {
          $('html, body').animate({
              scrollTop: $(".tab-ve-ks").offset().top
          }, 100);
        }
      close_datetime_picker();
      $(".form-date").removeClass('open');
      $('body, html').removeAttr('style');
      $('body, html').removeAttr('onclick');
      return false;
  }); 

  date_di_taxi.change(function(){
      var _datetime_calendar_go = $(this).val();
      if(_datetime_calendar_go) {
        var _arr_d_m_y_go = _datetime_calendar_go.split("/");

        var date_ve = $("#date_ve_taxi").val();
        var _arr_d_m_y_ve = date_ve.split("/");

        var _date_di_ = new Date(_arr_d_m_y_go[2], parseInt(_arr_d_m_y_go[1], 10) - 1, _arr_d_m_y_go[0], "00", "00");
        var _date_ve_ = new Date(_arr_d_m_y_ve[2], parseInt(_arr_d_m_y_ve[1], 10) - 1, _arr_d_m_y_ve[0], "00", "00");

        if(_date_di_ >= _date_ve_) {
          var date_ve_next = (parseInt(_arr_d_m_y_go[0]) + 1) + "/" + parseInt(_arr_d_m_y_go[1])  + "/" +parseInt(_arr_d_m_y_go[2]);
          $("#date_ve_taxi").val(date_ve_next);
          $("#date_ve_taxi").datepicker('setStartDate', _datetime_calendar_go);
          $("#date_ve_taxi").datepicker('setDate', date_ve_next);
        } else {
          $("#date_ve_taxi").datepicker('setStartDate', _datetime_calendar_go);
        }
      }

      if($(".tab-ve-ks").length && $(window).width() < 768) {
          $('html, body').animate({
              scrollTop: $(".tab-ve-ks").offset().top
          }, 100);
        }
      close_datetime_picker();
      $(".form-date").removeClass('open');
      $('body, html').removeAttr('style');
      $('body, html').removeAttr('onclick');
      return false;
  });

  date_ve_taxi.change(function(){
      var _datetime_calendar_back = $(this).val();
      if(_datetime_calendar_back) {
        var _arr_d_m_y_back = _datetime_calendar_back.split("/");

        /* Validate dateve > datedi */
        var date_di = $("#date_di_taxi").val();
        var _arr_d_m_y_di = date_di.split("/");
        
        var _date_di_ = new Date(_arr_d_m_y_di[2], parseInt(_arr_d_m_y_di[1], 10) - 1, _arr_d_m_y_di[0], "00", "00");
        var _date_ve_ = new Date(_arr_d_m_y_back[2], parseInt(_arr_d_m_y_back[1], 10) - 1, _arr_d_m_y_back[0], "00", "00");

        if(_date_di_ > _date_ve_) {
          alert("Ng??y v??? ph???i b???ng ho???c sau ng??y ??i");
          var _date_ve_next = (parseInt(_arr_d_m_y_di[0]) + 1) + "/" + parseInt(_arr_d_m_y_di[1])  + "/" +parseInt(_arr_d_m_y_di[2]);
          $("#date_ve_taxi").val(_date_ve_next);
          $("#date_ve_taxi").datepicker('setStartDate', date_di);
          $("#date_ve_taxi").datepicker('setDate', _date_ve_next);
          $(".form-date").removeClass('open');
          $('body, html').removeAttr('style');
          $('body, html').removeAttr('onclick');
          return false;
        }
        /* Validate dateve > datedi */
      }

      if($(".tab-ve-ks").length && $(window).width() < 768) {
          $('html, body').animate({
              scrollTop: $(".tab-ve-ks").offset().top
          }, 100);
        }
      close_datetime_picker();
      $(".form-date").removeClass('open');
      $('body, html').removeAttr('style');
      $('body, html').removeAttr('onclick');
      return false;
  }); 
}

function filterDateback() {
  var _datetime_calendar_go = $("#date_di").val();
    if(_datetime_calendar_go && ($("#date_ve").val() == "") ){ 
      var _arr_d_m_y_go = _datetime_calendar_go.split("/");
      var date_ve_next = (parseInt(_arr_d_m_y_go[0]) + 1) + "/" + parseInt(_arr_d_m_y_go[1])  + "/" +parseInt(_arr_d_m_y_go[2]);
      $("#date_ve").val(date_ve_next);
      $("#date_ve").datepicker('setStartDate', _datetime_calendar_go);
      $("#date_ve").datepicker('setDate', date_ve_next);
      
      var _datetime_lunar_back = convertSolar2Lunar((parseInt(_arr_d_m_y_go[0]) + 1), parseInt(_arr_d_m_y_go[1]), parseInt(_arr_d_m_y_go[2]), parseInt(7.0));
      var _luna_back_string = getDateVi(parseInt(_arr_d_m_y_go[1]) + '/' + (parseInt(_arr_d_m_y_go[0]) + 1) + '/' + parseInt(_arr_d_m_y_go[2])) + ' ' + _datetime_lunar_back[0] + '/' + _datetime_lunar_back[1];
    
      $(".lunar-back").show();
      $(".lunar-back").html('??m l???ch: ' + _luna_back_string + '');
    }

    var date_ve = localStorage.getItem("date_ve");
    var journey_default = $("input[name='journey_default']").val();
    if(parseInt(journey_default) == 1 && (date_ve == null || date_ve == '' || typeof date_ve == 'undefined')) {
        $("#date_ve").val("");
        $("#date_ve").datepicker('setDate', "");
        
        $("input[name='loai-ve']").prop('checked', false);
        $("input[name='loai-ve'][value='no_return']").prop('checked', true);
        $('.date-return').addClass('hidden');
    }
}

function compareDate(datetime, history, datego, dateback) {
  var arr_d_m_y_go = datetime.split("/");

  var currentdate = new Date(); 
  var date2 = new Date();
  var date1 = new Date(arr_d_m_y_go[2], parseInt(arr_d_m_y_go[1], 10) - 1, arr_d_m_y_go[0], "00", "00");

  if(history) {
      if (date1.getTime() > date2.getTime()) {

        if(datego) {
          $("#date_di").val(datetime);
          $("#date_di").datepicker('setDate', datetime);
        }

        if(dateback) {
          var date_di = $("#date_di").val();
          $("#date_ve").val(datetime);
          $("#date_ve").datepicker('setStartDate', date_di);
          $("#date_ve").datepicker('setDate', datetime);
        }
        
      } else {
        var date_now = currentdate.getDate() + "/" + (parseInt(currentdate.getMonth()) + 1 )  + "/" + currentdate.getFullYear();
        
        if(datego) {
          $("#date_di").val(date_now);
          $("#date_di").datepicker('setDate', date_now);
        }

        if(dateback) {
          var date_di = $("#date_di").val();
          var date_now_next = (parseInt(currentdate.getDate()) + 1) + "/" + (parseInt(currentdate.getMonth()) + 1 )  + "/" + currentdate.getFullYear();
          $("#date_ve").val(date_now_next);
          $("#date_ve").datepicker('setStartDate', date_di);
          $("#date_ve").datepicker('setDate', date_now_next);
        }

      }

      if(dateback) {
          var date_di = $("#date_di").val();
          if(date_di) {
              var date_ve = $("#date_ve").val();
              var arr_d_m_y_date_di = date_di.split("/");
              var _date_di = parseInt(arr_d_m_y_date_di[0]);
              var _month_di = parseInt(arr_d_m_y_date_di[1]); 
              var _year_di = parseInt(arr_d_m_y_date_di[2]);

              if(date_di == date_ve) {
                var date_ve_next = (_date_di + 1) + "/" + (_month_di + 1)  + "/" + _year_di;
                $("#date_ve").val(date_ve_next);
                $("#date_ve").datepicker('setStartDate', date_di);
                $("#date_ve").datepicker('setDate', date_ve_next);
              }
          }
      }
  }
}

function filterFlightHistory() {

    var html_diem_di = localStorage.getItem("diemdi");
    var html_diem_den = localStorage.getItem("diemden");
    var code_diem_di = localStorage.getItem("codediemdi");
    var code_diem_den = localStorage.getItem("codediemden");
    var date_di = localStorage.getItem("date_di");
    var date_ve = localStorage.getItem("date_ve");
    var adault = localStorage.getItem("adault");
    var child = localStorage.getItem("child");
    var baby = localStorage.getItem("baby");
    var itineraryType = localStorage.getItem("itineraryType");

    if (adault != null && adault != '' && typeof adault != 'undefined' && !$(".box-ve-may-bay").length) {
        $("#num-adault").val(adault).change();
        $('#num-adault-xs').val(adault);
        $('#adults').html(adault);
        _adults = parseInt(adault);
    }

    if (child != null && child != '' && typeof child != 'undefined' && !$(".box-ve-may-bay").length) {
        $("#num-child").val(child).change();
        $('#num-child-xs').val(child);
        $('#child').html(child);
        _child = parseInt(child);
    }

    if (baby != null && baby != '' && typeof baby != 'undefined' && !$(".box-ve-may-bay").length) {
        $("#num-baby").val(baby).change();
        $('#num-baby-xs').val(baby);
        $('#baby').html(baby);
        _baby = parseInt(baby);
    }

    if (itineraryType != null && itineraryType != '' && typeof itineraryType != 'undefined') {
        if(parseInt(itineraryType) == 2) {
          itineraryType = "return";
        }
        if(parseInt(itineraryType) == 1) {
          itineraryType = "no_return";
        }
        $("input[name='loai-ve']").prop('checked', false);
        $("input[name='loai-ve'][value='" + itineraryType + "']").prop('checked', true);
        if (itineraryType == 'no_return') {
            $('.date-return').addClass('hidden');
        }
    }

    if (date_di != null && date_di != '' && typeof date_di != 'undefined') {
        compareDate(date_di, true, true, false);
    }

    if (date_ve != null && date_ve != '' && typeof date_ve != 'undefined') {
        compareDate(date_ve, true, false, true);
    }

    if (html_diem_di != null && html_diem_di != '' && typeof html_diem_di != 'undefined') {
        $(".bt-diem-di span").html(html_diem_di);
        $(".bt-diem-di").removeClass('border-top-color-red');
        $(".box-diem.go-flight").removeClass('border-color-red');
    }

    if (code_diem_di != null && code_diem_di != '' && typeof code_diem_di != 'undefined') {
        $(".bt-diem-di span").attr("code", code_diem_di);
        $(".bt-diem-di span").attr("data-code", code_diem_di);
    }

    if (html_diem_den != null && html_diem_den != '' && typeof html_diem_den != 'undefined' && !$(".box-ve-may-bay").length) {
        $(".bt-diem-den span").html(html_diem_den);
    }

    if (code_diem_den != null && code_diem_den != '' && typeof code_diem_den != 'undefined' && !$(".box-ve-may-bay").length) {
        $(".bt-diem-den span").attr("code", code_diem_den);
        $(".bt-diem-den span").attr("data-code", code_diem_den);
    }

    if($.trim($(".bt-diem-di span").html()) == "" ) {
      $(".bt-diem-di").removeClass('border-top-color-red');
      $(".box-diem.go-flight").removeClass('border-color-red');
      $(".bt-diem-di span").html("H?? N???i (HAN)");
      $(".bt-diem-di span").attr("code", "HAN");
      $(".bt-diem-di span").attr("data-code", "HAN");
    }

    if($.trim($(".bt-diem-den span").html()) == "" ) {
      $(".bt-diem-den").removeClass('border-top-color-red');
      $(".box-diem.back-flight").removeClass('border-color-red');
      $(".bt-diem-den span").html("H??? Ch?? Minh (SGN)");
      $(".bt-diem-den span").attr("code", "SGN");
      $(".bt-diem-den span").attr("data-code", "SGN");
    }

    if($.trim($(".bt-diem-di span").html()) == $.trim($(".bt-diem-den span").html())) {
      $(".bt-diem-di").addClass('border-top-color-red');
      $(".box-diem.go-flight").addClass('border-color-red');
      $(".bt-diem-di span").html("");
      $(".bt-diem-di span").attr("code", "");
      $(".bt-diem-di span").attr("data-code", "");
    }
}

$("input[name='checkbox-search-months']").change(function() {
    var loaive = $("input[name='loai-ve']:checked").val();
    if($(this).is(":checked")) {
       $("#box-search-month-go").show();
       if(loaive == "return") {
          $("#box-search-month-back").show();
       }
       $(".date-go").hide();
       $(".date-return").hide();
    } else {
       $("#box-search-month-go").hide();
       $("#box-search-month-back").hide();
       $(".date-go").show();
       if(loaive == "return") {
         $(".date-return").show();
       }
    }
});

function getNextMonths(month, year) {
  var options = "";
  var x, usrDate = new Date(year, month);
  usrDate.setDate(1);
  for(x=0; x<12; ++x) {
      var monthPrefix = "";
      if(usrDate.getMonth() < 10) {
        monthPrefix = "0";
      }
      var monthYear = monthPrefix + usrDate.getMonth().toString() + "/" + usrDate.getFullYear().toString();
      var monthYearVal = monthPrefix + usrDate.getMonth().toString() + usrDate.getFullYear().toString();
      options += "<option value='" + monthYearVal +"''>" + monthYear + "</option>";
      usrDate.setMonth(usrDate.getMonth()+1);
  }
  $("select[name='select-search-month-back']").html(options);
}

$("select[name='select-search-month-go']").on('change', function (e) {
  var search_month_go = $("select[name='select-search-month-go']").val();
  var month = search_month_go.substring(0, 2);
  var year = search_month_go.substring(2, 6);
  getNextMonths(month, year);
});