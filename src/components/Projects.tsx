import {styled} from 'styled-components';
import {useState} from "react";

const Decks = styled.div`
    border: 4px solid #b6cdbd;
    overflow:hidden;
    flex:33.33%;
    display:block;
`;

const Img = styled.img`
max-width: 100%;
    align-items: center;
    border: 4px solid #b6cdbd;
`;

const Title = styled.h3`
    font-family: 'Arial', sans-serif;
    font-size: 1.5rem;
    color: #ff8c94;
    margin-bottom: 10px;
    text-align: center;
`;
const CalcWrapper = styled.div`
    background-color: #f8f1f1; 
    border: 3px solid #ffaaa6; 
    border-radius: 10px; 
    padding: 15px;
    width: 60%; 
    margin: 20px auto; 
    text-align: center;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1); 
`;
const Label = styled.div`
    font-weight: bold;
    color: #333;
    font-size: 1rem;
    margin-right: 10px;

`;
const Ans = styled.div`
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #444;
    background-color: #dcedc2;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    min-width: 100px;
`;

const Button = styled.div`
    background-color: #ffd3b5;
    border: 2px solid #ffaaa6;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    margin: 5px;

    &:hover {
    background-color: #ffaaa6;
    color: white;
  }
`;
export const CalcInput = styled.input`
  width: 120px;
  padding: 8px;
  font-size: 1rem;
  border: 2px solid #b6cdbd;
  border-radius: 5px;
  margin-right: 10px;
`;

const CalcTitle = styled.h3`
    font-family: 'Arial', sans-serif;
    font-size: 1.5rem;
    color: #ff8c94;
    margin-bottom: 10px;
`;

export default function PurtyCalc(){
    const [first, setFirst] = useState<string>("");
    const [second, setSecond] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const [color, setColor] = useState<string>("black");

    function Addition() {
        const a = Number(first);
        const b = Number(second);
        const sum = a + b;
        sum < 0 ? setColor("red") : setColor("black");
        setResult(sum.toString());
      }
    
    function Subtract() {
        const a = Number(first);
        const b = Number(second);
        const diff = a - b;
        diff < 0 ? setColor("red") : setColor("black");
        setResult(diff.toString());
    }
    function Multiply() {
        const a = Number(first);
        const b = Number(second);
        const product = a * b;
        product < 0 ? setColor("red") : setColor("black");
        setResult(product.toString());
      }
    function Division() {
    const a = Number(first);
    const b = Number(second);
        if (b === 0) {


            setColor("red");
            return;
        }
        const quotient = a / b;
    quotient < 0 ? setColor("red") : setColor("black");
    setResult(quotient.toString());
    }
    
    
    function Power() {
    const a = Number(first);
    const b = Number(second);

    let start = 1;
    for (let i = 1; i <= b; i++) {
        start *= a;
    }
    start < 0 ? setColor("red") : setColor("black");
    setResult(start.toString());
    }
    
    function Clear() {
        setFirst("");
        setSecond("");
        setResult("");
        setColor("black");
    }

    return (
        <>
        <CalcWrapper>
                <CalcTitle>Mia's Purty Calc</CalcTitle>

                <Label>
                    <CalcInput type = "number" placeholder = "First Input" value = {first} 
                    onChange={(e) => setFirst((e.target.value))}/>

                </Label> 
                <Label>
                    <CalcInput type = "number" placeholder = "Second Input" value = {second} 
                    onChange={(e) => setSecond((e.target.value))}/>
                </Label>
                    <Button onClick={Addition}>+</Button>
                    <Button onClick={Subtract}>-</Button>
                    <Button onClick={Multiply}>*</Button>
                    <Button onClick={Division}>/</Button>
                    <Button onClick={Power}>**</Button>
                    <Button onClick={Clear}>Clear</Button>
                    <Ans style={{
                        visibility: result !== "" ? "visible" : "hidden",
                        color: color,
                    }}>
                        <p>{result}</p>
                    </Ans>
        </CalcWrapper>
        <Decks>
            <Title>Client Deck Work</Title>
        <Img src={"/lego.jpg"} alt="lego presentation"/>
        <Img src = {"/diamonds.jpg"} alt = "diamond presentation"/>

        </Decks>
        
        </>
    );
}