var posts=["2025/04/06/Hexo的一些操作/","2025/04/16/Tarjan算法-SCC-LCA/","2025/04/17/数位DP/","2025/04/17/二分/","2025/04/15/划分型DP与区间DP/","2025/04/17/文章模版/","2025/04/17/期望DP/","2025/04/17/树形DP/","2025/04/17/状态机模型/","2025/04/17/线性DP/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };