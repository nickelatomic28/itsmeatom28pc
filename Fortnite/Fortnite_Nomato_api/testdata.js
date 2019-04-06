const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('restaurantsa9126b3.csv')
        .pipe(csv())
        .on('data',(row)=>{
            console.log(row["Restaurant ID"]);
        })
        .on('end',()=>{
            console.log('CSV file successfully processed');
        })
       