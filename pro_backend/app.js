const express = require('express');
const bodyParser = require('body-parser');
const database = require('mysql');
const upload = require('express-fileupload');
var koneksi = require('cors');
var app = express();

const dbs = database.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'usbw',
        database: 'db_product',
        port: '3307'
    });
dbs.connect();

var port = 8000;

app.use(koneksi());
app.use(upload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// ======================PRODUCTS========================================================
// To query all products
app.get('/', (req, res) => {
    var queryProduct = 'SELECT * FROM product';
    dbs.query(queryProduct, (Error, queryResult) => {
        if(Error){
            throw Error;
        } else {
            res.send(queryResult);
        }
    });
    
});

// To add new product
//Without Photo
// app.post('/addproduct', (req, res) => {
//     var productName = req.body.input1;
//     var categoryID = req.body.input2;
//     var productPrice = req.body.input3;
//     console.log (productName);
//     var queryAdd = `INSERT INTO product VALUES("${''}", "${categoryID}", "${productName}",  "${productPrice}")`;
    
//     dbs.query(queryAdd, (Err, queryResult) => {
//          if(Err){
//              throw Err;
//          } else {
//              res.end('Product has been successfully added')
//          }
//      });
//  });
// With Photo upload
app.post('/addproduct', (req, res) => {
    var nameprod = req.body.productname;
    var idcat = req.body.categoryid;
    var priceprod = req.body.productprice;
    var fileName = req.files.file.name;
    // console.log (productName);

     // Ketika dapat kiriman yang berbentuk files maka akan dijalankan fungsi ini
     if(req.files)
     {
         var fungsiFile = req.files.file;
 
         fungsiFile.mv("./tampunganFile/"+fileName, (kaloError) => {
             if(kaloError){
                 console.log(kaloError);
                 res.send('Upload failed');
             } else {
                 res.send('Upload berhasil');
             }
         })
     }
     
     var queryAdd = `INSERT INTO product VALUES("${''}", "${idcat}", "${nameprod}", "${priceprod}", 
        "${fileName}")`;    

 dbs.query(queryAdd, (Err, queryResult) => {
     if(Err){
         throw Err;
     } else {
         res.end('Product has been successfully added')
     }
 });
});

// Get and Query the Product Data (will be used for first showing in Update and Delete Product page)
app.get('/getproductdata/:id', (req, res) => 
{
    var grabData = `SELECT * FROM  product WHERE productID = ${req.params.id}`;

    dbs.query(grabData, (Err, queryResult) => {
        if(Err)
        {
            throw Err;
        } 
        else 
        {
            res.send(queryResult);
        }
    });
});

// To Update product
app.post('/editproduct', (req, res) => 
{
    var idprod = req.body.productid;
    var nameprod = req.body.productname;
    var idcat = req.body.categoryid;
    var priceprod = req.body.productprice;
    var fileName = req.files.file.name;

    // Ketika dapat kiriman yang berbentuk files maka akan dijalankan fungsi ini
    if(req.files)
    {
        var fungsiFile = req.files.file;

        fungsiFile.mv("./tampunganFile/"+fileName, (kaloError) => {
            if(kaloError){
                console.log(kaloError);
                res.send('Upload failed');
            } else {
                res.send('Upload berhasil');
            }
        })
    }

    var queryUpdate = `UPDATE product SET productName = "${nameprod}", categoryID = "${idcat}", 
        price = "${priceprod}", productPhoto = "${fileName}" WHERE productID = "${idprod}" `;    

    dbs.query(queryUpdate, (Err, queryResult) => {
        if(Err){
            throw Err;
        } else {
            res.end('Update success!')
        }
    });
 });

// To DELETE product
app.post('/deleteproduct', (req, res) => 
{
    var idprod = req.body.productid;
    // var nameprod = req.body.productname;
    // var idcat = req.body.categoryid;
    // var priceprod = req.body.productprice;
    var queryDelete = `DELETE FROM product WHERE productID = "${idprod}" `;    

    dbs.query(queryDelete, (err, result) => {
        if(err){
            throw err;
        } else {
            res.end('Delete success!')
        }
    });
 });
//  ============================End of PRODUCTS part======================================

// ===========================CATEGORIES=================================================

// To query all category list
app.get('/category', (req, res) => {
    var queryCategory = 'SELECT * FROM category';
    dbs.query(queryCategory, (Error, queryResult) => {
        if(Error){
            throw Error;
        } else {
            res.send(queryResult);
        }
    });
    
});

// To add new category
app.post('/addcategory', (req, res) => {
    var catName = req.body.input1;
    var catDesc = req.body.input2;
    console.log (catName);
    var queryAdd = `INSERT INTO category VALUES("${''}", "${catName}", "${catDesc}")`;
    
    dbs.query(queryAdd, (Err, queryResult) => {
         if(Err){
             throw Err;
         } else {
             res.end('Category has been successfully added')
         }
     });
 });

 // Get and Query the Category Data (will be used for Update and Delete Category)
app.get('/getcategorydata/:categoryid', (req, res) => {
    var grabData = `SELECT * FROM  category WHERE categoryID = ${req.params.categoryid}`;

    dbs.query(grabData, (Err, queryResult) => {
        if(Err)
        {
            throw Err;
        } 
        else 
        {
            res.send(queryResult);
        }
    });
    
});

// To Update category
app.post('/editcategory', (req, res) => 
{
    var idCat = req.body.categoryid;
    var nameCat = req.body.categoryname;
    var descCat = req.body.categorydesc;
    var queryUpdate = `UPDATE category SET categoryName = "${nameCat}", description = "${descCat}" WHERE categoryID = "${idCat}" `;    

    dbs.query(queryUpdate, (Err, queryResult) => {
        if(Err){
            throw Err;
        } else {
            res.end('Update success!')
        }
    });
 });


// ==========================End of CATEGORIES part=======================================

app.listen(port, () => {
    console.log('Server is running on port '+port+' ....')
});