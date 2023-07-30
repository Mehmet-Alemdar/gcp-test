import '../styles/modal.css'
import { useState } from 'react';

const Modal = ({ handleClose, show, handleSubmit }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    adress: '',
    phoneNumber: ''
  })

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <input type="text" placeholder="name" onChange={(e) => setUser({...user, name: e.target.value})}/>
        <input type="text" placeholder="lastName" onChange={(e) => setUser({...user, lastName: e.target.value})}/>
        <input type="text" placeholder="email" onChange={(e) => setUser({...user, email: e.target.value})}/>
        <input type="text" placeholder="adress" onChange={(e) => setUser({...user, adress: e.target.value})}/>
        <input type="text" placeholder="phoneNumber" onChange={(e) => setUser({...user, phoneNumber: e.target.value})}/>
        <button className='closeButton' onClick={handleClose}>x</button>
        <button className='submitButton' onClick={() => handleSubmit(user)}>Add</button>
      </section>
    </div>
  );
}

export default Modal;