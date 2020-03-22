import React from 'react';
import { mount } from 'enzyme';
import { Author } from '../components/Author';

it('renders the author of the article', () => {
    const props = {
        elementType: 'text',
        value: 'John Doe'
    }
    const author = mount(<Author value={props.value}/>);
    expect(author.find('span').length).toBe(1);
    expect(author.find('span').text()).toContain('John Doe');
});

