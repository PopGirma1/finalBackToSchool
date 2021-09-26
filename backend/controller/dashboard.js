const jwt = require('jsonwebtoken');
const moment = require('moment');
const dotenv = require('dotenv');

var event = mongoose.model('event');
var user = mongoose.model('user');
var editevent = mongoose.model('editevent');


function dashboard(req, res) {
    dotenv.config();
    var userToken = req.headers['x-access-token'];
    if (!userToken) return res.send("no token provided");

    let decodedEmail = jwt.verify(userToken, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) return res.send('Failed to authenticate');
        return decoded
    });
    //check if the email is admin's email.
    console.log(decodedEmail);
    const filterBasedOn = (condition) => {
        event.find({editedVersion: false, reviewStatus: condition}, function (err, eventDocs) {
            if (err) {
                console.error(err)
            } else {
                editevent.find({reviewStatus: condition}, function (err, editedDocumentDocs) {
                    if (err) {
                        console.error(err)
                    } else {
                        console.log(editedDocumentDocs + "or" + eventDocs);
                        for (let i = 0; i < editedDocumentDocs.length; i++) {
                            eventDocs.push(editedDocumentDocs[i])
                        }
                        const userAndProduct = {
                            docs: {email: 'justt@gmail.com', name: 'justt'},
                            eventDocs: eventDocs,
                            auth: "Admin"
                        };
                        res.send(userAndProduct);
                    }
                });

            }
        });
    };
    if (decodedEmail === 'justt@gmail.com') {
        console.log(req.query);
        switch (req.query.filter) {
            case"Sort by date":
                event.find({listingStatus: {$ne: 'Draft'}, editedVersion: false}, function (err, eventDocs) {
                    if (err) {
                        console.error(err)
                    } else {

                        editevent.find({listingStatus: {$ne: 'Draft'}}, function (err, editedDocumentDocs) {
                            if (err) {
                                console.error(err)
                            } else {
                                for (let i = 0; i < editedDocumentDocs.length; i++) {
                                    eventDocs.push(editedDocumentDocs[i])
                                }
                                /*console.log(moment(eventDocs[1].dateCreated).format('x') + "ena" + moment(eventDocs[0].dateCreated).format('x'));*/
                                /*console.log(eventDocs[1].eventName + " ena " + eventDocs[0].eventName);*/
                                eventDocs.sort(function (a, b) {
                                    return moment(b.dateCreated).format('x') - moment(a.dateCreated).format('x');
                                });

                                const userAndProduct = {
                                    docs: {email: 'justt@gmail.com', name: 'justt'},
                                    eventDocs: eventDocs,
                                    auth: "Admin"
                                };
                                res.send(userAndProduct);
                            }
                        });

                    }
                });
                break;
            case"Sort by name":
                event.find({listingStatus: {$ne: 'Draft'}, editedVersion: false}, function (err, eventDocs) {
                    if (err) {
                        console.error(err)
                    } else {
                        editevent.find({}, function (err, editedDocumentDocs) {
                            if (err) {
                                console.error(err)
                            } else {
                                for (let i = 0; i < editedDocumentDocs.length; i++) {
                                    eventDocs.push(editedDocumentDocs[i])
                                }
                                eventDocs.sort(function (a, b) {
                                    var nameA = a.eventName.toUpperCase(); // ignore upper and lowercase
                                    var nameB = b.eventName.toUpperCase(); // ignore upper and lowercase
                                    if (nameA < nameB) {
                                        return -1;
                                    }
                                    if (nameA > nameB) {
                                        return 1;
                                    }

                                    // names must be equal
                                    return 0;
                                });
                                /*let sortedByBrand = eventDocs.sort((first, second) => first.eventName > second.eventName);*/
                                console.log(eventDocs);
                                const userAndProduct = {
                                    docs: {email: 'justt@gmail.com', name: 'justt'},
                                    eventDocs: eventDocs,
                                    auth: "Admin"
                                };
                                res.send(userAndProduct);
                            }
                        });

                    }
                });


                break;
            case"Approved":
                filterBasedOn("Approved");

                break;
            case"Pending":
                filterBasedOn("Pending");
                break;
            case "All Status":
                event.find({listingStatus: {$ne: 'Draft'}, editedVersion: false}, function (err, eventDocs) {
                    if (err) {
                        console.error(err)
                    } else {
                        editevent.find({listingStatus: {$ne: 'Draft'}}, function (err, editedDocumentDocs) {
                            if (err) {
                                console.error(err)
                            } else {
                                for (let i = 0; i < editedDocumentDocs.length; i++) {
                                    eventDocs.push(editedDocumentDocs[i])
                                }

                                const userAndProduct = {
                                    docs: {email: 'justt@gmail.com', name: 'justt'},
                                    eventDocs: eventDocs,
                                    auth: "Admin"
                                };
                                res.send(userAndProduct);
                            }
                        });

                    }
                });
                break;
            case"Rejected":
                filterBasedOn("Rejected");
                break;
            default:
                filterBasedOn("Pending");
                /*event.find({listingStatus: {$ne: 'Draft'}, editedVersion: false}, function (err, eventDocs) {
                    if (err) {
                        console.error(err)
                    } else {
                        editevent.find({listingStatus: {$ne: 'Draft'}}, function (err, editedDocumentDocs) {
                            if (err) {
                                console.error(err)
                            } else {
                                for (let i = 0; i < editedDocumentDocs.length; i++) {
                                    eventDocs.push(editedDocumentDocs[i])
                                }

                                const userAndProduct = {
                                    docs: {email: 'justt@gmail.com', name: 'justt'},
                                    eventDocs: eventDocs,
                                    auth: "Admin"
                                };
                                res.send(userAndProduct);
                            }
                        });

                    }
                });*/


                break;
        }

    } else {
        user.findOne({email: decodedEmail}, function (err, docs) {
            if (err) {
                console.error(err)
            } else {
                event.find({ownerEmail: decodedEmail, editedVersion: false}, function (err, eventDocs) {
                    if (err) {
                        console.error(err)
                    } else {
                        editevent.find({ownerEmail: decodedEmail}, function (err, editedDocumentDocs) {
                            if (err) {
                                console.error(err)
                            } else {
                                for (let i = 0; i < editedDocumentDocs.length; i++) {
                                    eventDocs.push(editedDocumentDocs[i])
                                }
                                const userAndProduct = {docs: docs, eventDocs: eventDocs, auth: "User"};
                                res.send(userAndProduct);
                            }
                        });

                    }
                })

            }
        });

    }

}

module.exports = dashboard;
