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
    }`,
    MY_PROFILE_QUERY: gql`
    query ProfileQuery($id: String) {
        profile(id: $id) {
          id
          firstName
          lastName
          imageUrl
          companies {
            name
            description
            imageUrl
          }
        }
    }`
};

export default queries;