#!/bin/sh

if [ "$#" -eq 1 ] && [ "$1" = "local" ]; then
  ENV_FILE="../../env/.env.development"
  if [ -f "$ENV_FILE" ]; then
    set -a
    . "$ENV_FILE"
    set +a
  else
    echo "Warning: Environment file not found at $ENV_FILE" >&2
  fi
fi

if [ "$NODE_ENV" = "production" ]; then
  exec yarn run tsx app/index.ts
else
  exec yarn run tsx watch --clear-screen=false app/index.ts
fi
