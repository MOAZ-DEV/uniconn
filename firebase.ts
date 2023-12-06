import { ApolloServer, ApolloError, ValidationError, gql } from 'apollo-server';
var admin = require("firebase-admin");
var serviceAccount = require("./uniconnapp-647fc-firebase-adminsdk-darid-2aba37de51.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://uniconnapp-647fc-default-rtdb.europe-west1.firebasedatabase.app"
}); 


class User {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

const typeDefs = gql`
  type Query {
    user(id: ID!): User
  }
`;

const resolvers = {
    Query: {
      async user(_: null, args: { id: string }) {
        try {
          const userDoc = await admin
            .firestore()
            .doc(`users/${args.id}`)
            .get();
          const user = userDoc.data() as User | undefined;
          return user || new ValidationError('User ID not found');
        } catch (error) {
        }  
      }
    },
  };




const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});