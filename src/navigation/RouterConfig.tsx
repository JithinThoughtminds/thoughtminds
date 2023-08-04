
import { Route, Routes } from 'react-router-dom';
import * as PATHS from './CONSTANTS';
import SignIn from '../pages/auth/index';
import Chat from '../pages/chat'

const RouterConfig = () => {
    return (
        <Routes>
            <Route path={PATHS.SIGNIN} element={<SignIn/>}/>
            <Route path={PATHS.CHAT} element={<Chat/>}/>
        </Routes>
    )
}

export default RouterConfig
