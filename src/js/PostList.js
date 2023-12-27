var PostList = [
    {
        "id": 1,
        "title": "测试",
        "Introduction": "测试测试测试测试测试测试",
        "tags": [
            "#vue",
            "#js"
        ],
        "cover":"test.jpg"
    }, {
        "id": 2,
        "title": "测试2",
        "Introduction": "测试2测试2测试2测试2测试2测试2测试2测试2",
        "tags": [
            "#c++",
            "#测试"
        ],
        "cover":"test.jpg"
    }
]

window.onload = function () {
    var postListContainer = document.getElementById("postList");
    for (var i = 0; i < PostList.length; i++) {
        var post = PostList[i];
        var liElement = document.createElement("li");
        liElement.classList.add("post")

        // 创建封面元素
        var coverElement = document.createElement("p");
        coverElement.style.backgroundImage = "url('../assets/articleCover/"+post.cover+"')";
        coverElement.classList.add("post-cover")
        liElement.appendChild(coverElement);

        // 创建标题元素
        var titleElement = document.createElement("h3");
        titleElement.innerText = post.title;
        liElement.appendChild(titleElement);

        // 创建介绍元素
        var introElement = document.createElement("p");
        introElement.innerText = post.Introduction;
        introElement.classList.add("post-intro"); // 添加不同于title的class
        liElement.appendChild(introElement);

        // 创建tags的ul元素
        var tagsElement = document.createElement("ul"); 
        tagsElement.classList.add("tags-container");
        for (var j = 0; j < post.tags.length; j++) {
            var tag = post.tags[j];
            var tagElement = document.createElement("li"); // 创建tag的li元素
            tagElement.innerText = tag;
            tagsElement.appendChild(tagElement); // 将tag的li元素添加到tags的ul元素中
        }
        liElement.appendChild(tagsElement); // 将tags的ul元素添加到li元素中

        postListContainer.appendChild(liElement);
    }
}