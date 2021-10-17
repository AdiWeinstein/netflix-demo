import React from 'react'
import { BiChevronLeft, BiChevronRight} from "react-icons/bi";
import ListItem from './ListItem';
import './List.css'


function List() {
    return (
        <div className='list'>
            <h3 className='list-title'>Continue to watch</h3>
            <div className='slider'>
                <BiChevronLeft className='slider-arrow left' />
                <div className='list-container'>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <BiChevronRight className='slider-arrow right'/>
            </div>
            
        </div>
    )
}

export default List
