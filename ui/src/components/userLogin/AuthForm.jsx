import PropTypes from "prop-types"
import { useState } from 'react';

const AuthForm = ({ onSubmit, buttonText, fields }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit(formData);
    }
  };


  return (
    <form   onSubmit={handleSubmit}>
      {fields.map((field) => (
        <input
          key={field.name}
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          value={formData[field.name] || ''}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          required
        />
      ))}
      <div className="text-center md:text-left">
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
          {buttonText}
        </button>
      </div>
    </form>
  );
};

AuthForm.propTypes = {
  buttonText: PropTypes.any,
  fields: PropTypes.shape({
    map: PropTypes.func
  }),
  onSubmit: PropTypes.func
}

export default AuthForm;
