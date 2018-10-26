import jsffi, asyncjs

var exports {.importc.}: js
var process {.importc.}: js

# https://nim-lang.github.io/Nim/jsffi.html

let
  # The GREETING env var *has* to be set in the Netlify console, else you get this error:
  # {
  #    "errorMessage":"Cannot read property 'length' of undefined",
  #    "errorType":"TypeError",
  #    "stackTrace":[
  #       "Object.<anonymous> (/var/task/hello_env.js:142:23)",
  #       "Module._compile (module.js:652:30)",
  #       "Object.Module._extensions..js (module.js:663:10)",
  #       "Module.load (module.js:565:32)",
  #       "tryModuleLoad (module.js:505:12)",
  #       "Function.Module._load (module.js:497:3)",
  #       "Module.require (module.js:596:17)",
  #       "require (internal/module.js:11:18)"
  #    ]
  # }
  greeting = process.env.GREETING

exports.handler = proc(event: js, context: js): Future[js] {.async.} =
  let
    greetingStr = if (greeting == jsNull):
                    "GREETING environment variable was null"
                  elif (greeting == jsUndefined):
                    "GREETING environment variable was undefined"
                  else:
                    $(greeting.to(cstring))

  return js{
    statusCode: 200,
    body: cstring(greetingStr)
    }
