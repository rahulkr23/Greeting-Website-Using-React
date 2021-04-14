import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



let currDate = new Date(2021, 4, 5, 17);
currDate = currDate.getHours();
let greeting = '';

const cssStyle = { };

if(currDate >= 1 && currDate <12){
  greeting = 'Good Morning🌅, Rahul';
  cssStyle.color = 'green';

}else if(currDate>=12 && currDate <19){
  greeting = "Good Afternoon🌕, Rahul";
  cssStyle.color = 'orange';
}else{
  greeting = "Good night🌆, Rahul";
  cssStyle.color = 'black';
}


ReactDOM.render(

<>
<div>
  <h1>Hello 😁 👋, <span style={cssStyle}> {greeting} </span>  </h1>
  </div>
  </>
          ,document.getElementById('root')


);

