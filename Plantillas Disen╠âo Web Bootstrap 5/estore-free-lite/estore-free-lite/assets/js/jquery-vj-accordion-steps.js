/*
 * Vijay Naidu M, 
 * Cyberzo Solutions
*/
(function($) {
	var fn_options = {};
	var in_element = '';
	var ttl_length_steps = '';
	$.fn.vjaccordionsteps = function(options) {
		in_element = this;
		ttl_length_steps = in_element.children().length;
		// if(typeof this !='object'){ return; }
		fn_options = (typeof options !='undefined')?options:{};
		fn_options = $.extend({}, $.fn.vjaccordionsteps.default_options, (typeof options !='undefined' ? options : {}));
		
		if(fn_options.vjacc_type == 'steps'){
			$.fn.vjaccordionsteps._steps(this);
		}
	};
	
	$.fn.vjaccordionsteps._steps = function(elem){
		if(fn_options.vjacc_hide_all_steps == true){
			$.fn.vjaccordionsteps._hide_all_steps(elem);//Hide all sections
		}
		else{
			$.fn.vjaccordionsteps._display_step(elem, 1, true);
		}
		
		$(elem).find('li h3').click(function(e) {//Onclick for headings
			var selected_elem = $(this).parent();
			var cur_element = selected_elem.index()-0;//As it starts with 0
			var cur_element = cur_element+1;
			if($(selected_elem).data('vjopt_display') == 1){//Current step is eligible to get the step
				$.fn.vjaccordionsteps._display_step(elem, cur_element);
			}
		});
		
		$(elem).find('.vjsteps_nxt').click(function(e) {//Onclick for Next buttons
			var cur_element_nxt_ele = $(this).closest('li');
			var cur_element_nxt = cur_element_nxt_ele.index()-0;
			var cur_element_nxt = cur_element_nxt+1;//Current step
			var cur_element_nxt_next = cur_element_nxt+1;//Next step
			var is_valid_next_step = false;
			if(cur_element_nxt_next<=ttl_length_steps){
				is_valid_next_step = true;
			}
			var arr_params = {
				'in_element': in_element, 
				'previous_li': cur_element_nxt_ele, 
				'current_step': cur_element_nxt, 
				'next_step': cur_element_nxt_next, 
				'is_valid_next_step': is_valid_next_step, 
				'total_steps': ttl_length_steps
			};
			var is_go_nextstep = fn_options.vjacc_next_step_function(arr_params);
			if($(cur_element_nxt_ele).data('vjopt_display') == 1 && is_valid_next_step == true && is_go_nextstep == true){//Eligible to go for next step
				$.fn.vjaccordionsteps._display_step(elem, cur_element_nxt_next);
			}
		});
		
		$(elem).find('.vjsteps_prev').click(function(e) {//Onclick for Previous buttons
			var previous_li = $(this).closest('li');
			var cur_element_nxt = previous_li.index()-0;
			var cur_element_nxt = cur_element_nxt+1;//Current step
			var cur_element_nxt_next = cur_element_nxt+1;//Next step
			var cur_element_nxt_prev = cur_element_nxt-1;//Previous step
			var is_valid_prev_step = false;
			if(cur_element_nxt_prev>=1){
				is_valid_prev_step = true;
			}
			else{
				cur_element_nxt_prev = 0;
			}
			var arr_params = {
				'in_element': in_element, 
				'previous_li': previous_li, 
				'current_step': cur_element_nxt, 
				'next_step': cur_element_nxt_next, 
				'prev_step': cur_element_nxt_prev, 
				'is_valid_prev_step': is_valid_prev_step, 
				'total_steps': ttl_length_steps
			};
			var is_go_prevstep = fn_options.vjacc_prev_step_function(arr_params);
			
			if($(previous_li).data('vjopt_display') == 1 && is_valid_prev_step == true && is_go_prevstep == true){//Eligible to go for previous step
				$.fn.vjaccordionsteps._display_step(elem, cur_element_nxt_prev);
			}
			
		});
		
	};
	
	$.fn.vjaccordionsteps.display_step = function(disp_step){
		$.fn.vjaccordionsteps._display_step(in_element, disp_step);
	}
	
	$.fn.vjaccordionsteps._display_step = function(elem, disp_step, is_page_load){
		if(typeof is_page_load == 'undefined'){ is_page_load = false; }
		var disp_step = (typeof disp_step!='undefined')?(disp_step -0):'';
		var th_current_step = $(in_element).find('.vjopt_activeli').data('vjstepno') -0;
		if(th_current_step<1){
			th_current_step = 1;
		}
		var arr_params = {
			'current_step': th_current_step, 
			'new_step': disp_step, 
			'total_steps': ttl_length_steps
		};
		if(th_current_step == disp_step && is_page_load == false){//Requested step is already active 
			return;
		}
		if(is_page_load == false){
			var is_i_change_step = fn_options.vjacc_step_change_function(arr_params);
		}
		else{//This triggers on page load
			var is_i_change_step = true;
		}
		if(disp_step!='' && is_i_change_step == true){
			$(elem).find('li h3').removeClass('vjopt_activeh3');//Remove active class
			$(elem).find('li').removeClass('vjopt_activeli');//Remove active class
			$.fn.vjaccordionsteps._hide_all_steps(elem);//Hide all sections
			
			$(elem).find('li').each(function(){
				var vjstepno = $(this).data('vjstepno') -0;
				if(vjstepno>0 && disp_step == vjstepno){
					$(this).data('vjopt_display', 1);
					$(this).addClass('vjopt_activeli');//Add active class
					$(this).find('h3').addClass('vjopt_activeh3');//Add active class
					$(this).find('section').show();//Show requested step
					fn_options.vjacc_after_step_change_function(arr_params);
					return;
				}
			});
		}
	};
	
	$.fn.vjaccordionsteps.reset_steps = function(){
		$(in_element).find('li').data('vjopt_display', 0);//reset all steps
		$.fn.vjaccordionsteps._display_step(in_element, 1, true);//Show first step
	};
	
	$.fn.vjaccordionsteps._hide_all_steps = function(elem){
		$(elem).find('li section').hide();//Hide all sections
	};
	
	$.fn.vjaccordionsteps.vjacc_next_step = function(disp_step){
		$.fn.vjaccordionsteps._display_step(in_element, disp_step);
	};
	
	$.fn.vjaccordionsteps.default_options = {
		'vjacc_type': 'steps', 
		'vjacc_hide_all_steps': false, 
		'vjacc_next_step_function': function(){ return true; }, 
		'vjacc_prev_step_function': function(){ return true; }, 
		'vjacc_after_step_change_function': function(){ return true; }, 
		'vjacc_step_change_function': function(){ return true; }
	};
})(jQuery);