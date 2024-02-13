#!/bin/bash

# Be cautious with untrusted input
user_input="; rm -rf /"
eval "echo $user_input"
