import { css, styled } from "styled-components";

type BtnPropsType = {
  primary?: boolean;
  outlined?: boolean;
};

export const BtnBox = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 5px 0 5px;
  button {
    cursor: pointer;
  }
`;

export const Btn = styled.button<BtnPropsType>`
  border: none;
  width: 86px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  font-size: 10px;
  line-height: 20px;

  ${(props) =>
    props.primary &&
    css<BtnPropsType>`
      background: #4e71fe;
      color: #fff;
    `};

  ${(props) =>
    props.outlined &&
    css<BtnPropsType>`
      background: #fff;
      box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
      border: 2px solid #4e71fe;
      color: #4e71fe;
    `}
`;
