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
async function HEX3Aanonymous_463055(event_463057, context_463058) {

		function inner_463102() {
			var result_463104 = null;

			var F={procname:":anonymous.inner",prev:framePtr,filename:"../../../../../stow/pkgs/nim/devel/lib/js/jsffi.nim",line:0};
			framePtr = F;
			BeforeRet: do {
				F.line = 423;
				var a_463105 = null;
				F.line = 424;
				a_463105 = {};
				F.line = 434;
				a_463105.statusCode = 200;
				F.line = 434;
				a_463105.body = "Hello, World! From Nim.";
				F.line = 443;
				result_463104 = a_463105;
				break BeforeRet;
			} while (false);
			framePtr = F.prev;

			return result_463104;

		}

	var result_463069 = null;

	var F={procname:"hello_async.:anonymous",prev:framePtr,filename:"hello_async.nim",line:0};
	framePtr = F;
	BeforeRet: do {
		F.line = 8;
		result_463069 = inner_463102();
		break BeforeRet;
	} while (false);
	framePtr = F.prev;

	return result_463069;

}
exports.handler = HEX3Aanonymous_463055;
