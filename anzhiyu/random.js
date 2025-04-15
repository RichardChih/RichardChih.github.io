var posts=["2025/04/06/hello-world/","2025/04/06/Hello-World-0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };