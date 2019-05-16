import React from 'react';
import './style.css';
import AppContext from '../../context';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

const InitialStateItems = [
    {
        image: 'https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_400x400.png',
        title: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://pbs.twimg.com/profile_images/1030536508321591296/pTLoN1_y_400x400.jpg',
        title: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg',
        title: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: 'https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg',
        title: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    },
]

class Root extends React.Component {
    state = {
        twitter: [...InitialStateItems],
        article: [],
        note: [],
        isModalOpen: false,
    }

    addItem = (e, newItem) => {
        e.preventDefault();
        
        this.setState(prevState => ({
            [newItem.type]: [...prevState[newItem.type], newItem],
        }))

        this.closeModal();
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {
        const {isModalOpen} = this.state;
        const contextElements = {
            ...this.state,
            addItem: this.addItem
        }

        return (
            <BrowserRouter>
               <AppContext.Provider value={contextElements}>
                <Header openModalFn={this.openModal}/>
                <Switch>
                    <Route exact path="/" component={TwittersView}/>
                    <Route path="/articles" component={ArticlesView}/>
                    <Route path="/notes" component={NotesView}/>
                </Switch>  
                {isModalOpen && <Modal closeModalFn={this.closeModal}/> }
               </AppContext.Provider>
            </BrowserRouter>
        );
    }            
}

export default Root;
