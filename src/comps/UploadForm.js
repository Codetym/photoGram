import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    // Allowed image(file) types
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            // set the file back to null
            setFile(null);
            setError('Please Select an Image File (png, jpeg, jpg).');
        }
    }

    return (
        <form>
            <input type='file' onChange={changeHandler} />
            <div className='output'>
                { error && <div className='error'>
                    { error }
                </div> }
                { file && <div>
                    { file.name }
                </div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm;