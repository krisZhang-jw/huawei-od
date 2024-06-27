class Node {
  constructor(lc, rc, weight, height) {
    this.lc = lc; // 左孩子节点
    this.rc = rc; // 右孩子节点
    this.weight = weight; // 当前节点的权重
    this.height = height; // 当前节点代表子树的高度
  }
}

function midOrder(root, seq) {
  // 中序遍历，即先遍历二叉树的左子树，再遍历二叉树的根，最后遍历二叉树的右子树
  if (root.lc != null) {
    midOrder(root.lc, seq);
  }

  seq.push(root.weight)

  if (root.rc != null) {
    midOrder(root.rc, seq)
  }
}

function getResult(weights) {
  // 将哈夫曼树节点进行排序，方便后面筛选出权值最小的两个节点
}
