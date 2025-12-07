import React from 'react';
import { InputField, SelectField, RemoveButton, AddButton, FormSection } from '../../../../components/shared';

type ContactType = 'Work' | 'Personal';

interface Phone {
    number: string;
    type: ContactType;
    preferred: boolean;
}

interface PhonesSectionProps {
    phones: Phone[];
    onChange: (index: number, field: keyof Phone, value: string | boolean) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    errors: any[];
    readOnly?: boolean;
}

const PhonesSection: React.FC<PhonesSectionProps> = ({ phones, onChange, onAdd, onRemove, errors, readOnly = false }) => {
    const typeOptions = [
        { value: 'Personal', label: 'Personal' },
        { value: 'Work', label: 'Work' }
    ];

    const preferredOptions = [
        { value: true, label: 'Yes' },
        { value: false, label: 'No' }
    ];

    return (
        <FormSection title="Phones">
            {phones.map((phone, index) => (
                <fieldset key={index} className="border border-gray-300 rounded-md p-4 mb-6">
                    <legend className="text-md font-medium text-gray-700 px-2 flex items-center justify-between">
                        <span>Phone #{index + 1}</span>
                        {!readOnly && <RemoveButton onClick={() => onRemove(index)} />}
                    </legend>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField
                            label="Phone Number"
                            id={`phone-number-${index}`}
                            value={phone.number}
                            onChange={(value) => onChange(index, 'number', value)}
                            placeholder="Enter phone number"
                            error={errors[index]?.number}
                            readOnly={readOnly}
                        />
                        <SelectField
                            label="Type"
                            id={`phone-type-${index}`}
                            value={phone.type}
                            onChange={(value) => onChange(index, 'type', value)}
                            options={typeOptions}
                            error={errors[index]?.type}
                            readOnly={readOnly}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <SelectField
                            label="Preferred"
                            id={`phone-preferred-${index}`}
                            value={phone.preferred}
                            onChange={(value) => onChange(index, 'preferred', value)}
                            options={preferredOptions}
                            error={errors[index]?.preferred}
                            readOnly={readOnly}
                        />
                    </div>
                </fieldset>
            ))}
            {!readOnly && <AddButton onClick={onAdd} text="Add Phone" />}
        </FormSection>
    );
};

export default PhonesSection;