import React from 'react';
import styled from 'styled-components';

const NewsSectionWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const NewsBox = styled.div`
  width: 45%;
  background-color: #f5f5f5;
  padding: 10px;
`;

const NewsSection: React.FC = () => {
  return (
    <NewsSectionWrapper>
      <NewsBox>
        <h3>중앙일보</h3>
        {/* Add news items here */}
      </NewsBox>
      <NewsBox>
        <h3>동아일보</h3>
        {/* Add news items here */}
      </NewsBox>
    </NewsSectionWrapper>
  );
}

export default NewsSection;
