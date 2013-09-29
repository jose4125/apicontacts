define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/addconact.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n\t<div class="modal-dialog">\n    \t<div class="modal-content">\n        \t<div class="modal-header">\n          \t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n          \t\t<h4 class="modal-title">Add Contact</h4>\n        \t</div>\n        \t<div class="modal-body">\n            <form class="form-inline" role="form">\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="first_name" placeholder="First Name">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="tsxt" class="form-control" id="last_name" placeholder="Last Name">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="indentification" placeholder="Identification number">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="cel" placeholder="Cel Phone">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="phone_eme" placeholder="Emergency Phone">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="email" class="form-control" id="rkr_mail" placeholder="Rokk3r Mail">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="email" class="form-control" id="user_mail" placeholder="Personal Mail">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="skype" placeholder="Skype">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="birthday" placeholder="Birthday">\n              </div>\n            </form>\n\n        \t</div>\n        \t<div class="modal-footer">\n          \t\t<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n          \t\t<button id="btnAdd" type="button" class="btn btn-success">Add Contact</button>\n        \t</div>\n      \t</div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/contact.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-12">\n        <a class="btn-edit btn btn-success btn-sm">\n            <span class="glyphicon glyphicon-align-justify"></span>\n        </a>\n        <a class="btn-delete btn btn-danger btn-sm">\n            <span class="glyphicon glyphicon-align-justify"></span>\n        </a>\n    <div class="contData">\n        <button class="btnOptions btn btn-info btn-xs">\n            <span class="glyphicon glyphicon-align-justify"></span>\n        </button>\n        <div class="col-md-6">\n            <p>First name:</p> \n            <span>' +
((__t = ( first_name )) == null ? '' : __t) +
'</span>\n        </div>\n        <div class="col-md-6">\n            <p>Last name:</p> \n            <span>' +
((__t = ( last_name )) == null ? '' : __t) +
'</span>\n        </div>\n        <div class="col-md-6">\n            <p>Cel phone:</p>\n            <span>' +
((__t = ( cel )) == null ? '' : __t) +
'</span>\n        </div>\n        <div class="col-md-6">\n            <p>Emerrgency phone:</p>\n            <span>' +
((__t = ( phone_eme )) == null ? '' : __t) +
'</span>\n        </div>\n    </div>\n</div>\n\n';

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

this["JST"]["app/scripts/templates/deleteconact.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n\t<div class="modal-dialog">\n    \t<div class="modal-content">\n        \t<div class="modal-header">\n          \t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n          \t\t<h4 class="modal-title">delete ' +
((__t = ( first_name )) == null ? '' : __t) +
' Contact</h4>\n        \t</div>\n        \t<div class="modal-body">\n                <p>Do you want to delete ' +
((__t = ( first_name )) == null ? '' : __t) +
'´s contact</p>\n            </div>\n        \t<div class="modal-footer">\n          \t\t<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n          \t\t<button id="btnDelete" type="button" class="btn btn-danger">Delete Contact</button>\n        \t</div>\n      \t</div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/editconact.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n\t<div class="modal-dialog">\n    \t<div class="modal-content">\n        \t<div class="modal-header">\n          \t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n          \t\t<h4 class="modal-title">Add Contact</h4>\n        \t</div>\n        \t<div class="modal-body">\n            <form class="form-inline" role="form">\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="first_name" placeholder="First Name">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="tsxt" class="form-control" id="last_name" placeholder="Last Name">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="indentification" placeholder="Identification number">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="cel" placeholder="Cel Phone">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="phone_eme" placeholder="Emergency Phone">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="email" class="form-control" id="rkr_mail" placeholder="Rokk3r Mail">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="email" class="form-control" id="user_mail" placeholder="Personal Mail">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="skype" placeholder="Skype">\n              </div>\n              <div class="form-group col-md-6">\n                <input type="text" class="form-control" id="birthday" placeholder="Birthday">\n              </div>\n            </form>\n\n        \t</div>\n        \t<div class="modal-footer">\n          \t\t<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n          \t\t<button id="btnAdd" type="button" class="btn btn-success">Add Contact</button>\n        \t</div>\n      \t</div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n\n\n';

}
return __p
};

  return this["JST"];

});