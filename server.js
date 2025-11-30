import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';



  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  app.get("/filteredimage", async (req, res) => {
    try {
      // Validate authentication header
      const apiKey = req.headers['x-api-key'];
      if (!apiKey || apiKey !== 'udacity-image-filter-2025') {
        return res.status(401).send('Unauthorized: Missing or invalid API key');
      }

      // Validate image_url query parameter
      const imageUrl = req.query.image_url;
      
      if (!imageUrl) {
        return res.status(422).send('Missing image_url parameter');
      }

      // Validate URL format
      try {
        new URL(imageUrl);
      } catch (error) {
        return res.status(422).send('Invalid image_url format');
      }

      // Filter the image
      const response = await axios({
        method: 'get',
        url: imageUrl,
        responseType: 'arraybuffer',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      const filteredPath = await filterImageFromURL(response.data);

      console.log('Filtered image path:', filteredPath);

      // Send the filtered image file
      res.sendFile(filteredPath, async (err) => {
        if (err) {
          console.error('Error sending file:', err);
          return res.status(500).send('Error sending filtered image');
        }
        
        // Delete the local file after sending
        try {
          await deleteLocalFiles([filteredPath]);
        } catch (deleteError) {
          console.error('Error deleting file:', deleteError);
        }
      });
      
    } catch (error) {
      console.error('Error processing image:', error);
      res.status(422).send('Unable to process image from provided URL');
    }
  });

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
