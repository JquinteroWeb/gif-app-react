import { useState } from 'react';
import { AddCategory } from './components/AddCategory'
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {        
        setCategories(cat => [...cat, newCategory]);
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory = {onAddCategory}
            />
            {/* List */}

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


