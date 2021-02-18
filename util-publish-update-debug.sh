#!/bin/sh
# @desc Update publish folder to debug project location (DEBUG_LOCATION)
# @since 2020.12.08, 20:50
# @changed 2021.01.12, 15:22

TARGET_LOCATION="../WebUi"
# TARGET_LOCATION="../WebUiCoreDemo"
if [ ! -z "$1" ]; then
  TARGET_LOCATION="$1"
fi
echo "TARGET_LOCATION: $TARGET_LOCATION"
DEBUG_LOCATION="$TARGET_LOCATION/node_modules/WebUiCore"
PACKAGE_JSON="$TARGET_LOCATION/package.json"
PACKAGE_JSON_BAK="${PACKAGE_JSON}.bak"

# Import config variables (expected variables `$DIST_REPO` and `$PUBLISH_FOLDER`)...
# DIST_REPO="git@github.com:lilliputten/WebUiCoreDist.git"
# PUBLISH_FOLDER="publish"
test -f "./util-config.sh" && . "./util-config.sh"
test -f "./util-config-local.sh" && . "./util-config-local.sh"

if [ ! -d "$PUBLISH_FOLDER" ]; then
  echo "No publish folder. Probably submodule was not initialized. Use script 'util-publish-init.sh'."
  exit 1
fi

# Make build if absent
test -d build || npm run -s build || exit 1

TIMESTAMP=`cat build-timestamp.txt`
TIMETAG=`cat build-timetag.txt`
VERSION=`cat build-version.txt`

# Update (with sed, see below) version in target package.json:
# ```json
#  "WebUiCore": "http://gitlab.local/lilliputten/WebUiCore/-/archive/v.0.1.18/WebUiCore-v.0.1.18.tar.gz",
# ```
# Variant 1:
#  sed "s/\(WebUiCore\/-\/archive\/\|WebUiCore-\)v\(\.[0-9]\+\)\{3\}/\1v.$VERSION/g" $PACKAGE_JSON_BAK > $PACKAGE_JSON && \
# Variant 2:
#  sed "s/\(\"WebUiCore\": \".*\)v\.\(.*\)\/WebUiCore-v\.\2/\1v.$VERSION\/WebUiCore-v.$VERSION/g" $PACKAGE_JSON_BAK > $PACKAGE_JSON && \

echo "Updating debug installation ($VERSION, $TIMESTAMP)..." && \
  cp -vRfu build/* $DEBUG_LOCATION/ && \
  echo "Updating target project version in '$PACKAGE_JSON'..."
  cp -f $PACKAGE_JSON $PACKAGE_JSON_BAK && \
  sed "s/\(\"WebUiCore\": \".*\)dist\.\(.*\)\/WebUiCore-dist\.\2/\1dist.$VERSION\/WebUiCore-dist.$VERSION/g" $PACKAGE_JSON_BAK > $PACKAGE_JSON && \
  rm -f $PACKAGE_JSON_BAK && \
  echo OK
