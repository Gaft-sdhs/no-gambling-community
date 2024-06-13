import React from 'react';
import styled from 'styled-components';

const PopularPostsWrapper = styled.div`
  width: 20%;
  background-color: #f5f5f5;
  padding: 10px;
`;

const PopularPosts: React.FC = () => {
  return (
    <PopularPostsWrapper>
      <h2>인기 게시글</h2>
      {/* Add post items here */}
    </PopularPostsWrapper>
  );
}

export default PopularPosts;
