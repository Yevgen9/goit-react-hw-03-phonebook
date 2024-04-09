// import React, { Component } from "react";
// import { nanoid } from "nanoid";

// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(this.state);
//     this.props.onSubmit(this.state);

//     // reset form
//     this.reset();
//   };

//   // reset form
//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   render() {
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor={this.nameInputId}>
//             Name
//             <input
//               onChange={this.handleChange}
//               type="text"
//               name="name"
//               placeholder="Enter name"
//               value={this.state.name}
//               id={this.nameInputId}
//               required
//             />
//           </label>

//           <label htmlFor={this.numberInputId}>
//             Number
//             <input
//               onChange={this.handleChange}
//               type="tel"
//               name="number"
//               placeholder="Enter phone number"
//               value={this.state.number}
//               id={this.numberInputId}
//               required
//             />
//           </label>
//           <button type="submit">Add contact</button>
//         </form>{" "}
//       </div>
//     );
//   }
// }

// export default ContactForm;

//====================================================================================================================================
import React, { Component } from "react";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.scss";
import contacts from "../../contacts.json";

const INIITAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = INIITAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onAdd } = this.props;


    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) return;

    onAdd({ id: nanoid(), name, number });

    this.resetForm();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheck } = this.props;

    if (!name || !number) {
      alert("Some filed is empty");
      return false;
    }
    return onCheck(name);
  };

  resetForm = () => this.setState(INIITAL_STATE);

  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <form className={s.form} onSubmit={this.handleFormSubmit}>
          <p className={s.text}>Name</p>
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            placeholder="Enter text"
            value={name}
            onChange={this.handleChangeForm}
          />

          <p className={s.text}>Number</p>
          <input
            id={this.numberInputId}
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={number}
            onChange={this.handleChangeForm}
          />

          <button className={s.btn} type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
