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
            likes
            comments
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
            likes
            comments
        }
    }`,
    MY_PROFILE_QUERY: gql`
    query ProfileQuery($id: String) {
        profile(id: $id) {
          id
          firstName
          lastName
          imageUrl
          companies
        }
    }`,
    UPDATE_LIKES_MUTATION: gql`
    mutation UpdateLikesMutation($id: String!, $like: String!) {
        updateLikes(id: $id, like: $like) {
            id
            title
            subTitle
            description
            created
            updated
            imageUrl
            content
            likes
            comments
        }
    }`,
    UPDATE_COMMENTS_MUTATION: gql`
    mutation UpdateCommentsMutation($id: String!, $comment: String!) {
        updateComments(id: $id, comment: $comment) {
            id
            title
            subTitle
            description
            created
            updated
            imageUrl
            content
            likes
            comments
        }
    }`
};

export default queries;