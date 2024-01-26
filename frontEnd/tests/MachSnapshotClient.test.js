import 'react-native';
import React from 'react';
import ListAssitenciaTecnica from '../src/pages/Client/ListAssitenciaTecnica';
import ListReformasReparos from '../src/pages/Client/ListReformasReparos';
import ListModaBeleza from '../src/pages/Client/ListModaBeleza'
import ListEventos from '../src/pages/Client/ListEventos'
import ListAutomoveis from '../src/pages/Client/ListAutomoveis'
import Forms from '../src/pages/Client/Forms';


import renderer from 'react-test-renderer';




it('renders correctly Forms ', () => {

    const tree =  renderer.create(<Forms />).toJSON;
    expect(tree).toMatchSnapshot();

})

it('renders correctly ListAssistenciaTecnica ', () => {

    const tree =  renderer.create(<ListAssitenciaTecnica />).toJSON;
    expect(tree).toMatchSnapshot();

})

it('renders correctly ListAutomoveis ', () => {

    const tree =  renderer.create(<ListAutomoveis />).toJSON;
    expect(tree).toMatchSnapshot();

})

it('renders correctly ListReformasReparos ', () => {

    const tree =  renderer.create(<ListReformasReparos />).toJSON;
    expect(tree).toMatchSnapshot();

})

it('renders correctly ListEventos ', () => {

    const tree =  renderer.create(<ListEventos />).toJSON;
    expect(tree).toMatchSnapshot();

})

it('renders correctly ListModaBeleza ', () => {

    const tree =  renderer.create(<ListModaBeleza />).toJSON;
    expect(tree).toMatchSnapshot();

})





