#!/bin/sh
# @desc Update build date/time tag file with current timestamp
# @changed 2020.05.19, 19:40
# NOTE: This script updates only .txt files not properties in `package.json`.
# Use `util-update-build-variables.sh` script before build.

node ./util-update-build-time.js
