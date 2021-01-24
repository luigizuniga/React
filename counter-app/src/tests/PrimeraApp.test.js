import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp";

// Para trabajr con componentes se debe importar React
describe('Pruebas en <PrimeraApp>', () => {
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={ saludo }/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={ saludo }
                subtitulo={ subTitulo }
            />
        );

        const textParrafo = wrapper.find('p').text();

        expect( textParrafo ).toBe( subTitulo );

    })

});