#!/bin/bash

# Define the destination directory
DEST_DIR=/var/www/yourdomain.com/html

# Replace 'yourdomain.com' with your actual domain name

echo "Starting the build process for the React app..."

# Run npm build command
if npm run build; then
    echo "Build successful."
else
    echo "Build failed. Exiting..."
    exit 1
fi

echo "Deploying React app to $DEST_DIR..."

# Define the build source path
BUILD_DIR=./build

# Ensure the destination directory exists
if [ ! -d "$DEST_DIR" ]; then
    echo "Destination directory does not exist. Creating it now..."
    sudo mkdir -p "$DEST_DIR"
fi

# Copy the build directory to the destination
sudo rsync -av --delete "$BUILD_DIR/" "$DEST_DIR/"

echo "Deployment successful."
