console.log('这是user1创建的g文件')

console.log('这是user2创建的g文件，变基后冲突怎么解决？')
// 此时执行git rebase origin/master 会报错 ，而且也不会自动弹出处理冲突的操作：
/* 
error: The following untracked working tree files would be overwritten by checkout:
        g.js
Please move or remove them before you switch branches.
Aborting
error: could not detach HEAD
*/
/* 
意思是此时有文件g.js 在工作区未保存，变基后会导致这个文件会被覆盖，所以在变基（换树枝）前把它们移开
*/
/* 
解决：
1.只能先备份g文件  清空工作区缓存  再变基  再还原备份的g文件  进行比较  处理冲突（非常低效）
2.git stash？ 先git stash 清空工作区，再变基，再git stash pop，这时会弹出冲突，手动处理解决（可选择，但是有坑点）
坑：默认情况下，git stash 命令只暂存 Git 已追踪的文件更改，不会暂存未追踪的文件和 .gitignore 文件中忽略的文件
解决办法：使用git add 文件名 对新建文件进行追踪，再进行git stash 操作即可。如：git add club.vue 再git stash
3.merge 手动处理冲突
*/

/* 
rebase总结：
相比merge，分支树不会出现分叉，会一直保持一条直线，但是再处理冲突上不便利。
*/
