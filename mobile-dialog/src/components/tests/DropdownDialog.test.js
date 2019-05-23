import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropdownDialog from '../DropdownDialog';

Enzyme.configure({adapter: new Adapter()});

test('DropdownDialog renders', () => {
  const dropdown = shallow(<DropdownDialog
    title="title"
    description="description"
    options={['Option 1', 'Option 2', 'Option 3']}
    onChange={(text) => {}}/>);
});

test('DropdownDialog onChange gets called in constructor', () => {
  let result = ''
  const dropdown = shallow(<DropdownDialog
    title="title"
    description="description"
    options={['Option 1', 'Option 2', 'Option 3']}
    onChange={(text) => {result = text;}}/>);

  expect(result).toEqual('Option 1');
});

test('DropdownDialog onChange updates selection', () => {
  let result = ''
  const dropdown = shallow(<DropdownDialog
    title="title"
    description="description"
    options={['Option 1', 'Option 2', 'Option 3']}
    onChange={(text) => {result = text;}}/>);

  dropdown.find('select').simulate('change', {target: {value: 'Option 2'}});
  expect(result).toEqual('Option 2');
});

test('DropdownDialog onChange updates selection multiple times', () => {
  let result = ''
  const dropdown = shallow(<DropdownDialog
    title="title"
    description="description"
    options={['Option 1', 'Option 2', 'Option 3']}
    onChange={(text) => {result = text;}}/>);

  dropdown.find('select').simulate('change', {target: {value: 'Option 2'}});
  dropdown.find('select').simulate('change', {target: {value: 'Option 1'}});
  dropdown.find('select').simulate('change', {target: {value: 'Option 3'}});
  expect(result).toEqual('Option 3');
});

// TODO: handle exception (and throw exception) when props.options is an empty array
