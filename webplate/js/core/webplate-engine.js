/**
 * webplate_engine.js
 *
 * Author:        Chris Modem
 * Last Edited:   16 August 2013
 * Edited By:   	Chris Modem
 */

/**
 * LAB.js (LABjs :: Loading And Blocking JavaScript)
 * MIT License
 *
 * Author:        Kyle Simpson
 * Last Edited:   7 August 2013
 */
(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){a.finished_listeners[c]()}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g()}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){d=null;I(b)}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){e.ready_listeners[a]()}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){j()}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j++]()}catch(err){}continue}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.unshift(d,1);[].splice.apply(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);

// Some variables
var $ar_path 						= window.location.href.split('/');
var $protocol 						= $ar_path[0];
var $host 							= $ar_path[2];
var $base_url 						= $protocol + '//' + $host;
var $root							= '';
var $js_path						= $root + 'webplate/js/';
var $css_path						= $root + 'webplate/css/';
var $less_path						= $root + 'webplate/less/';
var $icomoon_path					= $root + 'webplate/icomoon/';
var $js_extras_path				= $root + 'webplate-extras/js/';
var $css_extras_path				= $root + 'webplate-extras/css/';
var $less_extras_path			= $root + 'webplate-extras/less/';
var $is_less						= false;

// Execute JS
$LAB

    // Load required js
    .script($js_path + 'min/webplate-jquery.min.js').wait()
    .script($js_path + 'min/webplate-modernizr.min.js').wait()
    .script($js_path + 'min/webplate-buttons.min.js').wait()
    .script($js_path + 'min/webplate-forms.min.js').wait()

    // Webplate tools
    .wait(function(){

        // ----- LOCK A FORM FROM SUBMITTING ON ENTER
        jQuery.web_lock_submit = function($element){

            $($element).live('keypress', function($e){

                if($e.keyCode == 13)
                {
                    return false;
                }
            });
        };

        // ----- CHECK THAT SOMETHING EXISTS
        jQuery.web_exists = function($element){

            if($($element).length > 0){

                return true;
            }
            else{

                return false;
            }
        };

        // ----- GET FILE EXTENSION
        jQuery.web_get_extension = function($file){

            return $file.split('.').pop().toLowerCase();
        };

        // ----- CURRENT DB DATE
        jQuery.web_crt_db_date = function(){

            $current_time 			    = new Date();
            $year						= $current_time.getFullYear();
            $month					    = $current_time.getMonth() + 1;
            if($month < 10){

                $month				    = '0' + $month;
            }
            $day						= $current_time.getDate();
            if($day < 10){

                $day					= '0' + $day;
            }
            return $year + '-' + $month + '-' + $day;
        };

        // ----- CHECK THAT SOMETHING IS IN A DATABAE DATE FORMAT (yyyy-mm-dd)
        jQuery.web_check_date = function($date){

            if(($date.substr(4, 1) == '-') && ($date.substr(7, 1) == '-') && ($.scrap_is_integer($date.substr(0, 4)) == true) && ($.scrap_is_integer($date.substr(5, 2)) == true) && ($.scrap_is_integer($date.substr(8, 2)) == true) && ($date.length == 10)){

                return true;
            }
            else{

                return false;
            }
        };

        // ----- CHECK THAT A STRING IS A TIME FORMAT
        jQuery.web_is_time = function($int){

            if($int != ''){

                var $valid_chars		= '0123456789.:';
                var $is_number			= true;
                var $char;

                for($i = 0; $i < $int.length && $is_number == true; $i++){

                    $char = $int.charAt($i);

                    if($valid_chars.indexOf($char) == -1){

                        $is_number = false;
                    }
                }
                return $is_number;
            }
            else{

                return false;
            }
        };

        // ----- CHECK THAT A STRING IS ONLY INTEGERS - INLCUDING FRACTION
        jQuery.web_is_integer = function($int){

            if($int != ''){

                var $valid_chars		= '0123456789.';
                var $is_number			= true;
                var $char;

                for($i = 0; $i < $int.length && $is_number == true; $i++){

                    $char = $int.charAt($i);

                    if($valid_chars.indexOf($char) == -1){

                        $is_number = false;
                    }
                }
                return $is_number;
            }
            else{

                return false;
            }
        };

        // ----- CHECK THAT A STRING IS ONLY INTEGERS - NOT INLCUDING FRACTION
        jQuery.web_is_full_integer = function($int){

            if($int != ''){

                var $valid_chars		= '0123456789';
                var $is_number			= true;
                var $char;

                for($i = 0; $i < $int.length && $is_number == true; $i++){

                    $char = $int.charAt($i);

                    if($valid_chars.indexOf($char) == -1){

                        $is_number = false;
                    }
                }
                return $is_number;
            }
            else{

                return false;
            }
        };

        // ----- CHECK FOR WHITE SPACE
        jQuery.web_has_white_space = function($check){

            if($check.indexOf(' ') != -1){

                return true;
            }
            else{

                return false;
            }
        };

        // ----- CHECK THAT THE FILE IS AN ALLOWED TYPE
        jQuery.web_allowed_doc = function($file, $ar_allowed_types){

            if($ar_allowed_types == null){

                $ar_allowed_types	= ['png', 'jpg', 'jpeg', 'gif', 'tif', 'tiff', 'bmp', 'doc', 'docx', 'xls', 'xlsx', 'pdf', 'txt', 'csv'];
            }

            $file_ext				= $file.split('.').pop().toLowerCase();

            if(jQuery.inArray($file_ext, $ar_allowed_types) == -1){

                return false;
            }
            else{

                return true;
            }
        };

        // ----- INPUT MIRRORS
        jQuery.web_input_mirror = function($input, $output){

            $($selector).keyup(function(){

                $ref_input	= $(this).val();
                $ref_value	= $ref_input.replace(/ /g,"_").toLowerCase();

                // Output the mirror
                $($output).text($ref_value);
            });
        };

        // ----- CHECK THAT A STRING IS AN EMAIL
        jQuery.web_is_email = function($email){

            if(($email.indexOf('@') != -1) && ($email.indexOf('.') != -1)){

                return true;
            }
            else{

                return false;
            }
        };

        // ----- CHECK THAT A STRING IS A VALID PASSWORD
        jQuery.web_is_password = function($password){

            if($password.length > 5){

                $num_check 		= /^[0-9]+$/;
                $letter_check	= /^[a-zA-Z-]+$/;

                $error			= false;

                if($password.match($num_check)){

                    $error		= true;
                }

                if($password.match($letter_check)){

                    $error		= true;
                }

                if($error == true){

                    return false;
                }
                else{

                    return true;
                }
            }
            else{

                return false;
            }
        };

        // ----- CHECK THAT THE FILE IS AN IMAGE
        jQuery.web_is_image = function($file, $ar_allowed_types){

            if($ar_allowed_types == null){

                $ar_allowed_types	= ['jpg', 'jpeg', 'gif', 'tif', 'tiff', 'bmp', 'png'];
            }

            $file_ext				= $file.split('.').pop().toLowerCase();

            if(jQuery.inArray($file_ext, $ar_allowed_types) == -1){

                return false;
            }
            else{

                return true;
            }
        };

        // ----- CHECK THAT INPUT IS A HEX CODE
        jQuery.web_is_color = function($color){

            if($color.length == 7){

                if($color.substr(0, 1) != '#'){

                    return false;
                }
            }
            else{

                return false;
            }
        };

        // ----- RANDOM STRING
        jQuery.web_random_string = function($string_length){

            $chars 				= "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            if($string_length == null){

                $string_length	= 5;
            }
            $random_string 		= '';

            for(var i = 0; i < $string_length; i++){

                $r_num 				= Math.floor(Math.random() * $chars.length);
                $random_string 	+= $chars.substring($r_num, $r_num+1);
            }

            return $random_string;
        };

        // ----- SHOW OVERLAY
        jQuery.web_show_overlay = function(){

            $('.webplate-overlay').fadeIn();
        };

        // ----- REMOVE OVERLAY
        jQuery.web_remove_overlay = function(){

            $('.webplate-overlay').fadeOut();
        };

		  // ----- SHOW MODAL
        jQuery.web_show_modal = function($modal_class){

            if($($modal_class).is(":hidden") == true){

                // Set the class
                if($modal_class == ''){

                    $modal_class        = '.modal-basic';
                }

                // Some variables
                $modal_height           = $($modal_class).height();
                //$scroll_top             = $(window).scrollTop();

                // Adjust the DOM
                $('.webplate-overlay').fadeIn();
                $($modal_class).css({ top: -($modal_height + 50) }).show();
                $($modal_class).animate({ top: 0 }, 'fast');
            }
        };

		  // ----- HIDE MODAL
        jQuery.web_hide_modal = function(){

            $('.modal:visible .close').live('click', function(){

                // Reset
                //$(window).scrollTop(0);

                // Some variables
                $modal_height           = $('.modal:visible').height();
                //$scroll_top             = $('.content').offset();

                // Adjust the DOM
                $('.webplate-overlay').fadeOut();
                $('.modal:visible').animate({ top: -($modal_height + 50) }, 'fast', function(){

                    $('.modal:visible').hide();
                });
            });
        };

        // ----- CONSOLE LOG
        jQuery.web_log = function($text){

            if(window.console) {

                console.log($text);
            }
        };

        // ----- NAVIGATION
        jQuery.web_navigation = function(){

            // Duplicate navigation
            $('.webplate-shifter').prepend($('.navigation').clone().addClass('webplate-navigation').removeClass('navigation'));

            // On click
            $('.navigation-trigger').on('click', function($e){
					
					 $e.preventDefault();

                if($('html').hasClass('show-nav')){

                    $('html').removeClass('show-nav').addClass('hide-nav');
                }
                else{
                    $('html').addClass('show-nav').removeClass('hide-nav');
                }
            });

            // Show on mobile
            if($('.navigation-trigger').hasClass('small-show') == false){

                $('.navigation-trigger').addClass('small-show');
            }

            // Change active state and close menu
            $('.webplate-navigation a').on('click', function(){

                $('.webplate-navigation a.active').removeClass('active');
                $(this).addClass('active');
                $('html').removeClass('show-nav').addClass('hide-nav');
            });
				
				$('.webplate-content').on('scroll', function(){

					if($('html').hasClass('show-nav')){
	               $('html').removeClass('show-nav').addClass('hide-nav');
					}
				});
        };

        // ----- WINDOW TYPE
        jQuery.web_window_type = function(){

            $.web_window_type_execute();
            $(window).resize(function(){

                $.web_window_type_execute();
            });
        };

        // ----- WINDOW TYPE EXECUTE
        jQuery.web_window_type_execute = function(){

            $('html.no-touch.show-nav').removeClass('show-nav').addClass('hide-nav');
            $('.webplate-content').bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){

                if($('.webplate-content').css('position') == 'fixed'){
                    $('.webplate-content').css({ 'position' : 'relative' });
                }
            });

            // Some variables
            if($(window).width() <= 700){

                // Set the type variable
                $('html').addClass('web-small-view');
                $('html').removeClass('web-large-view');
            }
            else{

                // Set the type variable
                $('html').removeClass('web-small-view');
                $('html').addClass('web-large-view');
            }
        };
    })

    // Load CSS
    .wait(function(){

        // Load icomoon CSS
        $('head').append('<link rel="stylesheet" href="'+ $icomoon_path +'style.css" type="text/css" />');

        // Get page CSS
        $css_extras                         = $('body').data('css-extras');

        // Check that CSS is needed
        if(($css_extras) && ($css_extras.length > 0)){

            // Split the js
            $split_css_extras               = $css_extras.split(',');

            // Loop through and load each CSS module
            $.each($split_css_extras, function($index, $file){

                // Trim the whitespace
                $file                       = jQuery.trim($file);

                // Get the extension
                $extension                  = $.web_get_extension($file);

                // Load the CSS / LESS
                if($extension == 'css'){

                    $('head').append('<link rel="stylesheet" href="'+ $css_extras_path + $file +'" type="text/css" />');
                }
                else if($extension == 'less'){

                    $('head').append('<link rel="stylesheet" href="'+ $less_extras_path + $file +'" type="text/less" />');
                    $is_less                = true;
                }
            });
        }
    })

    // Load the less if there is any
    .wait(function(){

        if($is_less == true){

            $LAB.script($js_path + 'min/webplate-less.min.js');
        }
    })
	 
	 // Execute forms
	 .wait(function(){
		 
 		// Execute forms
 		$(document).ready(function(){

 			// Some variables
 			$form_colour			= '-blue';
 			$data_form_colour		= $('body').data('forms-colour');
 			$ar_form_colours		= ['red', 'green', 'blue', 'aero', 'grey', 'orange', 'yellow', 'pink', 'purple'];

 			// Check that CSS is needed
 			if(($data_form_colour) && ($data_form_colour.length > 0)){

 				if(jQuery.inArray($data_form_colour, $ar_form_colours) > -1){

 					$form_colour	= '-' + $data_form_colour;
 				}	
 			}

 			// Set the html variable
 			$('html').addClass('web-form-colour' + $form_colour);

 			// Execute iCheck
 			$('input').iCheck({

 				checkboxClass: 	'icheckbox_square' + $form_colour,
 				radioClass: 		'iradio_square' + $form_colour,
 				increaseArea: 		'20%',
 				labelHover: 		true,
 			});

 			// Wrap all selects
 			$('select').wrap('<span class="drop-down"></span>');
 		});
	 })

    // Load touch if a touch device
    .wait(function(){

        if(Modernizr.touch){

            $LAB.script($js_path + 'min/webplate-touch.min.js');
        }
    })

    // Webplate execute
    .wait(function(){

        $(document).ready(function(){

            // ------------------------------------------------ DOM EDITS

            $('body').wrapInner('<div class="webplate" />');
            $('.webplate').wrapInner('<div class="webplate-shifter" />');
            $('.webplate-shifter').wrapInner('<div class="webplate-content" />');
            $('.webplate-content').wrapInner('<div class="webplate-inner" />');
            $('.webplate').prepend('<div class="webplate-overlay" />');
            $('.navigation').wrapInner('<div class="navigation-inner" />');


            // ------------------------------------------------ EXECUTE

            $.web_navigation();

            $.web_window_type();

				if(Modernizr.touch){
					
					$('body').on('tap', 'a, .navigation-trigger, .button', function(e) {
			
						// Some variables
						$link_attr					= $(this).attr('href');
			
						if(typeof $link_attr !== 'undefined' && $link_attr !== false) {
				
							if($link_attr != '#'){
								window.location 		= $(this).attr('href');
								e.preventDefault();
							}
						}
					});
            }

        });
    })

    // Load JS extras
    .wait(function(){

        // Get page JS
        $js_extras                          = $('body').data('js-extras');

        // Check that js is needed
        if(($js_extras) && ($js_extras.length > 0)){

            // Split the js
            $split_js_extras                = $js_extras.split(',');

            // Loop through and load each js extra
            $.each($split_js_extras, function($index, $file){

                // Trim the whitespace
                $file                       = jQuery.trim($file);

                // Get the extension
                $extension                  = $.web_get_extension($file);

                // Load the JS
                if($extension == 'js'){
                    $LAB.script($js_extras_path + $file);
                }
            });
        }
    })

    // Display the body
    .wait(function(){
		 $('body').show();
    });