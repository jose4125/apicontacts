define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/contact.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-12">\n\t<div class="col-md-6"><p>First name:</p> <span>' +
((__t = ( first_name )) == null ? '' : __t) +
'</span></div>\n\t<div class="col-md-6"><p>Last name:</p> <span>' +
((__t = ( last_name )) == null ? '' : __t) +
'</span></div>\n\t<div class="col-md-6"><p>Cel phone:</p> <span>' +
((__t = ( cel )) == null ? '' : __t) +
'</span></div>\n\t<div class="col-md-6"><p>Emerrgency phone:</p> <span>' +
((__t = ( phone_eme )) == null ? '' : __t) +
'</span></div>\n</div>\n\n';

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