#!/bin/sh
# @desc Update version number & build timestamps
# @changed 2020.10.06, 02:18

node ./util-update-build-time.js

TIMESTAMP=`cat build-timestamp.txt`
TIMETAG=`cat build-timetag.txt`
VERSION=`cat build-version.txt`

echo "Version/time: $VERSION / $TIMESTAMP"

function UPDATE_FILE() {
  FILE=$1
  if [ ! -f $FILE ]; then
    # echo "File $FILE not exists"
    return
  fi
  EXT="${FILE##*.}" # Exract extension
  echo "Processing file $FILE..."
  mv $FILE $FILE.bak || exit 1
  if [ "$EXT" == "json" ]; then # JSON
    cat $FILE.bak \
      | sed "s/\(\"version\":\) \".*\"/\1 \"$VERSION\"/" \
      | sed "s/\(\"timestamp\":\) \".*\"/\1 \"$TIMESTAMP\"/" \
      | sed "s/\(\"timetag\":\) \".*\"/\1 \"$TIMETAG\"/" \
    > $FILE || exit 1
  else # MD
    cat $FILE.bak \
      | sed "s/^\(-* *Version:\) .*$/\1 $VERSION/" \
      | sed "s/^\(-* *Last changes timestamp:\) .*$/\1 $TIMESTAMP/" \
      | sed "s/^\(-* *Last changes timetag:\) .*$/\1 $TIMETAG/" \
    > $FILE || exit 1
  fi
  rm $FILE.bak || exit 1
}

UPDATE_FILE "package.json"
UPDATE_FILE "static-build-files/package.json"
UPDATE_FILE "README.md"
UPDATE_FILE "static-build-files/README.md"
