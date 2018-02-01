module.exports = (app) => {

    // Handles registering user and outputs correct response (sign up)
    app.post('/api/register', (req, res) => {

        // Labelling user data information
        const name = req.body.name;
        const username = req.body.username;
        const password = req.body.password;

        // Comparing to list of users
        const Users = [
            {
                id: 1,
                name: 'Joe Jones',
                username: 'joejones',
                password: 'password1'
            },
            {
                id: 2,
                name: 'Billy Murphy',
                username: 'billymurphy',
                password: 'password2'
            },
            {
                id: 3,
                name: 'Sally Smith',
                username: 'sallysmith',
                password: 'password3'
            },
            {
                id: 4,
                name: 'Jody Jenkins',
                username: 'jodyjenkins',
                password: 'password4'
            }
        ];

        // Success message
        let success = {
            Status: 1,
            Message: 'Thank you for signing up ' + username,
            Userid: (Users.length + 1)
        };

        // Error messages
        let error1 = {
            Status: -1,
            Message: 'Username has to be a minimum of 4 characters.'
        };
        let error2 = {
            Status: -2,
            Message: 'Username can only consist of both letters and numerals.'
        };
        let error3 = {
            Status: -3,
            Message: 'Password has to be a minimum of 4 characters.'
        };

        // Checks if username is 4 characters minimum 
        if (username.length < 4) {
            res.json(error1);
            // Checks if username is alphanumeric through Regex
        } else if ( /[^a-zA-Z0-9]/.test( username ) ) {
            res.json(error2);
            // Checks if password is 4 characters minimum
        } else if (password.length < 4) {
            res.json(error3);
            // Username and password meets all requirments
        } else {
            res.json(success);
        }

    });

    // Handles checking user and outputs correct response (sign in)
    app.post('/api/current_user', (req, res) => {
    
            // Labelling user data information
            const username = req.body.username;
            const password = req.body.password;
    
            // Comparing to list of users
            const Users = [
                {
                    id: 1,
                    name: 'Joe Jones',
                    username: 'joejones',
                    password: 'password1'
                },
                {
                    id: 2,
                    name: 'Billy Murphy',
                    username: 'billymurphy',
                    password: 'password2'
                },
                {
                    id: 3,
                    name: 'Sally Smith',
                    username: 'sallysmith',
                    password: 'password3'
                },
                {
                    id: 4,
                    name: 'Jody Jenkins',
                    username: 'jodyjenkins',
                    password: 'password4'
                }
            ];

            // Error messages 
            let error1 = {
                Status: -1,
                Message: 'Username has to be a minimum of 4 characters.'
            };
            let error2 = {
                Status: -2,
                Message: 'Username can only consist of both letters and numerals.'
            };
            let error3 = {
                Status: -3,
                Message: 'Password has to be a minimum of 4 characters.'
            };
            let error4 = {
                Status: -4,
                Message: 'Username does not exist. Please try again.'
            }
            let error5 = {
                Status: -5,
                Message: 'Wrong password. Please try again.'
            }

            // Checks if username is 4 characters minimum 
            if (username.length < 4) {
                res.json(error1);
                // Checks if username is alphanumeric through Regex
            } else if ( /[^a-zA-Z0-9]/.test( username ) ) {
                res.json(error2);
                // Checks if password is 4 characters minimum
            } else if (password.length < 4) {
                res.json(error3);
                // Username and password meets all requirments
            } else {

                // Check to see if user in database
                for (var i = 0; i < Users.length; i++) {
                    var eachUser = Users[i];
    
                    // Checks username against database
                    if (eachUser.username === username) {
                        if (eachUser.password === password) {

                            // Send back name and user id
                            let name = eachUser.name;
                            let id = eachUser.id;

                            // Success message
                            let success = {
                                Status: 1,
                                Message: 'Login success',
                                Name: name,
                                Username: username,
                                Userid: id
                            };

                            res.json(success);
                        } else {
                            res.json(error5);
                        }
                    } 
                    
                }

                if (username != Users[0] || username != Users[1] || username != Users[2] || username != Users[3]) {
                    res.json(error4);
                }

            }
    
        });
};


