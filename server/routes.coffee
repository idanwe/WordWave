options = {}

exports.__defineSetter__ "options", (value) ->
  options = value
exports.__defineGetter__ "options", ->
  options

getAllFiles = directory: { path: "app" }

exports.routes = [
  { method: "GET", path: "/{path*}", handler: getAllFiles }
]
