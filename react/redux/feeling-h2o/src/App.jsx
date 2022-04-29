import { useSelector, useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const defaultValue = useSelector(state => state.default);
    const condition = useSelector(state => state.condition);

    const handleClick = (condition) => {
        dispatch({
            type: 'CHAHGE_CONDITION',
            condition
        })
    }

    return (
        <div>
            {
                condition.map((item, id) => {
                    return <button
                        onClick={() => handleClick(item[Object.keys(item)])}
                        key={id}
                    >
                        {Object.keys(item)}
                    </button>
                })
            }
            <div>H2O is feeling:</div>
            <div>{defaultValue}</div>
        </div>
    )
}

export default App;
