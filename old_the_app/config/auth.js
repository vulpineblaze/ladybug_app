// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '895194748840-0obsr8rrlogq3k5l89j5s4437865vtgh.apps.googleusercontent.com',
        'clientSecret'  : 'WpPWnCeFNiZFxuQM36r66pCx',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};