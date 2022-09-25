module.exports.profile = function(req,res){
    
    return res.render('user_profile', {
        title: "User Profile"
    });
};   

// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: "fbclone | Sign Up"
    });
};

// render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: "fbclone | Sign In"
    });
};

//get the sign up data
module.exports.create = function(req, res){
    //TODO later
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    //TODO later
}

// module.exports.profile = function(req,res){
//     res.end('<h1>User Profile</h1>');
// }   