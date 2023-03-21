// The code below shows how you can use a connection URI in a client to connect to MongoDB.
//Code dòng 3 nằm trong document MongoDB Node Driver: https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/
const { MongoClient } = require("mongodb"); //Lớp {MongoClient} là lớp cho phép tạo Kết nối với MongoDB. Tương đương với require('mongodb').MongoClient

class MongoDB {
    static connect = async (uri) => { //connect là 1 property
        if(this.client) return this.client; //client cũng là 1 property
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

module.exports = MongoDB;
//đây là lớp trợ giúp kết nối tới mongodb