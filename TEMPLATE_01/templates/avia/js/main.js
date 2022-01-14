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

$(".btn-place").click(function(){

  if (($(".box-diem").hasClass('open'))) {
      $(".box-diem").removeClass('open');
  }
  $(this).parent().addClass('open');
  if ($(window).width() < 768) {
    $("body, html").css("overflow", "hidden");
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
  
  $(".bt-diem-di").val(html_nn  + ' (' +html_nn_code + ')');
  $(".bt-diem-di").attr("data-code", html_nn_code);
  $(".bt-diem-di").attr("code", html_nn_code);

  $(this).parent().parent().parent().parent().parent().parent().removeClass('open');
  $('body, html').removeAttr('style');
  $('.go-flight .input-flight').val(html_nn);
  $('input.input-flight').removeClass('input-err');
});


$(".item-diem-den").on('click', function() {
  var html_nn = $(this).html();
  var html_nn_code = $(this).data("code");

  $(".bt-diem-den").val(html_nn  + ' (' +html_nn_code + ')');
  $(".bt-diem-den").attr("data-code", html_nn_code);
  $(".bt-diem-den").attr("code", html_nn_code);

  $(this).parent().parent().parent().parent().parent().parent().removeClass('open');
  $('body, html').removeAttr('style');
  $('.back-flight  .input-flight').val(html_nn);
  $('input.input-flight').removeClass('input-err');
}); 

$(document).mouseup(function (e)
{
    var container = $(".box-select-option");
    var btn = $('.bt-diem-den');
    var btn2 = $('.bt-diem-di');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0 && !btn.is(e.target) && !btn2.is(e.target))
    {
        $(".box-diem").removeClass("open");
        $(".box-search-tours").removeClass("open");
        $('body, html').removeAttr('style');
    }

    var container2 = $(".div-number .dropdown-menu");
    if (!container2.is(e.target) && container2.has(e.target).length === 0)
    {
        $(".div-number").removeClass("open");
    }
});

$(".close1, .close2").click(function () {
    $(".box-search-tours").removeClass("open");
    $(".box-diem").removeClass("open");
    $('body, html').removeAttr('style');
    $('input#city_name').removeClass('input-err');

    if($("#ve_may_bay").length) {
      $('html, body').animate({
          scrollTop: $("#ve_may_bay").offset().top
      }, 100);
    }

    $(this).closest(".form-date").removeClass('open');
    $(".form-date").removeClass('open');

    $('body, html').removeAttr('style');
    $('body, html').removeAttr('onclick');
    return false;
});

(function ($) {
    $.fn.datepicker.dates['vi'] = {
        days: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
        daysShort: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
        daysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        monthsShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
        today: "Hôm nay",
        clear: "Xóa",
        format: "dd/mm/yyyy"
    };
}(jQuery));

$('#hang-ghe').select2({
    placeholder: "Hạng ghế",
     minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('hang-ghe');
});

$('#num-date').select2({
    placeholder: "Số đêm",
     minimumResultsForSearch: -1
}).on("select2:open", function (e) {
    set_enscroll_select2('num-date');
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

    $('.slider-img').slick({
      infinite: true,
      arrows: false,
      dots: true,
      autoplay: true
    }); 

    onDateTimePicker();
    onDateTimePickerHome();
    filterFlightHistory();
    filterDateback();

    var url = window.location;

    $('ul.list-menu.navbar-nav li a').filter(function() {
         return this.href == url;
    }).parent().addClass('active');

    $('.sub-menu ul li a').filter(function() {
         return this.href == url;
    }).parents('li').addClass('active');

    // var currentURL = document.URL;
    // var urlArr = currentURL.split("/");
    // var endLink = urlArr[urlArr.length - 1];

    // $("ul.list-menu.nav li").removeClass("active");

    // if(endLink == "") {
    //   $("ul.list-menu.nav li.menu-home").addClass("active");
    // } else if(currentURL.indexOf("/gioi-thieu") >= 0) {
    //   $("ul.list-menu.nav li.menu-gioi-thieu").addClass("active");
    // } else if(currentURL.indexOf("/tin-tuc") >= 0) {
    //   $("ul.list-menu.nav li.menu-tin-tuc").addClass("active");
    // } else if(currentURL.indexOf("/tours") >= 0) {
    //   $("ul.list-menu.nav li.menu-tours").addClass("active");
    // } else if(currentURL.indexOf("/cau-hoi-thuong-gap") >= 0) {
    //   $("ul.list-menu.nav li.menu-tien-ich").addClass("active");
    // } else if(currentURL.indexOf("/thong-tin-chuyen-khoan") >= 0) {
      
    //   if($("ul.list-menu.nav li.menu-thong-tin-chuyen-khoan").length) {
    //     $("ul.list-menu.nav li.menu-thong-tin-chuyen-khoan").addClass("active");
    //   } else {
    //     $("ul.list-menu.nav li.menu-tien-ich").addClass("active");
    //   }

    // } else if(currentURL.indexOf("/huong-dan-dat-ve-may-bay") >= 0) {

    //   if($("ul.list-menu.nav li.menu-huong-dan-dat-ve-may-bay").length) {
    //     $("ul.list-menu.nav li.menu-huong-dan-dat-ve-may-bay").addClass("active");
    //   } else {
    //     $("ul.list-menu.nav li.menu-tien-ich").addClass("active");
    //   }

    // } else if(currentURL.indexOf("/dat-ve-may-bay") >= 0) {
    //   $("ul.list-menu.nav li.menu-dat-ve-may-bay").addClass("active");
    // } else if(currentURL.indexOf("/lien-he") >= 0) {
    //   $("ul.list-menu.nav li.menu-lien-he").addClass("active");
    // } else if(currentURL.indexOf("/tin-tuc") >= 0) {
    //   $("ul.list-menu.nav li.menu-tin-tuc").addClass("active");
    // } else if(currentURL.indexOf("/tour/") >= 0) {
    //   $("ul.list-menu.nav li.menu-tours").addClass("active");
    // } else if(currentURL.indexOf("/ve-may-bay-gia-re") >= 0) {
    //   $("ul.list-menu.nav li.menu-ve-may-bay-gia-re").addClass("active");
    // } else if(currentURL.indexOf("/ve-may-bay") >= 0) {
    //   $("ul.list-menu.nav li.menu-ve-may-bay-nd").addClass("active");
    // } else if(currentURL.indexOf("/visa") >= 0) {
    //   $("ul.list-menu.nav li.menu-visa").addClass("active");
    // } else if(currentURL.indexOf("/khach-san") >= 0) {
    //   $("ul.list-menu.nav li.menu-khach-san").addClass("active");
    // } else if(currentURL.indexOf("/lam-dai-ly-ve-may-bay-cap-2") >= 0) {
    //   $("ul.list-menu.nav li.menu-dai-ly").addClass("active");
    // } else if(currentURL.indexOf("/tuyen-nhan-vien-ban-ve-may-bay") >= 0) {
    //   $("ul.list-menu.nav li.menu-tuyendung").addClass("active");
    // }

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

          $(".bt-diem-di").val(item.value);
          $(".bt-diem-di").attr("data-code", code);
          $(".bt-diem-di").attr("code", code);

          $(".box-diem").removeClass("open");
          $('body, html').removeAttr('style');
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

          $(".bt-diem-den").val(item.value);
          $(".bt-diem-den").attr("data-code", code);
          $(".bt-diem-den").attr("code", code);
          
          $(".box-diem").removeClass("open");
          $('body, html').removeAttr('style');
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

    $('.div-input-search-hotel .fa-times, .div-input-book-road .fa-times').click(function(){
      $(this).parent().find('.typeahead').val('');
      $(this).parent().find('.typeahead').focus();
    })

    $('.btn-choice-area').click(function(){
      var value = $(this).parent().find('input.typeahead').val();
      if(value != ""){
        $(".box-diem").removeClass("open");
        if($(this).closest(".box-diem").hasClass("go-flight")) {
          $(".bt-diem-di").val(value);
        }
        if($(this).closest(".box-diem").hasClass("back-flight")) {
          $(".bt-diem-den").val(value);
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

    $('.close-date-back').click(function(){
      $("#date_ve").prop('disabled', true);
      $("#date_ve").val("");
      $("#date_ve").datepicker('setDate', "");
      $(".date-return .label-top-flight").css('opacity', '0.3');
      $(".date-return #date_ve").css('opacity', '0.3');
      $(".date-return label[for='to-date']").css('opacity', '0.3');
      $('input:radio[name="journey"][value="1"]').prop('checked', true);
    });

    $('input:radio[name="journey"]').change(function () {
      var search_month = $("input[name='checkbox-search-months']").is(':checked');
      if ($(this).is(':checked') && $(this).val() == 2) {
          // $('.date-return').removeClass('hidden');
          $("#date_ve").prop('disabled', false);
          $(".date-return .label-top-flight").css('opacity', '1');
          $(".date-return #date_ve").css('opacity', '1');
          $(".date-return label[for='to-date']").css('opacity', '1');

          if(search_month) {
            $('#date_ve').hide();
            $('#date_di').hide();
            $('#label_calendar_go').hide();
            $('#label_calendar_back').hide();
            $('#label_close_back').hide();

            $("#box-search-month-go").show();
            $("#box-search-month-back").show();

            $("select[name='select-search-month-back']").prop('disabled', false);
          } else {
            $('#date_ve').show();
            $('#date_di').show();
            $('#label_calendar_go').show();
            $('#label_calendar_back').show();
            $('#label_close_back').show();

            $("#box-search-month-go").hide();
            $("#box-search-month-back").hide();
          }

      } else {
          
          if ($(window).width() > 768) {
            // $('.date-return').addClass('hidden');
            $("#date_ve").prop('disabled', true);
            $("#date_ve").val("");
            $("#date_ve").datepicker('setDate', "");
            $(".date-return .label-top-flight").css('opacity', '0.3');
            $(".date-return #date_ve").css('opacity', '0.3');
            $(".date-return label[for='to-date']").css('opacity', '0.3');
          }

          if(search_month) {
            $('#date_ve').hide();
            $('#date_di').hide();
            $('#label_calendar_go').hide();
            $('#label_calendar_back').hide();
            $('#label_close_back').hide();

            $("#box-search-month-go").show();
            $("#box-search-month-back").show();

            $("select[name='select-search-month-back']").prop('disabled', true);
            
          } else {
            $('#date_ve').show();
            $('#date_di').show();
            $('#label_calendar_go').show();
            $('#label_calendar_back').show();
            $('#label_close_back').show();

            $("#box-search-month-go").hide();
            $("#box-search-month-back").hide();
          }
      }
    });

    $('.close-date-back-road').click(function(){
      $("#date_ve_road").val("");
      $("#date_ve_road").datepicker('setDate', "");
      $("#book_road_tab select[name='back_hours']").val("");
      $("#book_road_tab select[name='back_minute']").val("");
      $("#book_road_tab input[name='journey']").val(1);
    })

    $('.close-date-back-taxi').click(function(){
      $("#date_ve_taxi").val("");
      $("#date_ve_taxi").datepicker('setDate', "");
      $("#dat_xe select[name='back_hours']").val("");
      $("#dat_xe select[name='back_minute']").val("");
      $("#dat_xe input[name='journey']").val(1);
    })

    $('#head-tab-vemaybay').click(function(){
      $(".title_bn h1").html('Vé máy bay giá rẻ');
    })

    $('#head-tab-dat-tau').click(function(){
      $(".title_bn h1").html('Đặt vé tàu trực tuyến');
    })

    $('#head-tab-dat-xe').click(function(){
      $(".title_bn h1").html('Đặt Taxi nhanh chóng');
    })
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

$( "input[type='datetime'], .bt-diem-di, .bt-diem-den, #input-search-tours" ).focus(function() {
  $(this).blur();
});

$(".btn-tim-ve").click(function(e){

    localStorage.clear();

    var partner = $("#partner").val();
    var product_key = $("#product_key").val();
    
    var diem_di = $(".bt-diem-di").attr("code");
    var diem_den = $(".bt-diem-den").attr("code");

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

    var journey = $("input[name='journey']:checked").val();
    if ($(window).width() < 768) {
      journey = 2;
    }
    var itineraryType = 1;
    if(date_ve != null && date_ve != "" && journey == 2) {
      itineraryType = 2;
    }

    var search_month = $("input[name='checkbox-search-months']").is(':checked');
    var search_month_go = $("select[name='select-search-month-go']").val();
    var search_month_back = $("select[name='select-search-month-back']").val();

    var html_diem_di = $(".bt-diem-di").val();
    var html_diem_den = $(".bt-diem-den").val();
    localStorage.setItem("diemdi", html_diem_di);
    localStorage.setItem("diemden", html_diem_den);
    localStorage.setItem("codediemdi", diem_di);
    localStorage.setItem("codediemden", diem_den);
    localStorage.setItem("date_di", date_di_plain);
    localStorage.setItem("date_ve", date_ve_plain);
    localStorage.setItem("adault", adault);
    localStorage.setItem("child", child);
    localStorage.setItem("baby", baby);
    localStorage.setItem("itineraryType", itineraryType);

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
      $('#register-email-success').show().delay(6000).fadeOut(300);
      $('#register-email-error').hide();
    } else {
      $('#register-email-success').hide();
      $('#register-email-error').show().delay(6000).fadeOut(300);
    }
    $form.find(':button[type=submit]').prop('disabled', false);
  });
});

var _adults = 1;
var _child = 0;
var _baby = 0;

$("#adults_plus").click(function(e){ 
  e.preventDefault();
  $("#adults_minus").prop('disabled', false);
  if(_adults < 9 && Number.isInteger(_adults)) {
    _adults++; 
    $('#adults').html(_adults);
    $('#num-adault-xs').val(_adults);
    $("#num-adault").val(_adults).change();
  } else {
    $(this).prop('disabled', true);
    $("#adults_minus").prop('disabled', false);
  }
  var sum = Number(_adults) + Number(_child) + Number(_baby);
  $('.btn-pp>span').html(sum);
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
  var sum = Number(_adults) + Number(_child) + Number(_baby);
  $('.btn-pp>span').html(sum);
});

$("#child_plus").click(function(e){ 
  e.preventDefault();
  $("#child_minus").prop('disabled', false);
  if(_child < 9 && Number.isInteger(_child)) {
    _child++; 
    $('#child').html(_child);
    $('#num-child-xs').val(_child);
    $("#num-child").val(_child).change();
  } else {
    $(this).prop('disabled', true);
    $("#child_minus").prop('disabled', false);
  }
  var sum = Number(_adults) + Number(_child) + Number(_baby);
  $('.btn-pp>span').html(sum);
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
  var sum = Number(_adults) + Number(_child) + Number(_baby);
  $('.btn-pp>span').html(sum);
});

$("#baby_plus").click(function(e){ 
  e.preventDefault();
  $("#baby_minus").prop('disabled', false);
  if(_baby < 2 && Number.isInteger(_baby)) {
    _baby++; 
    $('#baby').html(_baby);
    $('#num-baby-xs').val(_baby);
    $("#num-baby").val(_baby).change();
  } else {
    $(this).prop('disabled', true);
    $("#baby_minus").prop('disabled', false);
  }
  var sum = Number(_adults) + Number(_child) + Number(_baby);
  $('.btn-pp>span').html(sum);
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
  var sum = Number(_adults) + Number(_child) + Number(_baby);
  $('.btn-pp>span').html(sum);
});

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
      $("body, html").css("overflow", "hidden");
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

      $form.hide().delay(6000).fadeIn(300);

    } else {
      $form.parent().find('#alert_book_success').hide();
      $form.parent().find('#alert_book_error').empty().show().html(obj.msg).delay(6000).fadeOut(300);

      $form.hide().delay(6000).fadeIn(300);

    }
    $form.find(':button[type=submit]').prop('disabled', false);
  });
});

$('.btn-pp, #selected-pp').click(function(){
  var open_dr = $(this).closest(".div-number");
  if (open_dr.hasClass('open')) {
    open_dr.removeClass('open');
  }else{
    open_dr.addClass('open');
  }
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
          $("#main-nav-date").show().find("span").html("Chọn ngày đi");
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
          $("#main-nav-date").show().find("span").html("Chọn ngày đi");
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
          $("#main-nav-date").show().find("span").html("Chọn ngày về");
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
        $(".lunar-go").html('Âm lịch: ' + luna_go_string + '');
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
          $(".lunar-go").html('Âm lịch: ' + _luna_go_string + '');

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
            alert("Ngày về phải bằng hoặc sau ngày đi");
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
          $(".lunar-back").html('Âm lịch: ' + _luna_back_string + '');
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
        $("#main-nav-date").show().find("span").html("Chọn ngày đi");
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
        $("#main-nav-date").show().find("span").html("Chọn ngày về");
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
        $("#main-nav-date").show().find("span").html("Chọn ngày đi");
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
        $("#main-nav-date").show().find("span").html("Chọn ngày về");
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
          alert("Ngày về phải bằng hoặc sau ngày đi");
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
          alert("Ngày về phải bằng hoặc sau ngày đi");
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
      $(".lunar-back").html('Âm lịch: ' + _luna_back_string + '');
    }

    var journey = $("input[name='journey']:checked").val();
    var itineraryType = localStorage.getItem("itineraryType");
    if (itineraryType != null && itineraryType != '' && typeof itineraryType != 'undefined') {
        if (parseInt(itineraryType) == 1) {
            $("#date_ve").val("");
            $("#date_ve").datepicker('setDate', "");
            $('input:radio[name="journey"][value="1"]').prop('checked', true);
        }
    }

    var date_ve = localStorage.getItem("date_ve");
    var journey_default = $("input[name='journey_default']").val();

    if(parseInt(journey_default) == 1 && (date_ve == null || date_ve == '' || typeof date_ve == 'undefined')) {
        $("#date_ve").val("");
        $("#date_ve").datepicker('setDate', "");
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

    // if (adault != null && adault != '' && typeof adault != 'undefined' && !$(".box-ve-may-bay").length) {
    if (adault != null && adault != '' && typeof adault != 'undefined') {
        $("#num-adault").val(adault).change();
        $('#num-adault-xs').val(adault);
        $('#adults').html(adault);
        _adults = parseInt(adault);
    }

    if (child != null && child != '' && typeof child != 'undefined') {
        $("#num-child").val(child).change();
        $('#num-child-xs').val(child);
        $('#child').html(child);
        _child = parseInt(child);
    }

    if (baby != null && baby != '' && typeof baby != 'undefined') {
        $("#num-baby").val(baby).change();
        $('#num-baby-xs').val(baby);
        $('#baby').html(baby);
        _baby = parseInt(baby);
    }

    var sum = Number(_adults) + Number(_child) + Number(_baby);
    $('.btn-pp>span').html(sum);

    if (date_di != null && date_di != '' && typeof date_di != 'undefined') {
        compareDate(date_di, true, true, false);
    }

    if (date_ve != null && date_ve != '' && typeof date_ve != 'undefined') {
        compareDate(date_ve, true, false, true);
    }

    if (itineraryType != null && itineraryType != '' && typeof itineraryType != 'undefined') {
        if (parseInt(itineraryType) == 1) {

            $('input:radio[name="journey"][value="1"]').prop('checked', true);

            if ($(window).width() > 768) {
              $("#date_ve").prop('disabled', true);
              $("#date_ve").val("");
              $("#date_ve").datepicker('setDate', "");
              $(".date-return .label-top-flight").css('opacity', '0.3');
              $(".date-return #date_ve").css('opacity', '0.3');
              $(".date-return label[for='to-date']").css('opacity', '0.3');
            }
        }
    }

    if (html_diem_di != null && html_diem_di != '' && typeof html_diem_di != 'undefined') {
        $(".bt-diem-di").val(html_diem_di);
        $(".bt-diem-di").removeClass('border-color-red');
    }

    if (code_diem_di != null && code_diem_di != '' && typeof code_diem_di != 'undefined') {
        $(".bt-diem-di").attr("code", code_diem_di);
        $(".bt-diem-di").attr("data-code", code_diem_di);
    }

    // if (html_diem_den != null && html_diem_den != '' && typeof html_diem_den != 'undefined' && !$(".box-ve-may-bay").length) {
    if (html_diem_den != null && html_diem_den != '' && typeof html_diem_den != 'undefined') {
        $(".bt-diem-den").val(html_diem_den);
    }

    // if (code_diem_den != null && code_diem_den != '' && typeof code_diem_den != 'undefined' && !$(".box-ve-may-bay").length) {
    if (code_diem_den != null && code_diem_den != '' && typeof code_diem_den != 'undefined') {
        $(".bt-diem-den").attr("code", code_diem_den);
        $(".bt-diem-den").attr("data-code", code_diem_den);
    }

    if($.trim($(".bt-diem-di").val()) == "" ) {
      $(".bt-diem-di").removeClass('border-color-red');
      $(".bt-diem-di").val("Hà Nội (HAN)");
      $(".bt-diem-di").attr("code", "HAN");
      $(".bt-diem-di").attr("data-code", "HAN");
    }

    if($.trim($(".bt-diem-den").val()) == "" ) {
      $(".bt-diem-den").removeClass('border-color-red');
      $(".bt-diem-den").val("Hồ Chí Minh (SGN)");
      $(".bt-diem-den").attr("code", "SGN");
      $(".bt-diem-den").attr("data-code", "SGN");
    }

    if($.trim($(".bt-diem-di").val()) == $.trim($(".bt-diem-den").val())) {
      $(".bt-diem-di").addClass('border-color-red');
      $(".bt-diem-di").val("");
      $(".bt-diem-di").attr("code", "");
      $(".bt-diem-di").attr("data-code", "");
    }
}

$("input[name='checkbox-search-months']").change(function() {
    var loaive = $("input[name='journey']:checked").val();
    if($(this).is(":checked")) {
       $('#date_ve').hide();
        $('#date_di').hide();
        $('#label_calendar_go').hide();
        $('#label_calendar_back').hide();
        $('#label_close_back').hide();

        $("#box-search-month-go").show();
        $("#box-search-month-back").show();

        if (loaive == 2) {
          $("select[name='select-search-month-back']").prop('disabled', false);
        } else {
          $("select[name='select-search-month-back']").prop('disabled', true);
        }
    } else {
        $('#date_ve').show();
        $('#date_di').show();
        $('#label_calendar_go').show();
        $('#label_calendar_back').show();
        $('#label_close_back').show();

        $("#box-search-month-go").hide();
        $("#box-search-month-back").hide();

        if (loaive == 2) {
          $("select[name='select-search-month-back']").prop('disabled', false);
        } else {
          $("select[name='select-search-month-back']").prop('disabled', true);
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

$( window ).resize(function() {
  if ($(window).width() < 768) {
      $("#date_ve").prop('disabled', false);
      $(".date-return .label-top-flight").css('opacity', '1');
      $(".date-return #date_ve").css('opacity', '1');
      $(".date-return label[for='to-date']").css('opacity', '1');
  }
}); 