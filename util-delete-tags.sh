#!/bin/sh
# @desc Create/update version tag (from build folder)
# @since 2020.12.30, 20:24
# @changed 2021.01.11, 14:32

if [ $# -lt 1 ]; then
  echo "Usage: $0 <TAGS_LIST>"
  echo "See available local tags with command: 'git tag'"
  exit 1
fi

TAGS="$*"
echo "Deleting tags: $TAGS"
git push --delete origin $TAGS
git push --delete github.com $TAGS
git tag -d $TAGS
git push -f --tags origin
git push -f --tags github.com
