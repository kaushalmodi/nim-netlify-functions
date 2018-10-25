import jsffi

var exports {.importc.}: js
#           ^^^^^^^^^^^ -- This *has* to be between var name and the "js" type.
exports.handler = proc(event: js, context: js, callback: proc(n: js, obj: js)) =
  callback(nil, js{
    statusCode: 200,
    body: cstring"Hello, World! From Nim."}
#         ^^^^^^^ -- Converting to "cstring" is needed.
  )
