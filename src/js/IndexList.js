var PostList = [
    {
        "id": 1,
        "title": "首页",
        "Introduction": "首页首页首页首页首页首页首页"
    }, {
        "id": 2,
        "title": "测试2",
        "Introduction": "测试2测试2测试2测试2测试2测试2测试2测试2"
    }
]

window.onload = function () {
    var postListContainer = document.getElementById("postList");
    for (var i = 0; i < PostList.length; i++) {
        var post = PostList[i];
        var liElement = document.createElement("li");
        liElement.classList.add("post")

        // 创建标题元素
        var titleElement = document.createElement("h3");
        titleElement.innerText = post.title;
        liElement.appendChild(titleElement);

        // 创建介绍元素
        var introElement = document.createElement("p");
        introElement.innerText = post.Introduction;
        introElement.classList.add("post-intro"); // 添加不同于title的class
        liElement.appendChild(introElement);

        postListContainer.appendChild(liElement);
    }
}