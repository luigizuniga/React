import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en el <CounterApp/>', () => {
    // let wrapper = shallow( <CounterApp count={ 100 }/>);
    // beforeEach(()=>{
    //     wrapper = shallow( <CounterApp />);
    // })
    test('Debe de mostrar <CounterApp /> correctamente', () => {
        const wrapper = shallow(<CounterApp/>);
        console.log(wrapper.html())
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrat los elemtos html de cada boton', ()=>{
        const wrapper = shallow(<CounterApp />);

        const btnAdd = wrapper.find('button').at(0);
        const btnRes = wrapper.find('button').at(1);
        const btnSub = wrapper.find('button').at(2);

        console.log(btnAdd.html());
        console.log(btnRes.html());
        console.log(btnSub.html());
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
        // Revision
        // Prueba unitaria sin resultado esperado
        const wrapper = shallow( <CounterApp/> );
        const counterText = wrapper.find('p').text().trim();
        console.log(counterText);
        expect( counterText ).toBe('100');
    })

    test('Debe de incrementar con el boton +1',()=>{
        const wrapper = shallow(<CounterApp/>);

        // let valorActual = wrapper.find('p').text();
        // console.log(valorActual);

        wrapper.find('button').at(0).simulate('click');
        const valorClick = wrapper.find('p').text();
        console.log(valorClick);
        expect(valorClick).toBe('101');
    });

    test('Debe de decrementar con el boton -1',()=>{
        const wrapper = shallow(<CounterApp/>);

        wrapper.find('button').at(2).simulate('click');
        const valorClick = wrapper.find('p').text();
        console.log(valorClick);
        expect(valorClick).toBe('99');
    });

    test('Debe de colocar el valor por defecto con el btn reset' ,()=>{
        const wrapper = shallow(<CounterApp count={ 105 }/> );

        // Visualizar valor actual del counter
        const counterText = wrapper.find('p').text().trim();
        console.log(counterText);

        // Incrementamos el valor
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        const counterIncrement = wrapper.find('p').text().trim();
        console.log(counterIncrement);

        // Reset del valor
        wrapper.find('button').at(1).simulate('click');
        const counterReset = wrapper.find('p').text().trim();
        console.log(counterReset);

        expect(counterReset).toBe('105');


    });


});
