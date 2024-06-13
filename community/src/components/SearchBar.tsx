import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f5f5f5;
`;

const SearchInput = styled.input`
  width: 70%;
  padding: 5px;
`;

const SearchText = styled.span`
  align-self: center;
`;

const SearchBar: React.FC = () => {
  return (
    <SearchBarWrapper>
      <SearchInput type="text" placeholder="검색" />
      <SearchText>총 게시글 1000개 등록</SearchText>
    </SearchBarWrapper>
  );
}

export default SearchBar;
