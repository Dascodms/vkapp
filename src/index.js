import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
// import registerServiceWorker from './sw';



// Init VK  Mini App
connect.send('VKWebAppInit');

connect.send("VKWebAppShowCommunityWidgetPreviewBox", {
    "group_id": 189060637, 
    "type": "cover_list", 
    "code": `return {"title": "Радио Дисней",
    "rows": [{
        "title": "Радио Дисней",
        "button": "Слушай",
        "descr": "лалалалал",
        "cover_id": "вот тут вопрос- надо доки читать",
        "url": "https://vk.com/app7218370_-189060637",
        "button_url": "https://vk.com/app7218370_-189060637"
      }
]};`
});



ReactDOM.render(<App />, document.getElementById('root'));
