import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RadioButtonsDialog from '../RadioButtonsDialog';

Enzyme.configure({adapter: new Adapter()});

test('RadioButtonsDialog renders', () => {
  const radioButtons = shallow(<RadioButtonsDialog
    title="title"
    description="description"
    options={['Option 1', 'Option 2', 'Option 3']}
    onChange={(text) => {}}/>);
});

test('RadioButtonsDialog onChange gets called in constructor', () => {
  let result = ''
  const radioButtons = shallow(<RadioButtonsDialog
    title="title"
    description="description"
    options={['Option 1', 'Option 2', 'Option 3']}
    onChange={(text) => {result = text;}}/>);

  expect(result).toEqual('Option 3');
});

test('RadioButtonsDialog onChange updates selection', () => {
  let result = ''
  const radioButtons = shallow(<RadioButtonsDialog
    title="title"
    description="description"
    options={['Option 1', 'Option 2', 'Option 3']}
    onChange={(text) => {result = text;}}/>);

  radioButtons.find('#radio_1').simulate('change');
  expect(result).toEqual('Option 2');
});

test('RadioButtonsDialog onChange updates selection multiple times', () => {
  let result = ''
  const radioButtons = shallow(<RadioButtonsDialog
    title="title"
    description="description"
    options={['Option 1', 'Option 2', 'Option 3']}
    onChange={(text) => {result = text;}}/>);

  radioButtons.find('#radio_1').simulate('change');
  radioButtons.find('#radio_0').simulate('change');
  radioButtons.find('#radio_2').simulate('change');
  expect(result).toEqual('Option 3');
});

// TODO: handle exception (and throw exception) when props.options is an empty array
