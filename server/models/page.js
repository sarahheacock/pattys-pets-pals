const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const services = require("../../data/data").data.services;
const messages = require('../../data/data').messages;
const keys = Object.keys(services);

const sortRates = (a, b) => {
  return b.cost - a.cost;
};

const addServices = () => {
  const arr = services[keys[0]].concat(services[keys[1]]);
  let service = {};
  arr.forEach((s) => {
    service[s.service] = true;
  });
  return service;
}

const makeid = () => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( let i=0; i < 16; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

const RateSchema = new Schema({
  cost: {type: String, default: "0"},
  time: {type: String, default: "10 minutes"},
  title: {type: String, default: "Pampered Paws"},
  description: {type: String, default: "Good for..."},
  services: {
    type: Object,
    default: addServices()
  }
});

// RateSchema.method("update", (updates, next) => {
//   Object.assign(this, updates);
//   next();
//   // console.log(this);
//   // this.parent.save(callback);
// });

const PageSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    default: makeid()
  },
  rates: {
    type: [RateSchema],
    default: [RateSchema],
  }
});

// authenticate input against database documents
PageSchema.statics.authenticate = (username, password, next) => {
  Page.findOne({ username: username })
    .exec((error, user) => {
      if (error) {
        return next(error);
      }
      else if (!user) {
        let err = new Error(messages.usernameError);
        err.status = 404;
        return next(err);
      }
      bcrypt.compare(password, user.password , (error, result) => {
        if (result === true){
          return next(null, user);
        }
        else {
          // console.log(user, password);
          let err = new Error(messages.passError);
          err.status = 401;
          return next(err);
        }
      })
    });
}

PageSchema.pre('save', (next) => {
  const page = this;
  if(page.rates !== undefined) page.rates.sort(sortRates);
  next();
});


const Page = mongoose.model("Page", PageSchema);

module.exports.Page = Page;
