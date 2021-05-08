import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

/**
 * {title} ---here destructuring is used instead of passing props & use it as props.title
 * 
 * history and match are router related params , wchich are avlbl in the component it is called.
 * E.g. The other way was to pass all params through component chaining/tunneling which is bad pratcice
 * 
 */
const MenuItem = ({title,imageUrl,size,linkUrl,history,match})=>(
   
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}  />
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
)

export default withRouter(MenuItem);