// 定义树节点类型，children 引用自身
interface TreeNode {
    id: number;                    // 节点ID
    name: string;                  // 节点名称
    children?: TreeNode[];         // 子节点数组，递归引用
}

// 创建树形结构
const fileSystem: TreeNode = {
    id: 1,
    name: "根目录",
    children: [
        {
            id: 2,
            name: "文件夹1",
            children: [
                { id: 5, name: "文件A.txt" },
                { id: 6, name: "文件B.txt" }
            ]
        },
        {
            id: 3,
            name: "文件夹2",
            children: [
                { id: 7, name: "文件C.txt" }
            ]
        },
        {
            id: 4,
            name: "文件.txt"
        }
    ]
};

// 遍历树的函数
function traverse(node: TreeNode, depth: number = 0): void {
    const indent = "  ".repeat(depth);
    console.log(indent + "&#x1f4c1; " + node.name);

    if (node.children) {
        for (const child of node.children) {
            traverse(child, depth + 1);
        }
    }
}

traverse(fileSystem);



// 定义嵌套列表类型
type NestedList<T> = T | NestedList<T>[];

// 定义任务类型
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

// 创建嵌套任务列表
const tasks: NestedList<Task> = [
    { id: 1, title: "项目A", completed: false },
    [
        { id: 2, title: "子任务1", completed: true },
        { id: 3, title: "子任务2", completed: false }
    ],
    { id: 4, title: "项目B", completed: false }
];

// 计算嵌套列表深度
function getDepth<T>(list: NestedList<T>, depth: number = 0): number {
    if (Array.isArray(list)) {
        let maxDepth = depth + 1;
        for (const item of list) {
            maxDepth = Math.max(maxDepth, getDepth(item, depth + 1));
        }
        return maxDepth;
    }
    return depth;
}

console.log("列表深度: " + getDepth(tasks));


// 链表节点类型
interface ListNode<T> {
    value: T;              // 当前节点的值
    next?: ListNode<T>;    // 下一个节点，递归引用
}

// 创建链表
const linkedList: ListNode<number> = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: undefined
            }
        }
    }
};

// 遍历链表
function traverseList<T>(node: ListNode<T>): void {
    let current: ListNode<T> | undefined = node;
    const values: T[] = [];

    while (current) {
        values.push(current.value);
        current = current.next;
    }

    console.log("链表值: " + values.join(" -> "));
}

traverseList(linkedList);

// 计算链表长度
function getLength<T>(node: ListNode<T>): number {
    let length = 0;
    let current: ListNode<T> | undefined = node;

    while (current) {
        length++;
        current = current.next;
    }

    return length;
}

console.log("链表长度: " + getLength(linkedList));