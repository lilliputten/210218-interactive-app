#!/bin/sh
# @desc Increment version number
# @changed 2020.12.30, 20:07

# Import config variables (expected variables `$DIST_REPO` and `$PUBLISH_FOLDER`)...
# DIST_REPO="git@github.com:lilliputten/WebUiCoreDist.git"
# PUBLISH_FOLDER="publish"
# test -f "./util-config.sh" && . "./util-config.sh"
# test -f "./util-config-local.sh" && . "./util-config-local.sh"

# if [ ! -d "$PUBLISH_FOLDER" ]; then
#   echo "No publish folder. Probably submodule was not initialized. Use script 'util-publish-init.sh'."
#   exit 1
# fi

VERSION_FILE="build-version.txt"
BACKUP="$VERSION_FILE.bak"

test -f "$VERSION_FILE" || echo "0.0.0" > "$VERSION_FILE"

echo "Current version: `cat $VERSION_FILE`"

# Extract patch number
PATCH_NUMBER=`cat "$VERSION_FILE" | sed "s/^\(.*\)\.\([0-9]\+\)$/\2/"`

if [ "$PATCH_NUMBER" == "" ]; then
  echo "No patch number found!"
  exit 1
fi

# Increment patch number
NEXT_PATCH_NUMBER=`expr $PATCH_NUMBER + 1`

# echo "Increment patch number ($PATCH_NUMBER -> $NEXT_PATCH_NUMBER)"

cp "$VERSION_FILE" "$BACKUP" \
  && cat "$BACKUP" \
    | sed "s/^\(.*\)\.\([0-9]\+\)$/\1.$NEXT_PATCH_NUMBER/" \
    > "$VERSION_FILE" \
  && rm "$BACKUP" \
  && echo "Updated version: `cat $VERSION_FILE`" \
  && sh "./util-update-build-variables.sh" \
  && VERSION=`cat "$VERSION_FILE"` \
  && echo "Don't forget to update version for target project dependency (package.json, WebUiCore entry)"
