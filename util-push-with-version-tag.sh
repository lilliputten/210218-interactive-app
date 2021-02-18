#!/bin/sh
# @desc Create/update version tag (from build folder)
# @since 2020.12.30, 20:24
# @changed 2020.12.30, 20:24

# Config import
# . ./util-config.sh

# DATE=`date "+%Y.%m.%d %H:%M:%S"`
# DATETAG=`date "+%y%m%d-%H%M"`

VERSIONFILE="build-version.txt"
if [ ! -f "$VERSIONFILE" ]; then
  echo "No version file ($VERSIONFILE) exist!"
  exit 1
fi

VERSION=`cat "$VERSIONFILE"`

echo "Create/update tag v.$VERSION..." \
  && git tag -f "v.$VERSION" \
  && git push origin -f --tags \
  && git push github -f --tags \
  && echo "OK"
