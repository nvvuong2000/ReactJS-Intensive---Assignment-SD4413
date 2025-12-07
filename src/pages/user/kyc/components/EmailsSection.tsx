import React from 'react';
import { InputField, SelectField, ArraySection } from '../../../../components/shared';

type ContactType = 'Work' | 'Personal';

interface Email {
    address: string;
    type: ContactType;
    preferred: boolean;
}

interface EmailsSectionProps {
    emails: Email[];
    onChange: (index: number, field: keyof Email, value: string | boolean) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    errors: any[];
    readOnly?: boolean;
}

const EmailsSection: React.FC<EmailsSectionProps> = ({ emails, onChange, onAdd, onRemove, errors, readOnly = false }) => {
    const typeOptions = [
        { value: 'Personal', label: 'Personal' },
        { value: 'Work', label: 'Work' }
    ];

    const preferredOptions = [
        { value: true, label: 'Yes' },
        { value: false, label: 'No' }
    ];

    const renderEmail = (email: Email, index: number) => (
        <div className="grid grid-cols-2 gap-4">
            <InputField
                label="Email Address"
                id={`email-address-${index}`}
                value={email.address}
                onChange={(value) => onChange(index, 'address', value)}
                placeholder="Enter email address"
                error={errors[index]?.address}
                readOnly={readOnly}
                type="email"
            />
            <SelectField
                label="Type"
                id={`email-type-${index}`}
                value={email.type}
                onChange={(value) => onChange(index, 'type', value)}
                options={typeOptions}
                error={errors[index]?.type}
                readOnly={readOnly}
            />
            <SelectField
                label="Preferred"
                id={`email-preferred-${index}`}
                value={email.preferred}
                onChange={(value) => onChange(index, 'preferred', value)}
                options={preferredOptions}
                error={errors[index]?.preferred}
                readOnly={readOnly}
            />
        </div>
    );

    return (
        <ArraySection
            title="Emails"
            items={emails}
            renderItem={renderEmail}
            onAdd={onAdd}
            onRemove={onRemove}
            readOnly={readOnly}
            itemTitle={(index) => `Email #${index + 1}`}
        />
    );
};

export default EmailsSection;