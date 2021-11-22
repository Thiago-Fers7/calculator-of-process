import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  height: calc(100vh - 4rem);

  display: grid;
  place-items: center;
  
  header {
    text-align: center;
  }

  > div {
    h1 {
      text-align: center;
      margin-bottom: 2rem
    }
  }
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 100px;

  a {
    font-size: 24px;
    color: white;

    text-decoration: none;

    padding: 2.5rem 5rem;

    width: 400px;

    border-radius: 16px;
    background: #4d24ad;
    font-weight: 600;
    transition: all 0.2s;

    :hover {
      filter: brightness(0.9);
    }

    :active {
      color: initial;
    }

    span {
      display: block;
      text-align: center;
      
      > ul {
        text-align: left;
        margin-top: 1rem;
      }
    }
  }

`;