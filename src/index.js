import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
// import registerServiceWorker from './sw';

let widget = {
    "title": "Цитата дня",
    "title_url": "https://link",
    "title_counter": 42,
    "more": "Читать все цитаты",
    "more_url": "https://link2",
    "text": "«Нам нужно гордиться»",
    "descr": "Дэвид Кэмерон о победе сторонников выхода страны\n из Евросоюза на референдуме",
}




// Init VK  Mini App
connect.send('VKWebAppInit');
// connect.send("VKWebAppShowCommunityWidgetPreviewBox", {"group_id": 189060637, "type": "text", "code": `return {
//     \"title\": \"Циfgfgfgfgfgтата\",
//     \"text\": \"Текстgfgfg цитаты\"
// };`});

connect.send("VKWebAppShowCommunityWidgetPreviewBox", {
    group_id: 500,
    type: "text",
    code: 'return {"title": "Цитата", "text": "Текст цитаты"};'
  });

ReactDOM.render(<App />, document.getElementById('root'));
