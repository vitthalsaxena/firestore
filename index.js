const {Firestore}=require('@google-cloud/firestore')

//Entry point
async function writetoFS(){
    const firestore=new Firestore({
        projectId: "cloudapp-visaxen-globaljags",
        //databaseId
    });

    //Create a dummy object for demo purposes
    let dataObject={};

    //Add some key:value pairs
    dataObject.firstname='V';
    dataObject.lastname='S';

    console.log('The dataobject: ');
    console.log(dataObject);

    let collectionRef=firestore.collection('users');
    let docRef=await collectionRef.add(dataObject);

    console.log(`Document created: ${docRef.id}`);

}

//Call the entry point
writetoFS();