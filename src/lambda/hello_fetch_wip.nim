import jsffi, asyncjs

const
  apiEndpoint = cstring"https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke"

var
  exports {.importc.}: js
  console {. importc, nodecl .}: js

let
  # https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
  https = require(cstring"https")

exports.handler = proc(event: js, context: js): Future[js] {.async.} =

  let
    resp = https.get(apiEndpoint)

  console.log(resp)

  return js{
    statusCode: 200,
    body: cstring""
  }

# https://nim-lang.github.io/Nim/jsffi.html
