#!/bin/sh
# @desc Update publish folder (prepare remote update)
# @since 2020.12.08, 13:44
# @changed 2020.12.08, 13:49

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

echo "Updating publish folder ($VERSION, $TIMESTAMP)..."

  # git pull && \
cd "$PUBLISH_FOLDER" && \
  rm -Rf * &&
  cp -fu ../build/.??* . &&
  cp -Rfu ../build/* . &&
  cd .. && \
  echo OK
