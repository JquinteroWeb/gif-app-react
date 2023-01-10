import { useState } from 'react';
import { AddCategory } from './components/AddCategory'
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = () => {
        //setCategories([ ...categories,'valorant']);
        setCategories(cat => [...cat,'Nueva']);
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory />
            {/* List */}
            <button onClick={ onAddCategory }>Add</button>
            <ol>
                {
                    categories.map((category) => {
                        return <li key={category} >{category}</li>
                    })
                }
            </ol>

        </>
    )
}


