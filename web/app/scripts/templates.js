define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/addconact.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n\t<div class="modal-dialog">\n    \t<div class="modal-content">\n        \t<div class="modal-header">\n          \t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n          \t\t<h4 class="modal-title">Modal title</h4>\n        \t</div>\n        \t<div class="modal-body">\n        \t...\n        \t</div>\n        \t<div class="modal-footer">\n          \t\t<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n          \t\t<button type="button" class="btn btn-primary">Save changes</button>\n        \t</div>\n      \t</div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/contact.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-12">\n\t<button id="btnOptions" class="btn btn-info btn-xs">\n\t\t<span class="glyphicon glyphicon-align-justify"></span>\n\t</button>\n\t<div class="col-md-6">\n\t\t<p>First name:</p> \n\t\t<span>' +
((__t = ( first_name )) == null ? '' : __t) +
'</span>\n\t</div>\n\t<div class="col-md-6">\n\t\t<p>Last name:</p> \n\t\t<span>' +
((__t = ( last_name )) == null ? '' : __t) +
'</span>\n\t</div>\n\t<div class="col-md-6">\n\t\t<p>Cel phone:</p>\n\t\t<span>' +
((__t = ( cel )) == null ? '' : __t) +
'</span>\n\t</div>\n\t<div class="col-md-6">\n\t\t<p>Emerrgency phone:</p>\n\t\t<span>' +
((__t = ( phone_eme )) == null ? '' : __t) +
'</span>\n\t</div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/contacts.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\n\n';

}
return __p
};

  return this["JST"];

});