import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import  BookList from './views/BookList';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/books' component={BookList} />
            </Layout>
        );
    }
}
