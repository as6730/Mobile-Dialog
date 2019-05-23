import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInputDialog from '../TextInputDialog';

Enzyme.configure({adapter: new Adapter()});

test('TextInputDialog renders', () => {
  const textInput = shallow(<TextInputDialog
    title="title"
    description="description"
    onChange={(text) => {result = text;}}/>);
});

test('TextInputDialog onChange updates text', () => {
  let result = ''
  const textInput = shallow(<TextInputDialog
    title="title"
    description="description"
    onChange={(text) => {result = text;}}/>);

  textInput.find('#text_input').simulate('change', {target: {value: 'test@email.com'}});
  expect(result).toEqual('test@email.com');
});

test('TextInputDialog onChange updates selection multiple times', () => {
  let result = ''
  const textInput = shallow(<TextInputDialog
    title="title"
    description="description"
    onChange={(text) => {result = text;}}/>);

  textInput.find('#text_input').simulate('change', {target: {value: 'test123@email.com'}});
  textInput.find('#text_input').simulate('change', {target: {value: 'test456@email.com'}});
  textInput.find('#text_input').simulate('change', {target: {value: 'test789@email.com'}});

  expect(result).toEqual('test789@email.com');
});
