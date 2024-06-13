import React from 'react';
import styled from 'styled-components';

const PostsListWrapper = styled.div`
  width: 25%;
  background-color: #f5f5f5;
  padding: 10px;
`;

const PostsList: React.FC = () => {
  return (
    <PostsListWrapper>
      {/* Add posts here */}
    </PostsListWrapper>
  );
}

export default PostsList;
