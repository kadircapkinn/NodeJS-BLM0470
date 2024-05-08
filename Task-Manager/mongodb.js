const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://kadircapkin:BpXh5ZzyO2NhTeQ2@btu.cjwmhfy.mongodb.net/?retryWrites=true&w=majority&appName=btu";

const databaseName = "task-manager";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const id = new ObjectId();
    console.log(id)
    console.log(id.getTimestamp()) // tarih ve zaman bilgisi
    console.log(id.id.length)
    console.log(id.toHexString.length)
    

    const db = client.db(databaseName)

    await db.collection('users').findOne({name:"Kadir"}).then((data)=>{
        console.log(data.age);
    }).catch(error=>{
        console.log(error);
    }) // Tek bir değer döndürür.
    /*
    await db.collection('users').insertOne({ // tek veri ekleme
        _id:id,
        name: "Mert",
        age : 18
    });*/ // tek kayıt*/
    /*
    await db.collection('users').insertMany([{ // çoklu veri ekleme
        name:"test1",
        age:20
    },{
        name:"test2",
        age:30
    }])*/


    /*
    await db.collection('tasks').insertMany([{
        description:"Odani temizle",
        completed:true
    },{
        description:"Cicekleri sula",
        completed:false
    },{
        description:"Odevlerini yap",
        completed:false
    }])*/

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
