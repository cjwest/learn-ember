import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

  model() {

    return $.ajax({
      url: '/myproxy/tas_console/include/api.php',
      data: {
        op: 'get',
        op2: 'extension',
        ext_name: 'dash',
        ext_function: 'dash_image',
        return_type: 'csv',
        id: 'Kentfield',
        other_mode: 'url_encode_separator_|',
        apipass: '5875',
        user: 'demo',
        pass: 'Dem04u!',
      }
    }

//'https://demo.theftalertsystem.com:8443/tas_console/include/api.php?op=get&op2=extension&ext_name=dash&ext_function=dash_image&return_type=csv&id=Kentfield&other_mode=url_encode_separator_|&apipass=5875&user=demo&pass=Dem04u!');
//'/myproxy/tas_console/include/api.php?op=get&op2=extension&ext_name=dash&ext_function=dash_image&return_type=csv&id=Kentfield&other_mode=url_encode_separator_|&apipass=5875&user=demo&pass=Dem04u!');
    //return this.store.findRecord('article', params.id);
  }
});
/*

                    $.ajax
                    ({
                        type: "POST",
                        //the url where you want to sent the userName and password to
                        url: "http://notgiven",
                        dataType: 'json',
                        async: false,
                        //json object to sent to the authentication url
                        //data: {"username": "' + userName + '", "password" : "' + password + '"},
                     data: { username: "user1", password: "test1" },,
                        success: function (data) {
                            //do any process for successful authentication here
                            alert('Login status: ' + data.status);
                        }
                     })
                };
*/
