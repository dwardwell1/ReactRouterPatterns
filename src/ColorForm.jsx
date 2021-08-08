import {
    
    useHistory
  } from 'react-router-dom';
  import {useState} from 'react';
import ColorList from './ColorList';
import Color from './Color';
function ColorForm({addColor}) {
    
    const [form, updateForm] = useState({name: ""});
    const history = useHistory();

    function handleChange(e) {
        e.persist();
        updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
      }

      function handleSubmit(e) {
        e.preventDefault();
        addColor(e.target.name.value);
        history.push("/colors");
      }
    
      const { name} = form;

  return (
      
    <div className="NewColor">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Color name</label>
        <input
          name="name"
          id="name"
          placeholder="Enter color name"
          onChange={handleChange}
          value={name}
        />
      </div>
      <div>
       
      </div>
      <input type="Submit" value="Add this color" readOnly />
    </form>
  </div>
  );
}

export default ColorForm;