import gql from 'graphql-tag';

const queries = {
    ALL_POSTS_QUERY: gql`
        {
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
};

export default queries;