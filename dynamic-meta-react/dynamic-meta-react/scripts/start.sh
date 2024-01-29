#!/usr/bin/env bash

# Description:
#    Wrapper around the react-scripts to export the env variables for the prebuild script

export REACT_APP_NODE_ENV="${REACT_APP_NODE_ENV:-development}"
export REACT_APP_NODE_APP_INSTANCE="${REACT_APP_NODE_APP_INSTANCE:-siteA}"

# Run the prebuild with the exported above ENV variables
sh scripts/prebuild.sh

# Start the app
npx react-scripts start
