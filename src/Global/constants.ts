const FormFields = {
  firstName: {
    labelFirstName: "First Name",
    nameFirstName: "firstname",
  },
  lastName: {
    labelLastName: "Last Name",
    nameLastName: "lastname",
  },
  email: {
    labelEmail: "Email",
    nameEmail: "email",
  },
  phoneNumber: {
    labelPhoneNumber: "Phone Number",
    namePhoneNumber: "phonenumber",
  },
  password: {
    labelPassword: "Password",
    namePassword: "password",
  },
};

const rules: any = {
  firstName: [
    {
      required: true,
      message: "Please enter a first name",
    },
  ],
  lastName: [
    {
      required: true,
      message: "Please enter a last name",
    },
  ],
  email: [
    {
      type: "email",
      message: "invalid email format",
    },
    {
      required: true,
      message: "please enter a email",
    },
  ],
  phoneNumber: [
    {
      required: true,
      message: "please enter a phone number",
    },
    {
      min: 10,
      message: "invalid phone number",
    },
  ],
  password: [
    {
      required: true,
      message: "please enter a password",
    },
    {
      min: 6,
      message: "Invalid! need atleast 6 charactors",
    },
  ],
};

const button = {
  addButton: "Add",
  cancelButton: "Cancel",
  updateButton: "Update",
};

const alertMessages = {
  delete: "User deleted Successfully....",
  add: "User added successfully....",
  update: "User Updated successfully...",
  warn: {
    delete: "Are you want to delete this user?",
    logout: "Are you want to logout?",
    user: "please enter valid user name",
  },
  login : {
    success :"Welcome!",
    error : "invalid username or password"
  },
  registration : {
    success :"Registred successfully"
  }
};

const confirmPopup = {
  delete: {
    ok: "Delete",
    cancel: "Cancel",
  },
};

export { FormFields, rules, button, alertMessages, confirmPopup };
