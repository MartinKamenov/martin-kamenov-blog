import gql from 'graphql-tag';

const queries = {
    ALL_POSTS_QUERY: gql`
    query PostsQuery {
        posts {
            id
            title
            subTitle
            description
            created
            updated
            imageUrl
            content
        }
    }
    `,
    SINGLE_POST_QUERY: gql`
    query PostQuery($id: String) {
        post(id: $id) {
            id
            title
            subTitle
            description
            created
            updated
            imageUrl
            content
        }
    }`
};

export default queries;