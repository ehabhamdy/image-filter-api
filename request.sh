#!/bin/bash

curl -H "X-API-Key: udacity-image-filter-2025" \
"http://image-filter-app-dev22.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg" \
--output filtered_image.jpg