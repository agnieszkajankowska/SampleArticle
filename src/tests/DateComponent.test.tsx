import React from 'react';
import { mount } from 'enzyme';
import { DateComponent } from '../components/DateComponent';

it('renders the date of the article in correct format', () => {
    const props = {
        elementType: 'datetime',
        value: '2019-12-13T17:00:00Z'
    }
    const date = mount(<DateComponent value={props.value}/>);
    expect(date.find('div').length).toBe(1);
    expect(date.find('div').text()).toContain('13.12.2019');
});

