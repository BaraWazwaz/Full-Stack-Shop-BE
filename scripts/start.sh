#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
  exec npx tsx app/index.ts
else
  exec npx tsx watch --clear-screen=false app/index.ts
fi
