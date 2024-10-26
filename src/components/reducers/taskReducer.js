export default function taskReducer(draft, action) {
    if (action.type === "added") {

        draft.push({
            id: crypto.randomUUID(),
            taskName: action.taskName,
            description: action.description,
            date: action.date,
            category: action.category,
        });

        return;
    } else if (action.type === "edited") {
        const index = draft.findIndex(task => task.id === action.task.id);
        draft[index] = action.task;
        return;
    } else if (action.type === "deleted") {
        return draft.filter((task) => task.id !== action.id);
    } else {
        throw Error("unknown action " + action.type);

    }
} 