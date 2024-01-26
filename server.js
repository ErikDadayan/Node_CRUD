var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set("view engine","ejs")

app.get("/", function(req, res){

    const mongoose = require('mongoose');
    const connectionString = 'mongodb+srv://erikdadayan:20081998@cluster0.pgia5pf.mongodb.net/sample_mflix'                                                                                                                                                                                                                                         ;
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
    try {
    let result = await mongoose.connection.db.collection('theaters').find({'location.address.city':'Bloomington'}).toArray()
    res.render('../public/form.ejs', {
    obj: result
    });
    } catch (error) {
    console.error('Error retrieving movies:', error);
    } finally {
    mongoose.connection.close();
    }
    })
    res.render("../public/form.ejs" ,{
//     try {
//        let result = await mongoose.connection.db.collection('users').updateOne({title:"Wild and Woolly"}, {$set:{year:2028,plot:"hajox",runtime:200} })

//         // res.json(result);
//     } catch (error) {
//         console.error('Error retrieving movies:', error);
//     } finally {
//         mongoose.connection.close();
//     }
// })
    })
});

app.post('/addName', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');
        try {
           let result = await mongoose.connection.db.collection('users').insertOne({
                name: name,
                email: email,
                password: password
            })
            res.json(result);
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
 });




app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
