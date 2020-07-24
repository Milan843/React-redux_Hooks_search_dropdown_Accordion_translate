
import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './search'
import Dropdown from './Dropdown'
import Translate from './Translate'
import Route from './Route'
import Header from './Headers'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];
const options = [
    {
      label: 'The Color Red',
      value: 'red',
    },
    {
      label: 'The Color Green',
      value: 'green',
    },
    {
      label: 'A Shade of Blue',
      value: 'blue',
    },
  ];
// const showAccordion=()=>{
//     if(window.location.pathname==='/'){
//         return <Accordion items={items}/>
//     }
// }
// const showList=()=>{
//     if(window.location.pathname==='/search'){
//         return <Search/>
//     }
// }
// const showDropdown=()=>{
//     if(window.location.pathname==='/dropdown'){
//         return <Dropdown options={options}/>
//     }
// }
// const showTranslate=()=>{
//     if(window.location.pathname==='/translate'){
//         return <Translate/>
//     }
// }
export default () => {
    const [selected,setSelected]=useState(options[0])
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search/> */}
      {/* <Dropdown options={options}/> */}
{/* <Translate /> */}
{/* {showAccordion()}
{showList()}
{showDropdown()}
{showTranslate()} */}
<Header/>
<Route path="/">
    <Accordion items={items} />
</Route>
<Route path="/list">
    <Search />
</Route>
<Route path="/dropdown">
    <Dropdown 
    options={options}
    label="select a color"
    selected={selected}
    onSelectedChange={setSelected}/>
</Route>
<Route path="/translate">
    <Translate/>
</Route>
    </div>
  );
};