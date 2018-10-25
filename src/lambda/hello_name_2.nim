import jsffi
import asyncjs

var exports {.importc.}: js
#           ^^^^^^^^^^^ -- This *has* to be between var name and the "js" type.

exports.handler = proc(event: js, context: js): Future[js] {.async.} =
  var
    # https://gitter.im/nim-lang/Nim?at=5bd24373069fca52a5945a0b
    name: string = $(event.queryStringParameters.name.to(cstring))
  if name == "":
    name = "World"

  return js{
    statusCode: 200,
    body: cstring("Hello, " & name & "! From Nim.")
    }

# https://nim-lang.org/docs/asyncjs.html
# https://gitter.im/nim-lang/Nim?at=5bd22ab6435c2a518e0518c1
