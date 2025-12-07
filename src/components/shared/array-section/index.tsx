import React from 'react';
import { RemoveButton, AddButton, FormSection } from '../';

interface ArraySectionProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  onAdd: () => void;
  onRemove: (index: number) => void;
  readOnly?: boolean;
  itemTitle: (index: number) => string;
}

function ArraySection<T>({
  title,
  items,
  renderItem,
  onAdd,
  onRemove,
  readOnly = false,
  itemTitle
}: ArraySectionProps<T>) {
  return (
    <FormSection title={title}>
      {items.map((item, index) => (
        <fieldset key={index} className="border border-gray-300 rounded-md p-4 mb-6">
          <legend className="text-md font-medium text-gray-700 px-2 flex items-center justify-between">
            <span>{itemTitle(index)}</span>
            {!readOnly && <RemoveButton onClick={() => onRemove(index)} />}
          </legend>
          {renderItem(item, index)}
        </fieldset>
      ))}
      {!readOnly && <AddButton onClick={onAdd} text={`Add ${title.replace(/s$/, '')}`} />}
    </FormSection>
  );
}

export default ArraySection;