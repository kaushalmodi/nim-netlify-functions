import jsffi, asyncjs

var exports {.importc.}: js
var process {.importc.}: js

let
  greeting = process.env.GREETING

exports.handler = proc(event: js, context: js): Future[js] {.async.} =
  let
    greetingStr = if (greeting == jsNull): # If the env var is not set at all
                    "GREETING environment variable was null"
                  else:
                    $(greeting.to(cstring))

  return js{
    statusCode: 200,
    body: cstring(greetingStr)
    }

# https://nim-lang.github.io/Nim/jsffi.html
