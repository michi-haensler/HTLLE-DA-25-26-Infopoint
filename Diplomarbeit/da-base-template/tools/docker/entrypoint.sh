#!/bin/bash
# Author: Marko Schrempf
set -e

# Use the env TEMPLATE_NAME to change the templates folder name
TEMPLATE_NAME="${TEMPLATE_NAME:-da-base-template}"
# Use cmd arg or the env TARGET to determine the make target
TARGET="${1:-${TARGET:-pdf}}"
# Possible make targets
ALLOWED_TARGETS=("pdf" "spellcheck" "tex" "clean")

# Check if /workspace has the necessary files and folders
if [ -z "$(ls -A "doc" 2>/dev/null)" ] || [ -z "$(ls -A "img" 2>/dev/null)" ] || [ -z "$(ls -A "pdfs" 2>/dev/null)" ] || [ ! -f "literatur.bib" ] || [ ! -f "metadata.yaml" ]; then
    echo "Necessary diploma thesis files/folders are missing/incomplete"
    echo "Please ensure the diploma thesis is correctly set up"
    exit 1
fi

# Check if the template directory exists and has all the necessary files
if [ ! -d "$TEMPLATE_NAME" ] || [ ! -f "$TEMPLATE_NAME/Makefile" ] || [ -z "$(ls -A "$TEMPLATE_NAME/style" 2>/dev/null)" ]; then
    echo "Template is missing/incomplete"
    echo "Please ensure the template is correctly set up"
    exit 1
fi

# Check if the given target exists and execute it
if [[ " ${ALLOWED_TARGETS[*]} " =~ " ${TARGET} " ]]; then
    make -C "$TEMPLATE_NAME" "$TARGET" SOURCEDIR=/workspace
else
    echo "Invalid target: $TARGET"
    echo "Allowed targets: ${ALLOWED_TARGETS[*]}"
    exit 1
fi
