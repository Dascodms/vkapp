import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
// import registerServiceWorker from './sw';

let widget = {
    "title": "Рестораны",
    "rows": [{
        "title": "Корюшка",
        "button": "Забронировать",
        "descr": "Петропавловская крепость, д. 3",
        "cover_id": "club189060637",
      },]
}

widget = JSON.stringify(widget)

// Init VK  Mini App
connect.send('VKWebAppInit');

connect.subscribe(event => {

   
    const { type, data } = event.detail;
   
    if (type === 'VKWebAppShowCommunityWidgetPreviewBoxFailed') {
      // Reading result of the Code Reader
      console.log(data.code_data, data.error_type, data.error_data);
    }

    if(type === 'VKWebAppCallAPIMethod') {
        console.log(data)
    }



  });

connect.send("VKWebAppShowCommunityWidgetPreviewBox", {
    "group_id": 189060637,
    "type": "cover_list",
    "code": `return ${widget};`
});


// fetch(`https://api.vk.com/method/appWidgets.getAppImageUploadServer?image_type=510x128&access_token=ACCESS_TOKEN&v=V
// `)

connect.send("VKWebAppCallAPIMethod", {"method": "appWidgets.getAppImageUploadServer", "params": {"image_type": "510x128", "v": "5.103", "access_token": "234788bb37091f8c6c4fb83245d5d0c5bc65f660e6bc4b761edb284ff5829c9242281b554d15f3d47cae8"}});





console.log(JSON.stringify(widget))





ReactDOM.render(<App />, document.getElementById('root'));
