import styled from 'styled-components';

const Section = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  border-right: 2px solid black;
  :first-child {
    border-left: 2px solid black;
  }
`;

const Article = styled.article``;

const Title = styled.div`
  text-align: center;
`;

const Body = styled.div`
  text-align: center;
  > div {
    margin-top: 16px;
    padding: 0;
  }
  p {
    margin: 0;
  }
  span {
    cursor: pointer;
    :hover {
      background: rgba(0, 0, 0, 0.15);
    }
  }
`;

export { Section, Article, Title, Body };
