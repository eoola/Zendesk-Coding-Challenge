const authorizationToken = 'ZW9vbGFAd3BpLmVkdS90b2tlbjpxc2Jrcm03S01lNnE2cmJUcGhsQTBlVlJwQ2ZCdXd6TjZpWU9aOWd5';

const getRequests = async () => {
    var username = 'eoola@wpi.edu'
    var apiKey = 'qsbkrm7KMe6q6rbTphlA0eVRpCfBuwzN6iYOZ9gy'
    var token = username + '/token:' + apiKey;
    var encode = btoa(token);

    const url = 'https://zccdemi.zendesk.com/api/v2/requests.json'
    let response = await fetch(url, {
        headers: {
            'Authorization': 'Basic ' + encode
        }
    });
    response = await response.json();
    return response;
}

export { getRequests }