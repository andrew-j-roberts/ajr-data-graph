import S3 from './S3'

// reducers
const fileReducer = (s3Object) => {
  let file = {
    name: s3Object['key'],
    content: s3Object['content'].toString('base64')
  }
  return file
}

// getters
const getFile = async (name) => {
  // something like this:
  // get file metadata for file name
  // retrieve file content from s3
  // pass in metadata['fileType'] and file content into reducer
  let s3Object = await S3.getObject('ajr-data', name)
  let file = fileReducer(s3Object)
  return file
}

// export resolvers under Query root object
const resolvers = {
  Query: {
    //file: () => {return {"name": 'Hello world!', "content": "YO"}},
    file: async (_, {name}, __) => getFile(name)
  }
}

export default resolvers