angular.module("factory", [])

  .factory("Auth", function(){
    // use oauth.io to get user's access token for google calendar;
    var googleSignin = function() {

      var params = {
        'calendarId': 'primary',
        'maxResults': 10
      };

      var listEvents = function(AuthResults) {
        var nextEvents = function() {
          var request = gapi.client.calendar.events.list(params);
          request.execute(function(resp){
            console.log(resp);
            return resp;
          })
        }
        gapi.client.load('calendar', 'v3', nextEvents);
      };

      var config = {
        'client_id': '235280252826-4brh07d3d8tnvq5ogtq19mgbjql25s9j',
        'scope': 'https://www.googleapis.com/auth/calendar.readonly',
        'immediate': false
      };

      gapi.auth.authorize(config, function(authResults){
        console.log(authResults)
        listEvents(authResults);
      });
    };

    var signout = function() {
      return  gapi.auth.signOut();
    };

    var checkAuth = function() {
      console.log("Checking Auth")
      var config = {
        'client_id': '235280252826-4brh07d3d8tnvq5ogtq19mgbjql25s9j',
        'scope': 'https://www.googleapis.com/auth/calendar.readonly',
        'immediate': true
      };
      return gapi.auth.authorize(config);
    };

    var linkedSignin = function() {
      hello('linkedin').login();

    };

    return {
      googleSignin: googleSignin,
      linkedSignin: linkedSignin,
      signout: signout
    };
  })
