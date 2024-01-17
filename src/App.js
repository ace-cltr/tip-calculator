import { useState } from 'react'
import './App.css';
import { React } from 'react';

export default function App() {

  const [bill, setBill] = useState('')
  const [rew1, setRew1] = useState(0)
  const [rew2, setRew2] = useState(0)

  const percentage = (rew1 + rew2) / 2
  const overall = percentage + bill;

  function reset() {
    setBill('');
    setRew1(0);
    setRew2(0);
  }

  return (
    <div className='main'>
      <span>Your bill was : </span>
      <Bill bill={bill} setBill={setBill} />
      <Percentage1 rew1={rew1} setRew1={setRew1}></Percentage1>
      <Percentage2 rew2={rew2} setRew2={setRew2}></Percentage2>
      {bill > 0 ? <><Amount bill={bill} percentage={percentage} overall={overall} />
        <Reset reset={reset} /> </> : null}
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <input type='number' placeholder='bill amount' value={bill} onChange={(e) => setBill(Number(e.target.value))} />
  )
}

function Percentage1({ rew1, setRew1 }) {
  return (
    <Options review={rew1} setReview={setRew1}>your rating :</Options>
  )
}
function Percentage2({ rew2, setRew2 }) {
  return (
    <Options review={rew2} setReview={setRew2}>your friends rating :</Options>
  )
}

function Amount({ bill, percentage, overall }) {
  return (
    <h3>You pay ₹{overall} (₹{bill} + ₹{percentage})</h3>
  )
}

function Reset({ reset }) {
  return (
    <button onClick={reset}>reset</button>
  )
}

function Options({ review, setReview, children }) {
  return (
    <>
      <span>{children}</span>
      <select value={review} onChange={(e) => setReview(Number(e.target.value))}>
        <option value={0}>Dissatisfied {0}%</option>
        <option value={5}>It was okay {5}%</option>
        <option value={10}>It was good {10}%</option>
        <option value={20}>Absolutely amazing {20}%</option>
      </select>
    </>
  )
}