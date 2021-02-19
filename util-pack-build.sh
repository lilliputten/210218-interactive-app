#!/bin/sh
# @desc Pack build
# @changed 2020.11.17, 18:27

PRJNAME="interactive"

# Config import
# . ./util-config.sh

# DATE=`date "+%Y.%m.%d %H:%M:%S"`
# DATETAG=`date "+%y%m%d-%H%M"`

# BUILDTYPE="prod"
# if [ "$1" != "" ]; then
#   BUILDTYPE="$1"
# fi
# FOLDER="build-$BUILDTYPE"

FOLDER="build"

TAGFILE="$FOLDER/version.txt"
# echo "Tag file: $TAGFILE"
if [ ! -f "$TAGFILE" ]; then
  echo "No build tag file ($TAGFILE) exist!"
  exit 1
fi

BUILDTAG=`cat "$TAGFILE"`
echo "Build: $BUILDTAG"

# TODO: Use `util-config.sh`
ARCFOLDER="../!ARC"

ARCNAME="$PRJNAME-$BUILDTAG.zip"

echo "Packing $ARCNAME..." \
  && mkdir -p "$ARCFOLDER" \
  && cd "$FOLDER" \
  && zip -r "../$ARCFOLDER/$ARCNAME" * \
  && echo "Packed $ARCNAME"
