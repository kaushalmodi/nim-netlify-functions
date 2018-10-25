import strutils

task genJS, "Generate JS files from Nim":
  for f in listFiles(thisDir()):
    if f.endsWith(".nim"):
      selfExec("js $1" % [f])
  echo "JS files are created in the ./nimcache/ directory"
