var PostList = [
    {
        "id": 1,
        "title": "测试",
        "Introduction": "测试测试测试测试测试测试",
        "tags": [
            "vue",
            "js"
        ]
    }, {
        "id": 2,
        "title": "测试2",
        "Introduction": "测试2测试2测试2测试2测试2测试2测试2测试2",
        "tags": [
            "c++",
            "测试"
        ]
    }
]

for(var i = 0; i < PostList.length; i++) {
    document.write("<tr>");
    for(var j = 0; j < PostList[i].length; j++) {
        document.write("<td>" + PostList[i][j] + "</td>");
    }
    document.write("</tr>");
}