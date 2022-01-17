import React from 'react';

const FilterForm = () => {
    return (
        <div className='row'>
            <form className='col s12'>
                <div className='row'>
                    <div className=' col s6'>
                        <input
                            placeholder='Placeholder'
                            id='first_name'
                            type='text'
                            className='validate'
                        />
                        <label htmlFor='first_name'>First Name</label>
                    </div>
                    <div className='input-field col s6'>
                        <input
                            id='last_name'
                            type='text'
                            className='validate'
                        />
                        <label htmlFor='last_name'>Last Name</label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FilterForm;
