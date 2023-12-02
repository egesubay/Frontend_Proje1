//import {test} from "./test";
import {Request} from "./helpers/request";

const request = new Request("./testPHP");

request.ajax({"aa":"cccc"})
.done(function( html) {
    console.log(html);
  }).
  fail(function(err) {
    alert( "error" + err.status);
  });


  (new Request("./test"))
  .ajax({"aa":"cccc"})
  .done(function( html) {
      console.log(html);
    }).
    fail(function(err) {
      alert( "error2"+ err.status);
    })
    .always(function() {
      alert( "complete111111" );
    });
    