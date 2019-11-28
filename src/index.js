import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
import $ from 'jquery'
// import registerServiceWorker from './sw';

let widget = {
    "title": "Рестораны",
    "rows": [{
        "title": "Корюшка",
        "button": "Апп_Па",
        "descr": "Петропавловская крепость, д. 3",
        "cover_id": "7218370_705359",
        "button_url": "https://vk.com/app7218370_-189060637"
      },]
}

widget = JSON.stringify(widget)

// Init VK  Mini App
connect.send('VKWebAppInit');

connect.subscribe(event => {

   
    const { type, data } = event.detail;
   
     if (type === 'VKWebAppShowCommunityWidgetPreviewBoxFailed') {
      console.log(data.code_data, data.error_type, data.error_data);
     }

    console.log(type)

    if(type === 'VKWebAppCallAPIMethod'){
        console.data(data)
    }


  });

connect.send("VKWebAppShowCommunityWidgetPreviewBox", {
    "group_id": 189060637,
    "type": "cover_list",
    "code": `return ${widget};`
});

// const app = '33fe1b19ca2ae196a7a15a2ee0a265161fb58bc03cf547762eba3d817d1261e9a57caa3eab82019631093';



// {"type":"VKWebAppCallAPIMethodResult","data":{"response":{"upload_url":"https://pu.vk.com/c857624/upload.php?_query=eyJhY3QiOiJhcHBfd2lkZ2V0X2ltYWdlIiwib2lkIjo3MjE4MzcwLCJhaWQiOjcyMTgzNzAsInR5cGUiOjQsIndpZHRoIjoxNTMwLCJoZWlnaHQiOjM4NCwiYXBpX3dyYXAiOnsiaGFzaCI6IjM3YWJiMmEyYzJlNmI5NmM3MCIsImltYWdlIjoie3Jlc3VsdH0ifSwibWlkIjowLCJzZXJ2ZXIiOjg1NzYyNCwiX29yaWdpbiI6Imh0dHBzOlwvXC9hcGkudmsuY29tIiwiX3NpZyI6ImE4YmFiZDQ4ZDAzNjg0MThmOWY0YjZhMjA0NWY0NTg4In0"}}}




// {"type":"VKWebAppCallAPIMethodResult","data":{"response":{"id":"7218370_705359","type":"510x128","images":[{"url":"https://sun9-53.userapi.com/c857636/v857636273/10416a/-rlbjcZvQ-g.jpg","width":510,"height":128},{"url":"https://sun9-11.userapi.com/c857636/v857636273/10416b/cZCdfj9yfBs.jpg","width":1020,"height":256},{"url":"https://sun9-51.userapi.com/c857636/v857636273/10416c/ABK1l5_PDyY.jpg","width":1530,"height":384}]}}}







ReactDOM.render(<App />, document.getElementById('root'));
