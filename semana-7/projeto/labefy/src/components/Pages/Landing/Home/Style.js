import styled from "styled-components";

const StyledHome = styled.div`
  margin: 16px;
  text-align: left;
  > div.cardGrid {
    margin: 16px 0;
    display: flex;
    > div.card {
      border-radius: 5px;
      position: relative;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background: #282828;
      margin: 0 8px;
      padding: 16px;
      > p {
        margin: 4px 0;
      }
      > span {
        color: white;
        position: absolute;
        background: #1ed760;
        border-radius: 50%;
        padding: 8px;
        bottom: 0;
        right: 0;
        margin: 8px;
        display: none;
        transition: all 0.2s ease-in-out;
        :hover {
          padding: 10px;
          margin: 6px;
          cursor: default;
        }
      }
      :hover {
        > span {
          display: block;
        }
      }
    }
  }
`;

export { StyledHome };
