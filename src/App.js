import './App.css';
import React, {useState} from 'react';


function App() {
  const [bill,setBill] = useState();
  const [person,setPerson] = useState();
  const [tip, setTip] = useState(0);
  const [custom, setCustom] = useState();

  function handleInputBill({target}) {
    setBill(target.value)
  };

  function handleInputPerson({target}) {
    setPerson(target.value)
  };

  function handleCustomChange({target}) {
    setCustom(target.value);
    setTip(target.value)
  };
 
  function handleResetClick() {
    setTip();
    setPerson('');
    setBill('');
    setCustom('');
  }; 

 
  const tipAmountNum = (((bill / 100) * tip) / person);
  const tipAmount = tipAmountNum.toFixed(2);
  const totalAmountNum = ((bill/ person) + ((bill / 100) * tip / person));
  const totalAmount = totalAmountNum.toFixed(2);



  

  return (
    <>
      <div className='alltogether'>
        <div className="leftside">
          <div className='bill'>
            <label>Bill</label>
              <div className='billinput'><img src='/tip-calculator-app-main/images/icon-dollar.svg'/>
                <input type='number' placeholder='0' value={bill} onChange={handleInputBill}></input>
              </div>
          </div>

          <div className ='selecttip'>
            <label>Select Tip %</label>
              <div className='firstrow'>
                <button className='five' onClick={() => setTip(5)} style={tip === 5 ? {backgroundColor: 'hsl(172, 67%, 45%)'} : undefined}>5%</button>
                <button className='ten' onClick={() => setTip(10)} style={tip === 10 ? {backgroundColor: 'hsl(172, 67%, 45%)'} : undefined}>10%</button>
                <button className={'fifteen ' + (tip === 15 ? 'highlighted' : '')} onClick={() => setTip(15)}>15%</button>
              </div>
              <div className='secondrow'>
                <button className={'twentyfive ' + (tip === 25 ? 'highlighted' : '')} onClick={() => setTip(25)}>25%</button>
                <button className={'fifty ' + (tip === 50 ? 'highlighted' : '')} onClick={() => setTip(50)}>50%</button>
                <input className='custom' type='number' placeholder='Custom' value={custom} onChange={handleCustomChange}></input>
              </div>
          </div>
          <div className='numberofpeople'>
            <label>Number of People</label>
            <div className='peopleinput'><img src='/tip-calculator-app-main/images/icon-person.svg'/>
              <input type='number' placeholder='0' value={person} onChange={handleInputPerson}></input>
            </div>
          </div>
        </div>
        <div className='rightside'>
          <div className='tipamount'>
            <div className='tiptext'><h1>Tip Amount</h1><p>/ person</p></div>
            <h2>${tipAmountNum > 0 ? tipAmount : "0.00"}</h2>
          </div>
          <div className='total'>
            <div className='totaltext'><h1>Total</h1><p>/ person</p></div>
            <h2>${totalAmountNum > 0 ? totalAmount : "0.00"}</h2>
          </div>

          <div><button className='reset' onClick={handleResetClick}>RESET</button></div>
        </div>
      </div>
    </>
  );
}

export default App;
