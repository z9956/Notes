## babel 的编译流程

babel 是 source to source 的转换，整体编译流程分为三步：

- parse：通过 parser 把源码转成抽象语法树（AST）
- transform：遍历 AST，调用各种 transform 插件对 AST 进行增删改
- generate：把转换后的 AST 打印成目标代码，并生成 sourcemap

## JS Parser 的历史

![JS Parser历史](/img/1ac411a03bbe9068877062c131fefbe.png)
