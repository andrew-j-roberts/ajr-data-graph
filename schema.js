import { gql } from 'apollo-server-lambda'

const typeDefs = gql`
  type Query {
    file(name: String!): File
  }

  type File {
    name: String!
    content: String
  }

`

export default typeDefs


// type UploadFileResponse {
//   success: Boolean!
//   message: String
//   uploadedFile: File
// }

// type Mutation {
//   uploadFile(file: FileInput): UploadFileResponse
// }

// type FileInput {
//   name: String!
//   content: String
// }