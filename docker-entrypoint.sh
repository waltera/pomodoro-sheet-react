#!/bin/bash

set -e
# Exit on fail

yarn install
# Ensure packages installed. Add binstubs to bin which has been added to PATH in Dockerfile.

exec "$@"
# Finally call command issued to the docker service
