class Node {
    // 每一个节点，仅仅只包含 当前节点的值 和 当前节点的后驱节点值
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }

    // 添加节点到链表末尾
    append(data) {
      const newNode = new Node(data);
      console.log('newNode: ', newNode);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        console.log('current: ', current); // Node { data: 1, next: Node { data: 2, next: null } }
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }

    // 在指定位置插入节点
    insert(data, position) {
      if (position < 0 || position > this.size()) {
        return false; // 位置无效
      }
      const newNode = new Node(data);
      if (position === 0) { // 头节点
        newNode.next = this.head; // 连接
        this.head = newNode;
      } else { // 中间
        let current = this.head;
        let index = 0;
        // 遍历拿到当前位置的前一个节点，链表无下标，需遍历指针获取
        while (index < position - 1) {
          current = current.next;
          index++;
        }
        newNode.next = current.next; // 新节点先连接下一个节点（保持不断链）
        current.next = newNode; // 刚才遍历到的位置节点（新节点的前驱结点）链接到新节点 完成插入
      }
      return true;
    }

    // 删除节点
    remove(data) {
      if (!this.head) {
        return false; // 空链表
      }
      // 判断当前删除的是否为头结点
      // 因为头结点没有前驱结点，因此需要特殊处理
      if (this.head.data === data) {
        this.head = this.head.next; // 直接将头结点链接到 原头结点的后驱结点  
        return true;
      }
      // 依旧是 遍历获取位置节点，不同的是，此处为找要删除的节点的值得位置
      //（实际上这里也可以改为删除指定位置的节点，实现同传插入节点）
      let current = this.head;
      while (current.next) {
        if (current.next.data === data) { // 找到节点
          // 将当前节点的 next 指向下一个节点的 next. 将当前节点跳过了要删除的节点
          current.next = current.next.next; 
          return true;
        }
        current = current.next;
      }
      return false; // 节点不存在
    }

    // 获取链表大小
    size() {
      let count = 0;
      // 遍历链表获取每个节点，累加值
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }

    // 打印链表
    print() {
      // 遍历打印链表节点值
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  // 示例用法
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.print(); // 输出: 1 2 3

  linkedList.insert(4, 1); // 在位置1插入节点
  linkedList.print(); // 输出: 1 4 2 3

  linkedList.remove(2); // 删除节点2
  linkedList.print(); // 输出: 1 4 3

  console.log("Size:", linkedList.size()); // 输出: Size: 3
