import styled from "styled-components";

export const Container = styled.div`
  form {
    padding: 2rem;

    fieldset {
      padding: 1rem;
      border: none;

      legend {
        font-size: 1.2rem;
      }

      button {
        width: 100px;
        padding: 0.5rem;
        margin-top: 1rem;
        margin-left: calc(100% - 100px);

        cursor: pointer;

        border: none;
        border-radius: 4px;

        background: #4d24ad;

        color: white;
        font-weight: 600;

        transition: all 0.2s;

        :hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;

export const TextArea = styled.div`
  p {
    padding: 1rem 0;
  }

  textarea {
    resize: none;

    height: 100px;
    width: 100%;

    padding: 5px;
    font-size: 1rem;
    outline: none;

    border-color: #d8d8d8;
    transition: all 0.2s;
    border-radius: 4px;

    :focus {
      border: 1px solid #5a5a5a;
    }
  }

  input {
    padding: 5px;
    font-size: 1rem;
    outline: none;

    border: 1px solid;

    border-color: #d8d8d8;
    transition: all 0.2s;
    border-radius: 4px;

    :focus {
      border: 1px solid #5a5a5a;
    }
  }
`;