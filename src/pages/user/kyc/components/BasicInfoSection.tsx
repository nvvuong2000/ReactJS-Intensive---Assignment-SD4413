import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { InputField } from '../../../../components/shared';

interface BasicInfo {
    firstName: string;
    lastName: string;
    middleName: string;
    dob: string;
    age: string;
}

interface BasicInfoSectionProps {
    basicInfo: BasicInfo;
    onChange: (field: keyof BasicInfo, value: string) => void;
    errors: any;
    readOnly: boolean;
}

const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({ basicInfo, onChange, errors, readOnly }) => {
    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">Basic information</h3>
            <form>
                <fieldset>
                    <div className="grid grid-cols-6 gap-6">
                        <InputField
                            label="First Name"
                            id="first-name"
                            value={basicInfo.firstName}
                            onChange={(value) => onChange('firstName', value)}
                            placeholder="First Name"
                            error={errors.firstName}
                            readOnly={readOnly}
                            className="col-span-6 sm:col-span-3"
                        />
                        <InputField
                            label="Last Name"
                            id="last-name"
                            value={basicInfo.lastName}
                            onChange={(value) => onChange('lastName', value)}
                            placeholder="Last Name"
                            error={errors.lastName}
                            readOnly={readOnly}
                            className="col-span-6 sm:col-span-3"
                        />
                        <InputField
                            label="Middle Name"
                            id="middle-name"
                            value={basicInfo.middleName}
                            onChange={(value) => onChange('middleName', value)}
                            placeholder="Middle Name"
                            error={errors.middleName}
                            readOnly={readOnly}
                            className="col-span-6 sm:col-span-3"
                        />
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                            <DatePicker
                                id="birthday"
                                selected={basicInfo.dob ? (() => {
                                    const [day, month, year] = basicInfo.dob.split('/');
                                    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
                                })() : null}
                                onChange={(date) => {
                                    if (date) {
                                        const day = date.getDate().toString().padStart(2, '0');
                                        const month = (date.getMonth() + 1).toString().padStart(2, '0');
                                        const year = date.getFullYear();
                                        onChange('dob', `${day}/${month}/${year}`);
                                    } else {
                                        onChange('dob', '');
                                    }
                                }}
                                dateFormat="dd/MM/yyyy"
                                className={`shadow-sm bg-gray-50 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${readOnly ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}`}
                                readOnly={readOnly}
                                placeholderText="Select birthday"
                            />
                            {errors.dob && <p className="mt-1 text-sm text-red-600">{errors.dob}</p>}
                        </div>
                        <InputField
                            label="Age"
                            id="age"
                            value={basicInfo.age}
                            onChange={() => {}} // Age is auto-calculated
                            placeholder="Auto-calculated"
                            readOnly={true}
                            className="col-span-6 sm:col-span-3"
                        />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default BasicInfoSection;