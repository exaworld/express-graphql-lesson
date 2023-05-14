import { authors } from '../../data.js';
import AuthorType from './AuthorType.js';
import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'Book written by an author',
    fields: () =>({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: (book) => {
                return authors.find(author => author.id === book.authorId)
            }
        }
    })
})

export default BookType;
