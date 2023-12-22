import { useState } from "react";
import { AddCategory, GifGrid } from "./componentes";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Demon Slayer'])

    const onAddCategory = ( newCategory ) => {

        const lowerCaseCategories = categories.map(category => category.toLowerCase());

        if (lowerCaseCategories.includes(newCategory.toLowerCase())) return;

        setCategories( [ newCategory, ...categories ] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = {(value) => onAddCategory(value) }
            />

                { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category = {category}
                    />
                    ))
                }
        </>
    )
}
