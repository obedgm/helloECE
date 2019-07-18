import { Metric, MetricsHandler } from '../src/metrics'

var metrics = [new Metric('1', 11), new Metric('2', 12), new Metric('3', 13), new Metric('4', 14)]

import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient
MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, (err: any, client: any) => {
  if(err) throw err
  const db = client.db('testDB')
  metrics.map(metric => {
    new MetricsHandler(db).save(metric, (err: any, result: any) => {
      if (err) console.log(err)
    })
  })
  client.close()
});