#!/bin/bash
cd /home/kavia/workspace/code-generation/moodmelody-27204-ea2efd86/moodmelody_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

