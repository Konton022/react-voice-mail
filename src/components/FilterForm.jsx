import React from 'react';
import Select from 'react-select';

const FilterForm = ({
    period,
    setPeriod,
    periodOptions,
    duration,
    setDuration,
    durationOptions,
    phoneNumber,
    setPhoneNumber,
    handleResetFilter,
}) => {
    return (
        <form className='col s12'>
            <div className='row'>
                <div className='input-field col s3'>
                    <Select
                        options={periodOptions}
                        defaultValue={period}
                        value={period}
                        onChange={setPeriod}
                    />
                </div>
                <div className='input-field col s3'>
                    <input
                        placeholder='Phone Number'
                        type='text'
                        className='validate'
                        value={phoneNumber}
                        onChange={(event)=>setPhoneNumber(event.target.value)}
                    />
                    
                </div>
                <div className='input-field col s3'>
                    <Select
                        options={durationOptions}
                        defaultValue={duration}
                        value={duration}
                        onChange={setDuration}
                    />
                </div>
                <div className='input-field col s3'>
                    <button
                        className='btn-large white black-text reset-btn'
                        onClick={handleResetFilter}
                    >
                        Сбросить фильтр
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FilterForm;
