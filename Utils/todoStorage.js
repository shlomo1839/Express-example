import fs from "fs/promises"

// ---- UTILITY FUNCTIONS ----

export const getNextId = (todos) => {
    if(!todos || todos.length === 0) {
        return 1;
    }
    let maxValue = 0;
    todos.forEach((todo) => {
        if (todo.id > maxValue) {
            maxValue = todo.id;
        }
    });
    return maxValue + 1;
};


async function fileExsist(filePath) {
    try {
        await fs.access(filePath, fs.constants.F_OK)
        return true;
    } catch (error) {
        return false;
    }
}

/** 
 * read todo from JSON
*/
export const readTodos = async (path) => {
    if (!(await fileExsist(path))) {
        return []
    }
    try {
        const data = await fs.readFile(path, "utf8");
        return json.parse(data);
    } catch (error) {
        return []    // If file is empty, return empty array
    }
};

/** 
 * write todo to JSON file
*/
export const writeFile = async (todos, path) => {
    await fs.writeFile(path, JSON.stringify(todos, null, 2), "utf8")
};