import { useState } from 'react';


export const useForm = initialForm => {

  const [ form, setForm ] = useState(initialForm);

  const change = e => {

    console.log(e);

    setForm({
      ...form,
      [ e.target.name ]: e.target.type === 'int'
        ? parseInt(e.target.value, 10) : e.target.type === 'float'
        ? parseFloat(e.target.value, 10) : e.target.value,
    });

  };

  const resetForm = () => setForm(initialForm);

  return [ form, change, resetForm ];

};