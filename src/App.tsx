import "./App.css";
import styled from "styled-components";
import { Btn, BtnWrap, SuperBtn } from "./components/Button.styled";
import { ImageComponent } from "./components/Image.styled";
import { Title } from "./components/Title.styled";
import { Text } from "./components/Text.styled";
import Image from "./img/dessert.jpeg";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Content>
          <ImageComponent imageUrl={Image} />
          <Title>Sahara</Title>
          <Text>The largest hot desert on Earth</Text>
          <BtnWrap>
            <Btn>See more</Btn>
            <SuperBtn>Save</SuperBtn>
          </BtnWrap>
        </Content>
      </Wrapper>
    </div>
  );
}

export default App;

//wrapper
const Wrapper = styled.div`
  display: flex;
  max-width: 300px;
  min-height: 350px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  max-height: 330px;
  padding: 10px;
`;
