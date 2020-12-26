const template = `<div>
            <h1>{{name}}</h1>
            </div>`;

const data = () => {
  return {
    title: "Vue3 Practise Updated",
    name: "Sagar",
  };
};

const App = { data, template };
Vue.createApp(App).mount(".vue-app");

console.log(Vue.createApp());
