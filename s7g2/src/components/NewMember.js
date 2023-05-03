import { useState } from "react";

const emptyForm = {
    name: '',
    email: '',
    role: '',
}

export default function AddMember({clickHandler}) {
    const [formData, setFormData] = useState(emptyForm);
    function handleChange(e) {
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        };
        setFormData(newFormData);
        console.log(newFormData)
    };



    return (
        <div>
            <h2>Takım Üyesi Ekleyici</h2>
            <form>
                <div>
                    <label htmlFor="name">
                        İsim:
                        <input type='text' name='name' onChange={(e) => handleChange(e)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        E-posta:
                        <input type='text' name="email" onChange={(e) => handleChange(e)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="role">
                        Rol:
                        <input type='text' name="role" onChange={(e) => handleChange(e)} />
                    </label>
                </div>
            </form>
            <button onClick={() => clickHandler(formData)} >Gönder</button>
        </div>
    );
};