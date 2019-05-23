## How to Run

Clone the repo:
```
git clone https://github.com/as6730/Mobile-Dialog.git
```

To run the client (port 3000):
```
cd Mobile-Dialog/mobile-dialog/
npm install
npm start
```

To run the server (port 3001):
```
cd Mobile-Dialog/dummy_server/
npm install
node index.js
```

To run the tests:
```
cd Mobile-Dialog/mobile-dialog/
npm test
```

## Technologies

1. Created using `create-react-app`
2. Testing - JTest and Enzyme
3. Server - Node.js and Express


## Project Design

MobileDeviceSettingsModal is an implemented UI component of the given mock:

![ui_mockup](https://github.com/as6730/Mobile-Dialog/blob/master/mobile-dialog/mockup.png)

By clicking on Save, a request with the information from the dialog (JSON object) is sent to the server in a POST request, and the information recieved will be logged in the server logs. 

MobileDeviceSettingsModal is a high level component, constructed by subcomponents: 
1. Dialog
2. TextInputDialog
3. RadioButtonsDialog
4. DropdownDialog

I built each one of the subcomponents in a way that they could be constructed in a customizable manner. For example:
1. Number of radio button options
2. Number of dropdown options
3. Created a dialog with a customized number of subcomponents.

### Additional Resources
  * [create-react-app][https://github.com/facebook/create-react-app]
  * [react-dropdown][https://github.com/fraserxu/react-dropdown]

## Future features

1. Due to the time constraint, testing the Dropdown from the external library was unable to be implemented. 
2. Mock the server request in order to add tests to the saving logic.
3. Radio buttons css is not pixel perfect with the given mock.
4. Dropdown menu is missing the check selected sign and is not pixel perfect.
