430 - Flatten multi level doubly linked list
可以翻过来当做树来看，那样的话就像一个 DFS，但是用 recursion 做有点奇怪，可以用 iteration。每次循环的时候只要 take care 当前的 node 的 prev 和 next，然后用 prev 向前移动的同时先 next 放进 stack，随后把 child 放进 stack，这样每次 pop 出来的都是 child，以此类推。这道题只要关心当前的 node 的 prev 和 next 是不是正确的，dummy 可以自动从 prev 里面拿到最新的排列组合。要记住 push 到 stack 之后把多余的 child 删掉，省去 memory。最后要把 dummy 本身从 dummy.next.prev 去掉，这样返回的 node 才是 head。

2 - Add 2 numbers
这道题就是常规的双指针往前走，每次两边相加，结果返回给 dummy 链表。carry 只能是 0 或者 1，要注意这道题是说反过来加，其实是让题目更简单更 straightforward 了，这样就不用去前面补位，因为是反着的。最后记得补上 carry 的 1，如果还剩下 carry 的话。记得每次计算的时候如果 sum 没超过 10 要把 carry 重置为 0。
