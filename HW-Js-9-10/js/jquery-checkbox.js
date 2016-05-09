$(function() {
  jQuery(".jqCheck").each(

  function() {
    changeCheckStart(jQuery(this));
  });
});

function changeCheck(elem) {
	var el = elem,
		input = el.find("input").eq(0);
	if(el.attr("class").indexOf("jqCheck-disabled")==-1) {
   		if(!input.attr("checked")) {
			el.addClass("jqCheck-checked");
			input.attr("checked", true);
		} else {
			el.removeClass("jqCheck-checked");
			input.attr("checked", false).focus();
		}
	}
    return true;
}

function changeVisualCheck(input) {
	var wrapInput = input.parent();
		if(!input.attr("checked")) {
			wrapInput.removeClass("jqCheck-checked");
		} else {
			wrapInput.addClass("jqCheck-checked");
		}
}

function changeCheckStart(elem) {
try {
var el = elem,
	checkName = el.attr("name"),
	checkId = el.attr("id"),
	checkChecked = el.attr("checked"),
	checkDisabled = el.attr("disabled"),
	checkValue = el.attr("value");
	checkTab = el.attr("tabindex");
	if(checkChecked) {
		el.after("<span class='jqCheck jqCheck-checked'>"+
			"<input type='checkbox'"+
			"name='"+checkName+"'"+
			"id='"+checkId+"'"+
			"checked='"+checkChecked+"'"+
			"value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");
  } else {
		el.after("<span class='jqCheck'>"+
			"<input type='checkbox'"+
			"name='"+checkName+"'"+
			"id='"+checkId+"'"+
			"value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");
  }
	if(checkDisabled) {
		el.next().addClass("jqCheck-disabled");
		el.next().find("input").eq(0).attr("disabled","disabled");
	}

	el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)); });
	el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)); });
  el.remove();
}
catch(e) {

}
  return true;
}
