import { styled } from "styled-components";

export const BtnWrap = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 5px 0 5px;
  // margin: 9px 5px 10px 5px;
  button {
    cursor: pointer;
  }
`;

export const Btn = styled.button`
  border: none;
  width: 86px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #4e71fe;
  color: #fff;
  font-size: 10px;
  line-height: 20px; /* 200% */
`;

export const SuperBtn = styled(Btn)`
  background: #fff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  border: 2px solid #4e71fe;
  color: #4e71fe;
`;
