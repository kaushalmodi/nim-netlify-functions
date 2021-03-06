/* Generated by the Nim Compiler v0.19.9 */
/*   (c) 2018 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI341040 = {size: 0,kind: 28,base: null,node: null,finalizer: null};

function cstrToNimstr(c_358408) {
		  var ln = c_358408.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_358408.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_358408.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

	
}

function eqStrings(a_358620, b_358621) {
		    if (a_358620 == b_358621) return true;
    if (a_358620 === null && b_358621.length == 0) return true;
    if (b_358621 === null && a_358620.length == 0) return true;
    if ((!a_358620) || (!b_358621)) return false;
    var alen = a_358620.length;
    if (alen != b_358621.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_358620[i] != b_358621[i]) return false;
    return true;
  

	
}

function makeNimstrLit(c_358391) {
		  var ln = c_358391.length;
  var result = new Array(ln);
  for (var i = 0; i < ln; ++i) {
    result[i] = c_358391.charCodeAt(i);
  }
  return result;
  

	
}

function setConstr() {
		    var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

	
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_359427, src_359428, ti_359429) {
	var result_359619 = null;

		switch (ti_359429.kind) {
		case 21:
		case 22:
		case 23:
		case 5:
			if (!(is_fat_pointer_359401(ti_359429))) {
			result_359619 = src_359428;
			}
			else {
				result_359619 = [src_359428[0], src_359428[1]];
			}
			
			break;
		case 19:
			      if (dest_359427 === null || dest_359427 === undefined) {
        dest_359427 = {};
      }
      else {
        for (var key in dest_359427) { delete dest_359427[key]; }
      }
      for (var key in src_359428) { dest_359427[key] = src_359428[key]; }
      result_359619 = dest_359427;
    
			break;
		case 18:
		case 17:
			if (!((ti_359429.base == null))) {
			result_359619 = nimCopy(dest_359427, src_359428, ti_359429.base);
			}
			else {
			if ((ti_359429.kind == 17)) {
			result_359619 = (dest_359427 === null || dest_359427 === undefined) ? {m_type: ti_359429} : dest_359427;
			}
			else {
				result_359619 = (dest_359427 === null || dest_359427 === undefined) ? {} : dest_359427;
			}
			}
			nimCopyAux(result_359619, src_359428, ti_359429.node);
			break;
		case 24:
		case 4:
		case 27:
		case 16:
			      if (src_359428 === null) {
        result_359619 = null;
      }
      else {
        if (dest_359427 === null || dest_359427 === undefined) {
          dest_359427 = new Array(src_359428.length);
        }
        else {
          dest_359427.length = src_359428.length;
        }
        result_359619 = dest_359427;
        for (var i = 0; i < src_359428.length; ++i) {
          result_359619[i] = nimCopy(result_359619[i], src_359428[i], ti_359429.base);
        }
      }
    
			break;
		case 28:
			      if (src_359428 !== null) {
        result_359619 = src_359428.slice(0);
      }
    
			break;
		default: 
			result_359619 = src_359428;
			break;
		}

	return result_359619;

}

function toJSStr(s_358425) {
		  if (s_358425 === null) return "";
  var len = s_358425.length;
  var asciiPart = new Array(len);
  var fcc = String.fromCharCode;
  var nonAsciiPart = null;
  var nonAsciiOffset = 0;
  for (var i = 0; i < len; ++i) {
    if (nonAsciiPart !== null) {
      var offset = (i - nonAsciiOffset) * 2;
      var code = s_358425[i].toString(16);
      if (code.length == 1) {
        code = "0"+code;
      }
      nonAsciiPart[offset] = "%";
      nonAsciiPart[offset + 1] = code;
    }
    else if (s_358425[i] < 128)
      asciiPart[i] = fcc(s_358425[i]);
    else {
      asciiPart.length = i;
      nonAsciiOffset = i;
      nonAsciiPart = new Array((len - i) * 2);
      --i;
    }
  }
  asciiPart = asciiPart.join("");
  return (nonAsciiPart === null) ?
      asciiPart : asciiPart + decodeURIComponent(nonAsciiPart.join(""));
  

	
}
var nim_program_result = 0;
var global_raise_hook_355418 = [null];
var local_raise_hook_355423 = [null];
var out_of_mem_hook_355426 = [null];
  if (!Math.trunc) {
    Math.trunc = function(v) {
      v = +v;
      if (!isFinite(v)) return v;

      return (v - v % 1)   ||   (v < 0 ? -0 : v === 0 ? v : 0);
    };
  }
var object_id_473237 = [0];

function is_fat_pointer_359401(ti_359403) {
	var result_359404 = false;

	BeforeRet: do {
		result_359404 = !((ConstSet1[ti_359403.base.kind] != undefined));
		break BeforeRet;
	} while (false);

	return result_359404;

}

function nimCopyAux(dest_359432, src_359433, n_359435) {
		switch (n_359435.kind) {
		case 0:
			break;
		case 1:
			      dest_359432[n_359435.offset] = nimCopy(dest_359432[n_359435.offset], src_359433[n_359435.offset], n_359435.typ);
    
			break;
		case 2:
			    for (var i = 0; i < n_359435.sons.length; i++) {
      nimCopyAux(dest_359432, src_359433, n_359435.sons[i]);
    }
    
			break;
		case 3:
			      dest_359432[n_359435.offset] = nimCopy(dest_359432[n_359435.offset], src_359433[n_359435.offset], n_359435.typ);
      for (var i = 0; i < n_359435.sons.length; ++i) {
        nimCopyAux(dest_359432, src_359433, n_359435.sons[i][1]);
      }
    
			break;
		}

	
}
async function HEX3Aanonymous_488044(event_488046, context_488047) {

		function inner_488102() {
			var result_488104 = null;

			var F={procname:":anonymous.inner",prev:framePtr,filename:"../../../../../usr_local/apps/6/nim/devel/lib/js/jsffi.nim",line:0};
			framePtr = F;
			BeforeRet: do {
				F.line = 430;
				var a_488105 = null;
				F.line = 431;
				a_488105 = {};
				F.line = 441;
				a_488105.statusCode = 405;
				F.line = 441;
				a_488105.body = "Method Not Allowed";
				F.line = 450;
				result_488104 = a_488105;
				break BeforeRet;
			} while (false);
			framePtr = F.prev;

			return result_488104;

		}

		function inner_488466() {
			var result_488468 = null;

			var F={procname:":anonymous.inner",prev:framePtr,filename:"../../../../../usr_local/apps/6/nim/devel/lib/js/jsffi.nim",line:0};
			framePtr = F;
			BeforeRet: do {
				F.line = 430;
				var a_488469 = null;
				F.line = 431;
				a_488469 = {};
				F.line = 441;
				a_488469.statusCode = 200;
				F.line = 441;
				a_488469.body = toJSStr((makeNimstrLit("Hello, ") || []).concat(name_488458 || [],makeNimstrLit("! From Nim.") || []));
				F.line = 450;
				result_488468 = a_488469;
				break BeforeRet;
			} while (false);
			framePtr = F.prev;

			return result_488468;

		}

	var result_488057 = null;

	var F={procname:"hello_name_post.:anonymous",prev:framePtr,filename:"hello_name_post.nim",line:0};
	framePtr = F;
	BeforeRet: do {
		F.line = 23;
		var http_method_488083 = cstrToNimstr((event_488046.httpMethod));
		if (!(eqStrings(http_method_488083, makeNimstrLit("POST")))) {
		F.line = 25;
		result_488057 = inner_488102();
		break BeforeRet;
		}
		
		F.line = 31;
		var params_488448 = querystring_488014.parse((event_488046.body));
		F.line = 33;
		var name_488458 = cstrToNimstr((params_488448.name));
		if (eqStrings(name_488458, [])) {
		F.line = 35;
		name_488458 = nimCopy(null, makeNimstrLit("World"), NTI341040);
		}
		
		F.line = 37;
		result_488057 = inner_488466();
		break BeforeRet;
	} while (false);
	framePtr = F.prev;

	return result_488057;

}
var querystring_488014 = require("querystring");
exports.handler = HEX3Aanonymous_488044;
