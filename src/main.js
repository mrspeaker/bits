import React from 'react';
import And from './comp/and';
import Or from './comp/or';
import Not from './comp/not';
import Delay from './comp/delay';
import LED from './comp/LED';

React.render(
  <div>
    <strong>And/Or/Not</strong>
    <And name='and1' />
    <Or name='or1' />
    <Not name='not0' />
    <LED name='led1' inA='not0' />
    <hr />
    <strong>Linked or2 AND or3</strong>
    <Or name='or2' />
    <Or name='or3' />
    |
    <And name='and3' inA='or2' inB='or3' />
    <hr />
    <strong>Delay line</strong>
    <Not name='not1' inA='not2' />
    <Delay name='delay1' inA='not1' />
    <Delay name='delay2' inA='delay1' />
    <Delay name='delay3' inA='delay2' />
    <Delay name='delay4' inA='delay3' />
    <Delay name='delay5' inA='delay4' />
    <Not name='not2' inA='delay5' />
    <LED name='led1' inA='not2' />
    <LED name='led1' inA='not2' />
    <LED name='led1' inA='not2' />
  </div>,
  document.querySelector('#app')
);

export default {};
