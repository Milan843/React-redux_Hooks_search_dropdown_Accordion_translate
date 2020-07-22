// import React from 'react'
// import Accordion from './accordion'
// const item=[{
//     title:"what is react",
//     content:"great"
// },
// {
//     title:"what is redux",
//     content:"great er"
// },
// {
//     title:"what is node",
//     content:"gretest"
// }
// ]
// const App=()=>{
//     return(
//     <div>
//         <Accordion items={item}/>
//     </div>
    
//     )
// }
// export default App
import React from 'react';
import Accordion from './Accordion';
import Search from './search'
import Dropdown from './Dropdown'
import Translate from './Translate'

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

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search/> */}
      {/* <Dropdown options={options}/> */}
<Translate />
    </div>
  );
};