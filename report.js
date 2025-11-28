const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/48223906-6fc0d6e2-57c5-435e-830e-e5917b4a108f?access_key=${process.env.secretkey}`,
    
    // collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
