import {useDispatch, useSelector} from "react-redux";
import {toggleUi} from "./store/ui";
import {setUser} from "./store/user";

const App = () => {
    const dispatch = useDispatch();

    const {user} = useSelector((state) => state.user);
    const {ui} = useSelector((state) => state.ui);

    const inputOnChange = (event) => dispatch(setUser(event.currentTarget.value));

    return (
        <>
            {user} <br/>
            {ui ? 'true' : 'false'} <br/>
            <input onChange={inputOnChange}/> <br/>
            <button onClick={() => dispatch(toggleUi())}>toggle ui</button> <br/>
        </>
    );
}

export default App;
