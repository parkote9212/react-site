import Ex_const1 from './components/Ex_const1';
import Ex_cont from './components/Ex_cont';
import Ex_cont2 from './components/Ex_cont2';
import Ex_js2 from './components/Ex_js2';
import Ex_zustand from './components/Ex_zustand';
import Ex_redux from './components/Ex_redux';
import { store_redux } from './components/store_redux';
import { Provider } from 'react-redux';
function Work6() {
  return (
    <>
    {/* Provider 컴포넌트가 Consumer 컴포넌트를 감싸는 구조 */}
      <Ex_cont>
        <h1>My App</h1>
        <Ex_const1 />
        <Ex_cont2 />
      </Ex_cont>
      <hr />
      <Ex_js2/>
      <hr />
    <Ex_zustand/>
    <hr />
   <Provider store={store_redux}>
    <Ex_redux/>
   </Provider>
    </>
  );
}

export default Work6;