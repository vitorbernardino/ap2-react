import { useState } from 'react';
import '../styles/formStyle.css';

export function Form({ addUser }) {

    const [formState, setFormState] = useState({
        name: '',
        confirmed: null,
        payed: null,
        imageUrl: '',
      });

      const [errors, setErrors] = useState({});

      const validate = () => {
        const newErrors = {};
    
        
        if (formState.name == '') {
          newErrors.nome = 'O nome é obrigatório.';
        }

        if (formState.confirmed == null) {
          newErrors.confirmed = 'Selecione uma opção.';
        }

        if (formState.payed == null) {
          newErrors.payed = 'Selecione uma opção.';
        }

        if (formState.imageUrl == '') {
          newErrors.imageUrl = 'A imagem é obrigatoria.';
        }

        return newErrors;
      }

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate(); 
        setErrors(validationErrors); 

        if (Object.keys(validationErrors).length === 0) {
          const newUser = {
            id: Math.random(), 
            ...formState
          };
          addUser(newUser);
          setFormState({ name: '', confirmed: null, payed: null, imageUrl: '' });
        }
        
        
      };

      const handleRadioChange = (e) => {
        setFormState((prev) => ({
          ...prev,
          confirmed: e.target.value === 'yes',  
        }));
      };

      const handleRadioChange2 = (e) => {
        setFormState((prev) => ({
          ...prev,
          payed: e.target.value === 'yes',  
        }));
      };

    return(
        <div className='wrapper'>
          <form onSubmit={handleSubmit} className="forms">
            <h1>Cadastro</h1>

          <div className="input-box">
            <input
              placeholder='username'
              type="text"
              name="name"
              value={formState.name} 
              onChange={handleChange}
            />
            {errors.nome && <p style={{ color: 'red' }}>{errors.nome}</p>}
          </div>

          <div className="radio-box">
          <label>Egresso/Convidado:</label>
          <div>
            <input
              type="radio"
              id="yes"
              name="confirmed"
              value="yes"
              checked={formState.confirmed === true}
              onChange={handleRadioChange}
            />
            <label htmlFor="yes">Sim</label>
          </div>
          <div>
            <input
              type="radio"
              id="no"
              name="confirmed"
              value="no"
              checked={formState.confirmed === false}
              onChange={handleRadioChange}
            />
            <label htmlFor="no">Não</label>
          </div>
          {errors.confirmed && <p style={{ color: 'red' }}>{errors.confirmed}</p>}
          </div>


          <div className="radio-box">
          <label>pago:</label>
          <div>
            <input
              type="radio"
              id="yes"
              name="payed"
              value="yes"
              checked={formState.payed === true}
              onChange={handleRadioChange2}
            />
            <label htmlFor="yes">Sim</label>
          </div>
          <div>
            <input
              type="radio"
              id="no"
              name="payed"
              value="no"
              checked={formState.payed === false}
              onChange={handleRadioChange2}
            />
            <label htmlFor="no">Não</label>
          </div>
          {errors.payed && <p style={{ color: 'red' }}>{errors.payed}</p>}
          </div>

          <div className="input-box">
            <input
              placeholder='Foto (URL)'
              type="text"
              name="imageUrl"
              value={formState.imageUrl}
              onChange={handleChange}
            />
            {errors.imageUrl && <p style={{ color: 'red' }}>{errors.imageUrl}</p>}
          </div>

          <button className="btn" type="submit">Cadastrar</button>
          </form>
        </div>
    )

}
