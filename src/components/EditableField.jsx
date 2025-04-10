import React, { useState } from "react";

function EditableField({ name, id, label, value, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    console.log(tempValue);
    setIsEditing(false);
    onChange(id, tempValue);
  };

  return (
    <>
      <h6>{label}</h6>
      <p>
        {isEditing ? (
          <>
            <input
              type="text"
              id={id}
              name={`${name}`}
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
            />
            <button onClick={handleSave} className="modify-gomb">✅</button>
          </>
        ) : (
          <>
            {value}
            <button onClick={() => setIsEditing(true)} className="modify-gomb">✏️</button>
          </>
        )}
      </p>
    </>
  );
}

export default EditableField;