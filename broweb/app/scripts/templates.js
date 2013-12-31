var _ = require('underscore');
exports["app/scripts/templates/contact.ejs"] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="col-md-12">\n        <a class="btn-edit btn btn-success btn-sm">\n            <span class="glyphicon glyphicon-align-justify"></span>\n        </a>\n        <a class="btn-delete btn btn-danger btn-sm">\n            <span class="glyphicon glyphicon-align-justify"></span>\n        </a>\n    <div class="contData">\n        <button class="btnOptions btn btn-info btn-xs">\n            <span class="glyphicon glyphicon-align-justify"></span>\n        </button>\n        <div class="col-md-6">\n            <p>First name:</p> \n            <span>'+
((__t=( first_name ))==null?'':__t)+
'</span>\n        </div>\n        <div class="col-md-6">\n            <p>Last name:</p> \n            <span>'+
((__t=( last_name ))==null?'':__t)+
'</span>\n        </div>\n        <div class="col-md-6">\n            <p>Cel phone:</p>\n            <span>'+
((__t=( cel ))==null?'':__t)+
'</span>\n        </div>\n        <div class="col-md-6">\n            <p>Emerrgency phone:</p>\n            <span>'+
((__t=( phone_eme ))==null?'':__t)+
'</span>\n        </div>\n    </div>\n</div>\n\n';
}
return __p;
};