export class Metric {
  public timestamp: string
  public value: number

  constructor(ts: string, v: number) {
    this.timestamp = ts
    this.value = v
  }
}

export class MetricsHandler {
  private db: any

  constructor(db:any) { 
    this.db = db
  }
  public save(metric: Metric, callback: (err: Error | null, result?: any) => void) {
    const collection = this.db.collection('documents')
    // Insert some document
    collection.insertOne(
      metric,
      function(err: any, result: any) {
        if(err)

return callback(err, result)
        console.log("Document inserted into the collection")
        callback(err, result)
    });
  }

  public getOne(params:any, callback: (err: Error | null, result?: any) => void) {
    console.log(params)
    const collection = this.db.collection('documents');
    console.log(this.db)
  // Find some documents
    collection.find({'value': parseInt(params)}).toArray(function(err: any, docs: object) {
      if(err)
        throw err
      console.log("Found the following documents");
      callback(err, docs)
    });
  }
  public deleteDoc(params:any, callback: (err: Error | null, result?: any) => void) {
    const collection = this.db.collection('documents');
  // Find some documents
    collection.remove({'value': parseInt(params)}, function(err:any, obj:any) {
      if(err)
        throw err
      console.log("Found the following documents");
      callback(err)
    });
  }
}

