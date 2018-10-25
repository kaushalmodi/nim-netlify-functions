/* Generated by the Nim Compiler v0.19.1 */
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
var NTI305040 = {size: 0,kind: 28,base: null,node: null,finalizer: null};

function eqStrings(a_321853, b_321854) {
		    if (a_321853 == b_321854) return true;
    if (a_321853 === null && b_321854.length == 0) return true;
    if (b_321854 === null && a_321853.length == 0) return true;
    if ((!a_321853) || (!b_321854)) return false;
    var alen = a_321853.length;
    if (alen != b_321854.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_321853[i] != b_321854[i]) return false;
    return true;
  

	
}

function makeNimstrLit(c_321624) {
		  var ln = c_321624.length;
  var result = new Array(ln);
  for (var i = 0; i < ln; ++i) {
    result[i] = c_321624.charCodeAt(i);
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

function nimCopy(dest_322630, src_322631, ti_322632) {
	var result_323043 = null;

		switch (ti_322632.kind) {
		case 21:
		case 22:
		case 23:
		case 5:
			if (!(is_fat_pointer_322601(ti_322632))) {
			result_323043 = src_322631;
			}
			else {
				result_323043 = [src_322631[0], src_322631[1]];
			}
			
			break;
		case 19:
			      if (dest_322630 === null || dest_322630 === undefined) {
        dest_322630 = {};
      }
      else {
        for (var key in dest_322630) { delete dest_322630[key]; }
      }
      for (var key in src_322631) { dest_322630[key] = src_322631[key]; }
      result_323043 = dest_322630;
    
			break;
		case 18:
		case 17:
			if (!((ti_322632.base == null))) {
			result_323043 = nimCopy(dest_322630, src_322631, ti_322632.base);
			}
			else {
			if ((ti_322632.kind == 17)) {
			result_323043 = (dest_322630 === null || dest_322630 === undefined) ? {m_type: ti_322632} : dest_322630;
			}
			else {
				result_323043 = (dest_322630 === null || dest_322630 === undefined) ? {} : dest_322630;
			}
			}
			nimCopyAux(result_323043, src_322631, ti_322632.node);
			break;
		case 24:
		case 4:
		case 27:
		case 16:
			      if (src_322631 === null) {
        result_323043 = null;
      }
      else {
        if (dest_322630 === null || dest_322630 === undefined) {
          dest_322630 = new Array(src_322631.length);
        }
        else {
          dest_322630.length = src_322631.length;
        }
        result_323043 = dest_322630;
        for (var i = 0; i < src_322631.length; ++i) {
          result_323043[i] = nimCopy(result_323043[i], src_322631[i], ti_322632.base);
        }
      }
    
			break;
		case 28:
			      if (src_322631 !== null) {
        result_323043 = src_322631.slice(0);
      }
    
			break;
		default: 
			result_323043 = src_322631;
			break;
		}

	return result_323043;

}

function toJSStr(s_321658) {
		  if (s_321658 === null) return "";
  var len = s_321658.length;
  var asciiPart = new Array(len);
  var fcc = String.fromCharCode;
  var nonAsciiPart = null;
  var nonAsciiOffset = 0;
  for (var i = 0; i < len; ++i) {
    if (nonAsciiPart !== null) {
      var offset = (i - nonAsciiOffset) * 2;
      var code = s_321658[i].toString(16);
      if (code.length == 1) {
        code = "0"+code;
      }
      nonAsciiPart[offset] = "%";
      nonAsciiPart[offset + 1] = code;
    }
    else if (s_321658[i] < 128)
      asciiPart[i] = fcc(s_321658[i]);
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
var nimvm_312578 = false;
var nim_program_result = 0;
var global_raise_hook_318818 = [null];
var local_raise_hook_318823 = [null];
var out_of_mem_hook_318826 = [null];
  if (!Math.trunc) {
    Math.trunc = function(v) {
      v = +v;
      if (!isFinite(v)) return v;

      return (v - v % 1)   ||   (v < 0 ? -0 : v === 0 ? v : 0);
    };
  }
var object_id_446245 = [0];

function is_fat_pointer_322601(ti_322603) {
	var result_322604 = false;

	BeforeRet: do {
		result_322604 = !((ConstSet1[ti_322603.base.kind] != undefined));
		break BeforeRet;
	} while (false);

	return result_322604;

}

function nimCopyAux(dest_322635, src_322636, n_322638) {
		switch (n_322638.kind) {
		case 0:
			break;
		case 1:
			      dest_322635[n_322638.offset] = nimCopy(dest_322635[n_322638.offset], src_322636[n_322638.offset], n_322638.typ);
    
			break;
		case 2:
			L1: do {
				var i_323024 = 0;
				var colontmp__463483 = 0;
				colontmp__463483 = (n_322638.len - 1);
				var res_463485 = 0;
				L2: do {
						L3: while (true) {
						if (!(res_463485 <= colontmp__463483)) break L3;
							i_323024 = res_463485;
							nimCopyAux(dest_322635, src_322636, n_322638.sons[i_323024]);
							res_463485 += 1;
						}
				} while(false);
			} while(false);
			break;
		case 3:
			      dest_322635[n_322638.offset] = nimCopy(dest_322635[n_322638.offset], src_322636[n_322638.offset], n_322638.typ);
      for (var i = 0; i < n_322638.sons.length; ++i) {
        nimCopyAux(dest_322635, src_322636, n_322638.sons[i][1]);
      }
    
			break;
		}

	
}
async function HEX3Aanonymous_463055(event_463057, context_463058) {

		function inner_463131() {
			var result_463133 = null;

			var F={procname:":anonymous.inner",prev:framePtr,filename:"../../../../../stow/pkgs/nim/devel/lib/js/jsffi.nim",line:0};
			framePtr = F;
			BeforeRet: do {
				F.line = 423;
				var a_463134 = null;
				F.line = 424;
				a_463134 = {};
				F.line = 434;
				a_463134.statusCode = 200;
				F.line = 434;
				a_463134.body = toJSStr((makeNimstrLit("Hello, ")).concat(name_463107,makeNimstrLit("! From Nim.")));
				F.line = 443;
				result_463133 = a_463134;
				break BeforeRet;
			} while (false);
			framePtr = F.prev;

			return result_463133;

		}

	var result_463069 = null;

	var F={procname:"hello_name_2.:anonymous",prev:framePtr,filename:"hello_name_2.nim",line:0};
	framePtr = F;
	BeforeRet: do {
		F.line = 9;
		var name_463107 = (event_463057.queryStringParameters.name);
		if (eqStrings(name_463107, [])) {
		F.line = 11;
		name_463107 = nimCopy(null, makeNimstrLit("World"), NTI305040);
		}
		
		F.line = 13;
		result_463069 = inner_463131();
		break BeforeRet;
	} while (false);
	framePtr = F.prev;

	return result_463069;

}
exports.handler = HEX3Aanonymous_463055;
