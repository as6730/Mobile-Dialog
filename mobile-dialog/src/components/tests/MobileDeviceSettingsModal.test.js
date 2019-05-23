import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MobileDeviceSettingsModal from '../MobileDeviceSettingsModal';

Enzyme.configure({adapter: new Adapter()});

test('MobileDeviceSettingsModal renders', () => {
  const mobileDeviceModal = mount(<MobileDeviceSettingsModal
    onSave={(text) => {}}
    dismissModal={(text) => {}}/>);
});

test('MobileDeviceSettingsModal ', () => {
  let result = null
  const mobileDeviceModal = mount(<MobileDeviceSettingsModal
    onSave={(state) => {result = state;}}
    dismissModal={(text) => {}}/>);

  mobileDeviceModal.find('#text_input').simulate('change', {target: {value: 'test@email.com'}});
  mobileDeviceModal.find('#radio_1').simulate('change');
  mobileDeviceModal.find('select').simulate('change', {target: {value: 'Option 2'}});
  mobileDeviceModal.find('#dialog-btn-save').simulate('click');

  expect(result.email).toEqual('test@email.com');
  expect(result.notification).toEqual('Option 2');
  expect(result.identification).toEqual('Option 2');
});

// TODO: Change input to specific values used
