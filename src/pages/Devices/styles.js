import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  header {
    text-align: center;
  }
`;

export const Results = styled.div`
  padding: 0 3rem;

  div {
    padding: 1rem 0;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    p {
      white-space: nowrap;

      padding: 10px;
      background: #e0e0e0;
      border-radius: 4px;

      display: flex;
      justify-content: space-between;

      max-width: 300px;

      :hover {
        filter: brightness(0.9);
      }

      > span {
        /* color: white; */

        &:last-child {
          span {
            background: #4d24ad;
            border-radius: 4px;

            padding: 5px;

            margin-right: 0.5rem;

            color: white;

            font-weight: 600;
          }
        }
      }
    }
  }
`;