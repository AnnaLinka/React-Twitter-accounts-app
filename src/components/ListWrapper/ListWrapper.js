import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';

// przed destrukturyzacja:
// const ListWrapper = () => (
//     <ul className="listWrapper__wrapper">
//         {twitterAccounts.map(item=> (
//              <ListItem
//              name={item.name}
//              description={item.description}
//              image={item.image}
//              link={item.link}
//          />
//         ))}
//     </ul>
// );

//po destrukturyzacji pierwszej
// const ListWrapper = () => (
//     <ul className="listWrapper__wrapper">
//         {twitterAccounts.map(({name, description, image, twitterLink}) => (
//                 <ListItem
//                 name={name}
//                 description={description}
//                 image={image}
//                 link={twitterLink}
//             />
//         ))}
//     </ul>
// );

//po destrukturyzacji 2 ze spread operator 
const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        {twitterAccounts.map( item => (
                <ListItem key={item.name} {...item}
            />
        ))}
    </ul>
);
export default ListWrapper;