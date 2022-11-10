import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import "./assets/css/Global.scss";
import AppRoute from './routes/AppRoutes';


const App:React.FC = () => {

  return (
   <div className='app'>
    <Routes>
        <Route path='/*' element={<AppRoute />}/>
    </Routes>
   </div>
  );
};
export default App;
