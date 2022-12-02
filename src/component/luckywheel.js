import {useEffect, useState, useRef } from 'react';
import React from 'react';
import arrowimg from '../images/arrow2.png';
import wheelimg from '../images/image.png';
import buttonimg from '../images/buttonimg.png';
import greenback from '../images/anothergreenback.jpg'
function Luckywheel () {
   const [displays, Setdisplays] = useState(0);
   const [total, Settotal] = useState(0);
   const [numberoftries, Setnumberoftries] = useState(6);
   const [clicked, Setclicked] = useState(false);
   const [idb, Setidb] = useState(0);
   const [scoreboards, setScoreboards] = useState([]);
    let deg = 0;
    let zoneSize = 45;
    const wheelref = useRef(null);
    const buttonref = useRef(null);

    const symbolSegments = {
      1: "100",
      2: "800",
      3: "700",
      4: "600",
      5: "500",
      6: "400",
      7: "300",
      8: "200",
    }
    useEffect(() => {
        Setnumberoftries(numberoftries-1); 
        setScoreboards([
          ...scoreboards,
          { idb: idb, displays: displays}
        ]);
        Setidb(idb+1);
        var integer = parseInt(displays, 10);
        Settotal(total+integer);
    },[clicked,displays]);

    const handleWin = (actualDeg) => {
      const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
      Setdisplays(symbolSegments[winningSymbolNr]);  
    }
    const  handleGrinch = () => {
      Setclicked(true);
    }
   
     const afterClick = () => {
      buttonref.current.style.pointerEvents = 'none';
      deg = Math.floor(2500 + Math.random() * 2500);
      wheelref.current.style.transition = 'all 5s ease-out';
      wheelref.current.style.transform = `rotate(${deg}deg)`;
      wheelref.current.classList.add('blur');
      
    }
    
    const afterTransitioned = () => {
      wheelref.current.classList.remove('blur');
      buttonref.current.style.pointerEvents = 'auto';
      wheelref.current.style.transition = 'none';
      const actualDeg = deg % 360;
      wheelref.current.style.transform = `rotate(${actualDeg}deg)`;
      handleWin(actualDeg);
      handleGrinch();
}
    const printtable = () => {
      return (
        <div>
      <table className='tablefor'>
        <thead>
         <tr>
         <th>Tries</th>
         <th>Score</th>
          </tr>
          </thead>
          <tbody>
          {scoreboards.map(scoreboard => (
            <tr>
          <td>{scoreboard.idb}</td>
          <td>{scoreboard.displays}</td>
          </tr>
          ))}
        </tbody>
        <tr>
          <div>Total:{total} </div>
        </tr>
        </table>
        </div>
      );
    }
  const app = () => {
    return (
      <div className='concate'>
        {printtable()}
      <div id="app">  
      <img className="marker" src={arrowimg} />
     <img className="wheel" ref={wheelref} onTransitionEnd={afterTransitioned} src={wheelimg}/>
      <div className='display'>{displays}</div>
      <div className='display2'>{numberoftries}</div>
      <img className="button" ref={buttonref} onClick={afterClick} src={buttonimg}/>
      
    </div>
    </div>
    );
  } 
  
  const opsiteapp = () => {
    return (
      <div className='concate2'>  
        {printtable()}
      Your Final Score is: {total} 
      <a href='/luckywheel'>restart</a>
       </div>
      
    );
  } 
  function displayif () {
    if (numberoftries > 0){
      return app();
  }
  else return opsiteapp();
  }

  return (
    
    <div style={{ backgroundImage: `url(${greenback})`,height:'100vh',
    
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',}}>
     
    
    {displayif()}
    </div>
    
    );
}
export default Luckywheel;