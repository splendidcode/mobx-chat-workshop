import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ChatApplicationModel } from './chat/ChatApplicationModel';
import { onSnapshot } from 'mobx-state-tree';
import { autorun } from 'mobx';

const app = ChatApplicationModel.create();
window.app = app;

ReactDOM.render(<div>HELLO WORLD</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.ChatApplicationModel = ChatApplicationModel;
window.onSnapshot = onSnapshot;
window.autorun = autorun;
