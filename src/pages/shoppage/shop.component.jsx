import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/collection-preview.component'

/**
 * 
 * Here shop page is made as class component bcoz it contains data. Again it's static data
 * See whwrever data is there, thereitself looping is performed, bcoz with change in data, complete rendering has to be done
 */

class ShopPage extends React.Component{

    constructor(props){

        super(props);

        this.state={
            collections:SHOP_DATA
        };
    }

   

    /**
     * See in every map you are giving the functional component name
     * 
     */

    render(){
        alert("Into render method of ShopPage");
        const {collections} = this.state;//Destructuring
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps}/>)
                }
            </div>
        );
    }
}


export default ShopPage;