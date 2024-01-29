#!/usr/bin/env bash

# Parameters
ENV=${REACT_APP_NODE_ENV:-development}
INSTANCE=${REACT_APP_NODE_APP_INSTANCE:-siteA}

# Variables
PUB="public"
SITES="sites"

# Files containing the variables for the template
# default.json is always applied and if not present index.html would NOT be generated!
# <instance>.json only if present in the sites/instance path
VARS_DEFAULT_FILE=${PUB}/default.json
VARS_ENV_FILE=${PUB}/${ENV}.json

# Template files as parameters to the CLI command
VARS_DATA_PARAMS=""

# Start script
echo "ENV: $ENV"
echo "INSTANCE: $INSTANCE"
echo

# Copy ALL THE FILES for the instance into the public web folder if the instance folder exists
[ -d ${SITES}/${INSTANCE} ] && command cp ${SITES}/${INSTANCE}/* ${PUB}

# Only run if we have default template variables file
if [ -f ${VARS_DEFAULT_FILE} ]
then
  # Compose the parameter string for the CLI command
  VARS_DATA_PARAMS="-D ${VARS_DEFAULT_FILE}"

  # If we have the environment variables file concatenate it to the data parameters variable
  [ -f ${VARS_ENV_FILE} ] && VARS_DATA_PARAMS="${VARS_DATA_PARAMS} -D ${VARS_ENV_FILE}"

  # Run the CLI for handlebars to hydrate the template with the data files
  command npx hbs ${VARS_DATA_PARAMS} template/index.hbs -o ${PUB}

  # Remove the copied template json files except manifest.json and config.json
  command find ${PUB}/*.json ! -name manifest.json | xargs rm
fi
# End script

echo "┌-----------------┐"
echo "| Pre-Build Done! |"
echo "└-----------------┘"
