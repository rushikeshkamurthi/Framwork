
const isDevelopment= () => { 
     return true;
}

const version = 'VERSION_NAME';
export default isDevelopment() 
?
{
// send variable name like base URL based on the is development value
environment : 'development',
apiBaseUrl : '__URL__',
globalEndPoint: '__ENDPOINT__', 
appVersion : version
}:
{
    environment : 'production',
    apiBaseUrl : '__URL__',
    globalEndPoint: '__ENDPOINT__',
    appVersion : version

}