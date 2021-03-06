import React,{Component} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
//**Anything that contains data  gnerally has to be class component. Here the data is altough static. In real time data may come from DB */

class Directory extends React.Component{

    constructor(){
        super();

        this.state={
            sections:[
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl:'hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl:''

                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl:''
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl:''
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl:''
                  }
            ]
        };
    }


    render(){
        // See below u r rotation through data present in state.
        alert("Into render method of directory-component.js");
        return(
            
            <div className='directory-menu'>
              
              {
                  // this.state.sections.map(({title,imageUrl,id,size,linkUrl})
                this.state.sections.map(({id, ...otherSectionProps}) =>(
                    // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
              }
            </div>
        );
    }
}


export default Directory;