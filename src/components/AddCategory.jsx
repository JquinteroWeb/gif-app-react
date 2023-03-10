import PropTypes from 'prop-types';
import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInput = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();        
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit} aria-label = "form">
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

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}

