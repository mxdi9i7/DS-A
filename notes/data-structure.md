Abstract Data Type
List

Types
Linear data
List

Array
Linked list
Stack
Queue
String
Hierarchical data
Tree
Recursive data structure
N nodes = N - 1 links/edge
Leaf = node with no child
Depth
Length of path from root to x
Number of links in the path from root to x
Find depth
X Depth = root height - x height
Height
Number of links in longest path from x to a leaf
Find height
X Height = root height - x depth
Binary tree
Can only have at most 2 children per node
Can have only 1 child
Have left child vs. right child
If either does not exist use NULL
Strict binary tree
Each node have either 2 or 0 children
Complete binary tree
All levels except the last are completely filled (have 2 children. Unfilled levels will be on the left.
Max height
N - 1
Min height
Log 2 n .floor()
Find array index of tree node, level = i
Left child index
2*i + 1
Right child index
2*i + 2
Perfect binary tree - all levels completely filled
Max number of nodes in a tree with height h
n = 2h+1 -1
h + 1 = log 2 (N + 1) - 1
Level = depth of tree
At any level i, we can have a max of 2i nodes
Cost of operations
Depends on the height of the tree
Will be less height if tree is dense, or closer to complete or perfect form
Time complexity of tree is proportional to height
O(h)
Minimum - O(log2n)
Maximum - O(n)
To keep tree faster to work with, we want to keep the trees balanced
Left and right tree difference in height is no more than K or often 1
Binary search tree (BST)
Efficient, For quick search and quick updates
When data gets really large,
Machines can perform 1 million comparisons a second
Comparing an array that has 100 million items, takes 100 seconds
Different types of data storage
Array - unsorted
Search O(n)
Insert O(1)
Remove O(n)
Linked list
Search O(n)
Insert O(1)
Remove O(n)
Binary Search - Sorted array, sort by integer
Search O(logn)
For 231 (2 billion) items, the search time is only 31\*10-6 sec (31 microseconds)
Insert O(n)
Remove O(n)
BST - balanced
Search O(logn)
Insert O(logn)
Remove O(logn)
Definition: All left subtree node value is lesser or equal and all right subtree node value is greater.
N -> n/2 -> n/4 -> n/8 …. Log2n
During insertion and deletion, the tree get unbalanced, we need to restore the balancing while inserting and deleting, th
at’s very complex and we should avoid.
Traversing
Preorder
Root
Left
right
Inorder
Left  
Root,
Right
Postorder
Left
Right
Root
Trie
Heap
Hashing
Graph
Matrix
Segment Tree and Suffix Tree
Reasons
What needs to be stored
Cost of operation
Ease of implementation
