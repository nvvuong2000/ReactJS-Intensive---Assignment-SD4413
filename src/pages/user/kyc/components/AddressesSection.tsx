import React from 'react';
import { InputField, RemoveButton, AddButton, FormSection } from '../../../../components/shared';

type AddressType = 'Mailing' | 'Work';

interface Address {
    country: string;
    city: string;
    street: string;
    state: string;
    stateCode: string;
    postalCode: string;
    type: AddressType;
}

interface AddressesSectionProps {
    addresses: Address[];
    onChange: (index: number, field: keyof Address, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    errors: any[];
    readOnly?: boolean;
}

const AddressesSection: React.FC<AddressesSectionProps> = ({ addresses, onChange, onAdd, onRemove, errors, readOnly = false }) => {
    return (
        <FormSection title="Addresses">
            {addresses.map((address, index) => (
                <fieldset key={index} className="border border-gray-300 rounded-md p-4 mb-6">
                    <legend className="text-md font-medium text-gray-700 px-2 flex items-center justify-between">
                        <span>Address #{index + 1}</span>
                        {!readOnly && <RemoveButton onClick={() => onRemove(index)} />}
                    </legend>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField
                            label="Country"
                            id={`country-${index}`}
                            value={address.country}
                            onChange={(value) => onChange(index, 'country', value)}
                            placeholder="Enter country"
                            error={errors[index]?.country}
                            readOnly={readOnly}
                        />
                        <InputField
                            label="City"
                            id={`city-${index}`}
                            value={address.city}
                            onChange={(value) => onChange(index, 'city', value)}
                            placeholder="Enter city"
                            error={errors[index]?.city}
                            readOnly={readOnly}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <InputField
                            label="State"
                            id={`state-${index}`}
                            value={address.state}
                            onChange={(value) => onChange(index, 'state', value)}
                            placeholder="Enter state"
                            error={errors[index]?.state}
                            readOnly={readOnly}
                        />
                        <InputField
                            label="State Code"
                            id={`state-code-${index}`}
                            value={address.stateCode}
                            onChange={(value) => onChange(index, 'stateCode', value)}
                            placeholder="Enter state code"
                            error={errors[index]?.stateCode}
                            readOnly={readOnly}
                        />
                        <InputField
                            label="Postal Code"
                            id={`postal-code-${index}`}
                            value={address.postalCode}
                            onChange={(value) => onChange(index, 'postalCode', value)}
                            placeholder="Enter postal code"
                            error={errors[index]?.postalCode}
                            readOnly={readOnly}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <InputField
                            label="Street"
                            id={`street-${index}`}
                            value={address.street}
                            onChange={(value) => onChange(index, 'street', value)}
                            placeholder="Enter street"
                            error={errors[index]?.street}
                            readOnly={readOnly}
                        />
                    </div>
                </fieldset>
            ))}
            {!readOnly && <AddButton onClick={onAdd} text="Add Address" />}
        </FormSection>
    );
};

export default AddressesSection;