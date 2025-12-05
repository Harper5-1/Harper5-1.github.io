var posts=["2025/12/01/思考/1/","2025/12/04/思考/2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };