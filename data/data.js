
var blogID = '5989df866b0371404aa56ba6';

var data = {
  home: {
    "Hello my name is Patty...": {
      image: "Pat_ltplrl.png",
      p: "I both sincerely adore and enjoy caring for animals. I provide peace of mind to you as pet owners that your pet(s) will be well cared for while you are away."
    },
    "Pawfessional": {
      p: "I understand that discerning pet and property owners aren’t comfortable letting just anyone in their home. With Patty's Pet Pals, you’ll return to your home and pets knowing they have been well cared for."
    },
    "Experienced": {
      p: "Over the past two years I have provided high quality home and pet care. I am very honest, reliable, experienced and insured. I am also a member of National Association of Professional Pet Sitters. "
    }
  },
  services: {
    "Pet Services Provided": [
      {
        service: "Pet Sitting",
        icon: "fa fa-paw"
      },
      {
        service: "Dog Walking",
        icon: "fi-guide-dog large-icon"
      },
      {
        service: "Care & feeding",
        icon: "fa fa-heart"
      },
      {
        service: "Waste pick up & disposal",
        icon: "fi-trash"
      },
      {
        service: "Medication administration",
        icon: "fa fa-medkit"
      },
      {
        service: "Brushing & Bathing",
        icon: "fa fa-bath"
      },
      {
        service: "Transportation",
        icon: "fa fa-car"
      },
      {
        service: "House sitting",
        icon: "fa fa-home"
      }
    ],
    "Other Services if on Vacation": [
      {
        service: "Collect mail",
        icon: "fa fa-envelope-o"
      },
      {
        service: "Water plants",
        icon: "fa fa-leaf"
      },
      {
        service: "Alter lights & shades",
        icon: "fa fa-lightbulb-o"
      }
    ],
    "Areas Serviced": ["Norwest Columbus including zip codes:", "43235, 43017, 43016, 43002, 43220, 43085, 43221, 43214"]
  },
  rates: {
    rate: [],
    paragraph: ["Initial visit will be a 20-30 minute consultation.", "During which time, I will get to know you and your pet, and determine services required.", "Forms will be filled out "]
  },
  contact: {
    paragraph: ["Want to get in contact with me?", "Whether you have further questions about my services, would like to request proof of certification, or would like to see my resume, I would be happy to hear from you!", "Call me with the provided phone numbers or click on a", "fa fa-envelope", "icon to leave a message and I will get back to you as soon as possible.", "Note: No spam or soliciting, please  :-)"]
  }
};

var footer = {
  rowTwo: [
    "Member of National Association of Professional Pet Sitters.",
    "Reference letters available per request.",
    "Proof of up to date vaccinations especially for pets who go outdoors must be provided.",
    "Vet recommended."
  ],
  rowOne: ["614-625-7651", "614-754-8654"]
};

var loginData = {
  username: {
    type: 'text',
    placeholder: 'Admin Username',
    componentClass: 'input'
  },
  password: {
    type: 'password',
    placeholder: 'Password',
    componentClass: 'input'
  },
};


var messageData = {
  name: {
    type: 'text',
    placeholder: 'Your Name',
    componentClass: 'input'
  },
  email: {
    type: 'email',
    placeholder: 'Email Address',
    componentClass: 'input'
  },
  phone: {
    type: 'text',
    placeholder: 'Phone Number',
    componentClass: 'input'
  },
  message: {
    type: 'text',
    placeholder: 'Message',
    componentClass: 'textarea'
  }
};

var notRequired = ['description'];

var initialUser = {
  token: ''
};

var initialEdit = {
  url: '',
  modalTitle: '',
  dataObj: ''
};

var initialMessage = '';

var editData = {
  title: {
    type: 'text',
    placeholder: 'Type of Service',
    componentClass: 'input'
  },
  cost: {
    type: 'text',
    placeholder: 'Cost of Service (US Dollars)',
    componentClass: 'input'
  },
  time: {
    type: 'text',
    placeholder: 'Length of Service',
    componentClass: 'input'
  },
  description: {
    type: 'text',
    placeholder: 'Description',
    componentClass: 'input'
  },
  services: {
    type: 'other',
    placeholder: '',
    componentClass: ''
  }
}

var initialRate = data.rates.rate;
var cloudName = "dhd1eov8v";

var messages = {
  inputError: "*Fill out required fields.",
  tokenError: 'You are unauthorized. Sign in to continue.',
  expError: 'Session expired. Log back in to continue.',
  phoneError: "Incorrect phone input.",
  emailError: "Incorrect email input.",
  authError: "You are not authorized to access this account.",
  usernameError: 'Username not found.',
  passError: 'Incorrect password for given username.',
  messageSent: "Message sent! I will get back to you within 24 business hours. Thank you!"
};

module.exports = {
  data: data,
  footer: footer,
  initialUser: initialUser,
  initialEdit: initialEdit,
  initialMessage: initialMessage,
  initialRate: initialRate,
  messageData: messageData,
  loginData: loginData,
  blogID: blogID,
  editData: editData,
  cloudName: cloudName,
  notRequired: notRequired,
  messages: messages
}
