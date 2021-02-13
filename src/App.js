import React,{useState} from 'react'
import Icon from "./components/icon"
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Card,CardBody,Container,Button,Col,Row} from "reactstrap"

const itemArray=new Array(9).fill("empty")

const App=()=> {

  const [isCross,setIsCross]=useState(false)
  const [winMessage,setWinMessage]=useState("")
  const [count,setCount]=useState(0)

  const reloadGame=()=>{
    setCount(0)
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty",0,9)
  }
  
  const checkIsWinner=()=>{
    console.log(count)
    if(itemArray[0]===itemArray[1] &&
      itemArray[1]===itemArray[2] &&
      itemArray[0]!=="empty"){
        setCount(0)
        setWinMessage(`${itemArray[0]} winner`)
        return
      }
    else if(itemArray[3]===itemArray[4] &&
      itemArray[4]===itemArray[5] &&
      itemArray[3]!=="empty"){
        setCount(0)
        setWinMessage(`${itemArray[3]} winner`)
        return
      }
    else if(itemArray[6]===itemArray[7] &&
      itemArray[7]===itemArray[8] &&
      itemArray[6]!=="empty"){
        setCount(0)
        setWinMessage(`${itemArray[6]} winner`)
        return
      }
    else if(itemArray[0]===itemArray[3] &&
      itemArray[3]===itemArray[6] &&
      itemArray[6]!=="empty"){
        setCount(0)
        setWinMessage(`${itemArray[6]} winner`)
        return
     }
    else if(itemArray[1]===itemArray[4] &&
      itemArray[7]===itemArray[4] &&
      itemArray[4]!=="empty"){
        setCount(0)
        setWinMessage(`${itemArray[7]} winner`)
        return
      }
    else if(itemArray[2]===itemArray[5] &&
      itemArray[5]===itemArray[8] &&
      itemArray[5]!=="empty"){
        setCount(0)
        setWinMessage(`${itemArray[5]} winner`)
        return
      }
    else if(itemArray[0]===itemArray[4] &&
      itemArray[4]===itemArray[8] &&
      itemArray[8]!=="empty"){
        setCount(0)
        setWinMessage(`${itemArray[0]} winner`)
        return
     }
    else if(itemArray[2]===itemArray[4] &&
      itemArray[4]===itemArray[6] &&
      itemArray[4]!=="empty"){
        setCount(0)
        setWinMessage(`${itemArray[4]} winner`)
        return
      }              
      if((count)===8){
        setCount(0)
        reloadGame()
        return toast("Match Draw",{type:"error"})
      }
  };

  const changeItem=itemNumber=>{
    if(winMessage){
      return toast(winMessage,{type:"success"})
    }
    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber]=isCross?"cross":"circle";
      setIsCross(!isCross)
    }
    else{
      return toast("already filled",{type:"error"})
    }
    setCount(count+1);
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button 
              color="success"
              onClick={reloadGame}
              block>Reload the game</Button>
            </div>
          ): (
            <h1 className="text-center text-warning">
              {isCross?"Cross":"circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item,index)=>(
              <Card color="warning" onClick={()=> changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default App;
