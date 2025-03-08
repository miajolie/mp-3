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
`
const CalcWrapper = styled.div`

`;
const Label = styled.div`
`;
const Ans = styled.div`
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
                <h3>Mia's Purty Calc</h3>

                <Label>
                    <input type = "number" placeholder = "First Input" value = {first} 
                    onChange={(e) => setFirst((e.target.value))}/>

                </Label> 
                <Label>
                    <input type = "number" placeholder = "Second Input" value = {second} 
                    onChange={(e) => setSecond((e.target.value))}/>
                </Label>
                <button onClick={Addition}>+</button>
                    <button onClick={Subtract}>-</button>
                    <button onClick={Multiply}>*</button>
                    <button onClick={Division}>/</button>
                    <button onClick={Power}>**</button>
                    <button onClick={Clear}>Clear</button>
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