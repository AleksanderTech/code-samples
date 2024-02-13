#!/bin/bash

# Replace the current process with a script or different command
echo "1"
exec ./script-2.bash
echo "This will not be executed"
