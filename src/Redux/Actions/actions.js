export const Add_Task_Action = (task, board) => {
    return ({
        type: "ADD_TASK",
        task: task,
        board: board
    });
} 

export const Delete_Task_Action = (board, index) => {
    return ({
        type: "DELETE_TASK",
        board: board,
        index: index
    })
}