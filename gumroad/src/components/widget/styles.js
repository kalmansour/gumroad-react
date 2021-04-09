import styled from "styled-components";

export const Container = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 50px;
  width: 700px;
  border-radius: 5px;
`;

export const ProductBox = styled.div`
  background-color: white;
  border: solid #e1e1e1;
  border-width: 0px 1px;
  height: 160px;
  border-top-right-radius: 1px;
`;

export const ButtonTitle = styled.h6`
  margin-left: 20px;
  color: #858585;
`;

export const InputProductText = styled.input`
  margin-left: 20px;
  width: 90%;
  color: #a2a2a2;
`;

export const ClipboardContainer = styled.div`
  border: solid #e1e1e1;
  border-width: 1px 1px;
  height: 350px;
  background-color: #f5f5f5;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const ProductPreview = styled.input`
  margin: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
  border: solid;
  border-color: lightgrey;
  border-width: 1px;
  justify-content: center;
  text-align: center;
  height: 50px;
  border-radius: 5px;
  font-weight: bolder;
  color: #a2a2a2;
`;

export const DirectionsText = styled.h6`
  color: darkslategray;
`;

export const RecommendedText = styled.p`
  color: #858585;
  font-size: 12px;
`;

export const CodeBox = styled.div`
  background-color: white;
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: row;
  border: solid #e1e1e1;
  border-width: 1px 1px;
  border-radius: 5px;
`;

export const CodeArea = styled.textarea`
  width: 500px;
  height: 80px;
  resize: none;
  border-width: 0px;
  margin: 10px;
`;

export const EmbedBox = styled.div`
  background-color: white;
  border: solid #e1e1e1;
  border-width: 0px 1px;
  height: 60px;
  border-top-right-radius: 1px;
`;

export const LoadingPreview = styled.p`
  margin: 50px;
  justify-content: center;
  text-align: center;
  color: darkslategray;
`;
