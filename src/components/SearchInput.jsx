import React from 'react';

export default function SearchInput({placeholder, changeState}) {

    return (
        <input type="text" placeholder={placeholder} onChange={changeState} className='search-input'/>
    )
}