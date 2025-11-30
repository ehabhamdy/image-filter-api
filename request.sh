#!/bin/bash
# Request the filtered image from the local server
curl -H "X-API-Key: udacity-image-filter-2025" \
"http://localhost:8082/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg" \
--output filtered_image.jpg