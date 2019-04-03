import AWS from 'aws-sdk'
const S3Client = new AWS.S3()

const getObject = ( bucketName, key ) => {
  return new Promise((resolve, reject) => {
    let params = {
      Bucket: bucketName, 
      Key: key
    }
    S3Client.getObject(params, (err, data) => {
      if (err) reject(err) // handle any error and exit
      let object = {
        key: key,
        content: data.Body
      }
      resolve(object)
    })
  })
}

const S3 = {
  getObject: getObject
}

export default S3