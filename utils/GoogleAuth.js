const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://bitfitted.com/api/auth/google/callback",
    passReqToCallback : true
},
function(request, accessToken, refreshToken, profile, done){
    // User.findOrCreate({googleId: profile.id}, function(err, user){
    //     return document(err, user)

    // })
    return done(null, profile);
}

));

passport.serializeUser(function(user, done){
    done(null,user);
});

passport.deserializeUser(function(user, done){
    done(null,user);
});