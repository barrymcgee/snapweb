YUI.add("t-core-store-tmpl-nav", function(Y) { Y.namespace("DEMO.CORE.STORE.TMPL.NAV").template = function (Y, $e, data) {
var $b='', $v=function (v){return v || v === 0 ? v : $b;}, $t='<div class="icon-list">\n  ';
 Y.Array.each(this, function (icon) { 
$t+='\n  <div class="icon" data-snap="'+
$e($v( icon.name ))+
'">\n    '+
$e($v( icon.name ))+
'\n  </div>\n  ';
 }); 
$t+='\n</div>\n';
return $t;
}});