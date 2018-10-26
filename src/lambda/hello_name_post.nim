import jsffi, asyncjs

# import querystring from "querystring";
# https://gitter.im/nim-lang/Nim?at=5bd38b49ae7be94016bfc95d
# proc importJS(importName: cstring, moduleName: cstring) {.importcpp: "import # from '#'".}
proc importJS(importName: cstring, moduleName: cstring) {.importcpp: "import # from #".}
importJS("querystring", "querystring")
var querystring {.importc.}: js

var exports {.importc.}: js

exports.handler = proc(event: js, context: js): Future[js] {.async.} =
  # Only allow POST
  let
    httpMethod = $(event.httpMethod.to(cstring))
  if httpMethod != "POST":
    return js{
      statusCode: 405,
      body: "Method Not Allowed"
    }

  let
    params = querystring.parse(event.body)
  var
    name = $(params.name.to(cstring))
  if name == "":
    name = "World"

  return js{
    statusCode: 200,
    body: cstring("Hello, " & name & "! From Nim.")
  }

# https://nim-lang.github.io/Nim/jsffi.html
