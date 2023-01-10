import { useState } from 'react';


export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('Dragon Ball');

    const onInput = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) =>{
        event.preventDefault();       
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Search Gifs"
                    value={inputValue}
                    onChange={onInput}
                />
            </div>
        </form>
    )
}

