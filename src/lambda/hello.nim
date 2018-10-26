import jsffi

var exports {.importc.}: js
#           ^^^^^^^^^^^ -- This *has* to be between var name and the "js" type.

var console {. importc, nodecl .}: js

console.log(cstring"Hello1")
console.log("Hello2")

exports.handler = proc(event: js, context: js, callback: proc(n: js, obj: js)) =
  console.log(cstring"Hello3")
  console.log("Hello4")

  callback(nil, js{
    statusCode: 200,
    body: cstring"Hello, World! From Nim."}
#         ^^^^^^^ -- Converting to "cstring" is needed.
  )
