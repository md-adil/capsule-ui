#!/bin/bash

escape_special_character() {
    echo "$1" | sed -e 's/[\/&]/\\&/g' -e 's/\[/\\[/g' -e 's/\]/\\]/g'
}

new_package_name=$1

# Get the current name from package.json
current_name=$(grep -o '"name": *"[^"]*"' package.json | awk -F '"' '{print $4}')
echo "Current project name: $current_name"

new_name=${new_package_name}

echo "New project name: $new_name"

escaped_current_name=$(escape_special_character "$current_name")
escaped_new_name=$(escape_special_character "$new_name")

# Use sed to update the name property in package.json
if [ "$OS_TYPE" = "Darwin" ]; then
    #macOS sed command 
    sed -i '' "s/\"name\": *\"$escaped_current_name\"/\"name\": \"$escaped_new_name\"/" package.json
else    
    #Linux sed command 
    sed -i "s/\"name\": *\"$escaped_current_name\"/\"name\": \"$escaped_new_name\"/" package.json 
fi    

echo "Package name updated successfully!"
