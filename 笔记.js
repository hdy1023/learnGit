/* 
1.git revert和reset
都可以起到回退的作用
场景：分支A-B-C-D ，C、D两次提交有问题，想把代码回到B上
reset 可以直接将分支从A-B-C-D 变为 A-B  C、D提交会在分支上删除，缺陷：如果已经push了，此时reset之后需要强推，而且其他人的本地还是保留的之前的分支，它们下次提交会还原C、D提交，因此也需要他们本地reset一次。
revert 可以将分支从A-B-C-D 变为 A-B-C-D-E  C、D提交会在分支上保留，会产生一个新的提交E，新的提交E上根据D、E对代码进行反操作，最后代码和B一样。
总结：未push 直接在本地 reset ，已经push了 使用revert。
*/