module.exports = {
    port : 5000,
    database : "mongodb://root:abc123@ds251197.mlab.com:51197/anitaddict",
    secretKey : "Secret",

    facebook:{
        clientID        : process.env.FACEBOOK_ID || '140660733286914',
        clientSecret    : process.env.FACEBOOK_SECRET || '3fa633340113a2e453f2651189858cb7',
        profileFields   : ['emails','displayName'],
        callbackURL     : '/auth/facebook/callback'
    },

    google: {
        clientID        : "108615941338-kundidkncmhq9rvbd1pj1r6kt2j8drmm.apps.googleusercontent.com",
        clientSecret    : "4cCslvQHiSP1eDYY3GHxAt2J",
        callbackURL     : '/auth/google/callback',
        maps : 'AIzaSyBMjefCMGWqujAt5jKbLWx1D_E-ET2nRmU'
    },

    mailing :{
        from : "develop.bagri98@gmail.com",
        password : "jaibhagwan"
    }
}