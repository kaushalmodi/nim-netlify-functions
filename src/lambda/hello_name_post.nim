import jsffi, asyncjs

# import querystring from "querystring";
# https://gitter.im/nim-lang/Nim?at=5bd38b49ae7be94016bfc95d
# Attempt 1
# proc importJS(importName: cstring, moduleName: cstring) {.importcpp: "import # from '#'".}
# proc importJS(importName: cstring, moduleName: cstring) {.importcpp: "import # from #".}
# importJS("querystring", "querystring")
# Attempt 2
# {. emit: """import querystring from "querystring";""" .}
# var querystring {.importc.}: js

# None of the above works, because:
#   https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import
# So using "require" instead.
let querystring = require(cstring"querystring")

var exports {.importc.}: js

exports.handler = proc(event: js, context: js): Future[js] {.async.} =
  # Only allow POST
  let
    httpMethod = $(event.httpMethod.to(cstring))
  if httpMethod != "POST":
    return js{
      statusCode: 405,
      body: cstring"Method Not Allowed"
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
