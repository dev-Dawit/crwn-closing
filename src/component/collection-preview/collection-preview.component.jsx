import React from "react";

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview' >
            {items.filter((item,idx) => idx < 4)  // items is the array to itrate over, item is an element, idx is the index of the element
                  .map(({id, ...otherItemProps}) => (  
                    <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
);
export default CollectionPreview;