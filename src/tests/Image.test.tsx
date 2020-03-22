import React from 'react';
import { mount } from 'enzyme';
import { Image } from '../components/Image';

it('renders the image of the article', () => {
    const props = {
        elementType: 'image',
        value: 'www.exampleUrl.com',
        title: 'example'
    }
    const image = mount(<Image imageUrl={props.value} imageAlt={props.title} />);
    expect(image.find('img').length).toBe(1);
    expect(image.find('img').prop('src')).toEqual('www.exampleUrl.com');
    expect(image.find('img').prop('alt')).toEqual('example');
});

