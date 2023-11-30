

class Request {
    get_data(){
      self = this;
      $.ajax({
          type : "GET",
          url : "/get_url",
          dataType : "json",
          contentType: "application/json; charset=utf-8",
          data : {},
          success : function(data){
            console.log(data);
            self.load_table(data);
          },
        });
    }
  
    static load_table(data){
      console.log(data);
    }
}
