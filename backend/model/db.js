mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/event';
mongoose.connect(dbUrl);

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbUrl);
});
mongoose.connection.on('errorho', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});


var user = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String
});
var event = mongoose.Schema({
    originalId : String,
    location: String,
    phone_number: Number,
    description : String,
    owner_name: String,
    encodedImageUrl: String,
    ownerEmail: String,
    availabilityDate:Date,
    listingType: String,
    listingStatus: String,
    reviewStatus : String,
    dateCreated: Date,
    dateEdited: Date,
    encodedAvatarUrl: String,
});
var editevent = mongoose.Schema({
    originalId : String,
    location: String,
    phone_number: Number,
    description : String,
    owner_name: String,
    encodedImageUrl: String,
    ownerEmail: String,
    availabilityDate:Date,
    listingType: String,
    listingStatus: String,
    reviewStatus : String,
    dateCreated: Date,
    dateEdited: Date,
    encodedAvatarUrl: String,

});
mongoose.model('event', event);
mongoose.model('editevent', editevent);
mongoose.model('user', user);
