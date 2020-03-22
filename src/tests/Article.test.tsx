import React from 'react'
import {shallow} from 'enzyme';
import {Article} from "../components/Article";

it('renders the article', () => {
    const props = {
        heading: {elementType: 'text', value: 'example header'},
        author: {elementType: 'text', value: 'John Doe'},
        date: {elementType: 'datetime', value: '2019-12-13T17:00:00Z'},
        body: {elementType: 'formattedText', values: ['<p>first paragraph</p>', '<p>second paragraph</p>', '<p>third paragraph</p>']}
    }
    const wrapper = shallow(<Article data={props} />);
    console.log('article', wrapper.debug());
    expect(wrapper.find('Heading').length).toBe(1);
    expect(wrapper.find('Author').length).toBe(1);
    expect(wrapper.find('DateComponent').length).toBe(1);
    expect(wrapper.find('Body').length).toBe(1);
    expect(wrapper.find('Image').length).toBe(1);
});

it('renders the article without heading if there is no heading from API', () => {
    const props = {
        author: {elementType: 'text', value: 'John Doe'},
        date: {elementType: 'datetime', value: '2019-12-13T17:00:00Z'},
        body: {elementType: 'formattedText', values: ['<p>first paragraph</p>', '<p>second paragraph</p>', '<p>third paragraph</p>']}
    }
    const wrapper = shallow(<Article data={props} />);
    expect(wrapper.find('Heading').length).toBe(0);
    expect(wrapper.find('Author').length).toBe(1);
    expect(wrapper.find('DateComponent').length).toBe(1);
    expect(wrapper.find('Body').length).toBe(1);
    expect(wrapper.find('Image').length).toBe(1);
});

it('renders the article without author if there is no author from API', () => {
    const props = {
        heading: {elementType: 'text', value: 'example header'},
        date: {elementType: 'datetime', value: '2019-12-13T17:00:00Z'},
        body: {elementType: 'formattedText', values: ['<p>first paragraph</p>', '<p>second paragraph</p>', '<p>third paragraph</p>']}
    }
    const wrapper = shallow(<Article data={props} />);
    expect(wrapper.find('Heading').length).toBe(1);
    expect(wrapper.find('Author').length).toBe(0);
    expect(wrapper.find('DateComponent').length).toBe(1);
    expect(wrapper.find('Body').length).toBe(1);
    expect(wrapper.find('Image').length).toBe(1);
});

it('renders the article without date if there is no date from API', () => {
    const props = {
        heading: {elementType: 'text', value: 'example header'},
        author: {elementType: 'text', value: 'John Doe'},
        body: {elementType: 'formattedText', values: ['<p>first paragraph</p>', '<p>second paragraph</p>', '<p>third paragraph</p>']}
    }
    const wrapper = shallow(<Article data={props} />);
    expect(wrapper.find('Heading').length).toBe(1);
    expect(wrapper.find('Author').length).toBe(1);
    expect(wrapper.find('DateComponent').length).toBe(0);
    expect(wrapper.find('Body').length).toBe(1);
    expect(wrapper.find('Image').length).toBe(1);
});

it('renders the article without body if there is no body from API', () => {
    const props = {
        heading: {elementType: 'text', value: 'example header'},
        author: {elementType: 'text', value: 'John Doe'},
        date: {elementType: 'datetime', value: '2019-12-13T17:00:00Z'}
    }
    const wrapper = shallow(<Article data={props} />);
    expect(wrapper.find('Heading').length).toBe(1);
    expect(wrapper.find('Author').length).toBe(1);
    expect(wrapper.find('DateComponent').length).toBe(1);
    expect(wrapper.find('Body').length).toBe(0);
    expect(wrapper.find('Image').length).toBe(1);
});


