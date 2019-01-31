'use strict';

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';
import routes from './REST/routes';

const app = express();


app.use(express.static('public'));
app.use(express.json());
app.use(cors());

mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true}, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log('Connect with database established');
    }
});
process.on('SIGINT', () => {
    mongoose.connection.close(function () {
        console.error('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});


// Statyczne dane (stare)
// const posts = [
//     {id: 1, title: "Lorem Ipsum", url: "https://www.w3schools.com/w3css/img_lights.jpg"},
//     {id: 2, title: "Lorem Ipsum2", url: "https://www.w3schools.com/w3css/img_lights.jpg"},
//     {id: 3, title: "Lorem Ipsum3", url: "https://www.w3schools.com/w3css/img_lights.jpg"},
// ]

// app.get('/api/posts', (req, res) =>  {
//     res.send(posts);
// })

// app.get('api/posts/:id', (req, res) => {
//     const post = posts.find((p) => p.id === parseInt(req.param.id));
//     if(!post) {
//         res.status(404).send("Post NotFound");
//     }
//     res.send(post);
// })

// app.post('/api/posts', (req, res) => {
//     const post = {
//       id: posts.length + 1,
//       title: req.body.name,
//       text: req.body.text
//     };
//     posts.push(post);
//     res.send(post);
//   });
  
//   app.put('/api/posts/:id', (req, res) => {
//     const post = posts.find((p) => p.id === parseInt(req.params.id));
//     if (!post) {
//       res.status(404).send("Post NotFound");
//     }
//     post.title = req.body.title;
//     post.text = req.body.text;
//     res.send(post);
//   });
  
//   app.delete('/api/posts/:id', (req, res) => {
//     const post = posts.find((p) => p.id === parseInt(req.params.id));
//     if (!post) {
//       res.status(404).send("Post NotFound");
//     }
//     const index = posts.indexOf(posts);
//     posts.splice(index, 1, null);
//     res.send(post);
//   });

  routes(app);
  app.listen(config.port, () => {
     console.info(`Server is running at ${config.port}`)
  });
