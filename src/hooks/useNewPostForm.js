import { useState } from 'react';

const useNewPostForm = () => {
    const initialValue = {
        title: '',
        content: '',
        category: ''
    };

    const [input, setInputValues] = useState(initialValue);

    const reset = () => {
        setInputValues(initialValue);
    };

    const handleChange = event => {
        event.persist();

        setInputValues(prevValues => ({
            ...prevValues,
            [event.target.name]: event.target.value
        }));
    };

    return {
        handleChange,
        reset,
        input
    };
};

export default useNewPostForm;
