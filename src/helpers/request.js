export class Request {

  constructor(url) {
    this.url = url;
  }

  type = "POST";
  dataType = "json";
  contentType = "application/json; charset=utf-8";

  ajax(data) {
    return $.ajax({
      type: this.type,
      url: this.url,
      dataType: this.dataType,
      contentType: this.contentType,
      data: data,
    });
  }

  getReguest(data={}){
   this.ajax(data)
   .done(function( res) {
    console.log("html", res);
    return res;
    }).
    fail(function(err) {
      console.log("err",err.status);
    });
  }

}
