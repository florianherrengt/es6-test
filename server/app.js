import express from 'express';
import path from 'path';
import videoAPI from './api/video';
import compression from 'compression'

var app = express();

app.use(compression());

app.use(express["static"](path.join(__dirname, "public")));

app.use('/api/videos', videoAPI);

app.listen(3000, ()=> {
    console.log('Server listen on port ' + 3000);
});
