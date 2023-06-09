import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftSideCard from '../LeftSideCard/LeftSideCard';

const LeftNav = () => {
    const [catagoris , setCatagoris] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-debabrata2003.vercel.app/catagoris')
        .then(res => res.json())
        .then(data => setCatagoris(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
           <h4>All category</h4>
           <div className='ps-4 '>
           {
             
             catagoris.map(category => <p
             
                key={category.id}
             
             >
                <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
             </p>)


           }
           </div>
           <LeftSideCard></LeftSideCard>
        </div>
    );
};

export default LeftNav;