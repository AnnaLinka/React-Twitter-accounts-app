import React from 'react';
// import List from "../../components/List/List";
// import Form from '../../components/Form/Form';

// const InitialStateItems = [
//     {
//         image: 'https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_400x400.png',
//         name: 'Dan Abramov',
//         description: 'Working on @reactjs. The demo guy.',
//         twitterLink: 'https://twitter.com/dan_abramov',
//     },
//     {
//         image: 'https://pbs.twimg.com/profile_images/1030536508321591296/pTLoN1_y_400x400.jpg',
//         name: 'Ryan Florence',
//         description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
//         twitterLink: 'https://twitter.com/ryanflorence',
//     },
//     {
//         image: 'https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg',
//         name: 'Michael Jackson',
//         description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
//         twitterLink: 'https://twitter.com/mjackson',
//     },
//     {
//         image: 'https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg',
//         name: 'Kent C. Dodds',
//         description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
//         twitterLink: 'https://twitter.com/kentcdodds',
//     },
// ]

class TwittersView extends React.Component {
    // state = {
    //     items: [...InitialStateItems],
    // }

    // addItem = (e) => {
    //     e.preventDefault();

    //     const newItem = {
    //         name: e.target[0].value,
    //         twitterLink: e.target[1].value,
    //         image: e.target[2].value,
    //         description: e.target[3].value
    //     }

    //     this.setState(prevState => ({
    //         items: [...prevState.items, newItem],
    //     }));

    //     e.target.reset();
    // }

    render() {
        return (
            <div>
                <h1>Twitter views</h1>
                {/* <List items={this.state.items} /> */}
                {/* <Form submitFn={this.addItem} /> */}
            </div>
        )
    }
}

export default TwittersView;
