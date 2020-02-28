const environments = {
    staging: {

        
        GOOGLE_CLOUD_VISION_API_KEY: 'PUT YOUR GOOGLE CLOUD VISION API KEY HERE'

    },
    production: {
        // Warning: This file still gets included in your native binary 
        // and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
    }
};



function getReleaseChannel() {
    return 'staging';

}
function getEnvironment(env) {
    console.log('Release Channel: ', getReleaseChannel());
    return environments[env];
}
const Environment = getEnvironment(getReleaseChannel());
export default Environment;