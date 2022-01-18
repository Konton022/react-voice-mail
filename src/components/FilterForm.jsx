import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const FilterForm = ({ period, setPeriod, periodOptions }) => {
    return (
        <form className='col s12'>
            <div className='row'>
                <div className='input-field col s3'>
                    <Select
                        options={periodOptions}
                        defaultValue={period}
                        onChange={setPeriod}
                    />
                </div>
                {/* <div className='input-field col s3'>
                        <input
                            id='phoneNumber'
                            type='text'
                            className='validate'
                            value={phoneNumber}
                        />
                        <label htmlFor='phoneNumber'>Номер</label>
                    </div>
                    <div className='input-field col s3'>
                        <input
                            id='phoneNumber'
                            type='text'
                            className='validate'
                            value={duration}
                        />
                        <label htmlFor='phoneNumber'>Длительность</label>
                    </div> */}

                {/* <button className='btn col s3' id='resetFilter'>
                        Сбросить фильтр
                    </button> */}
            </div>
        </form>
    );
};

export default FilterForm;
