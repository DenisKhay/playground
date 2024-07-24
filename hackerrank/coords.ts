const prioritiesLoop = ['moveRight', 'moveDown', 'moveLeft', 'moveUp']
const SCREEN_WIDTH= 4000;
const SCREEN_HEIGHT= 2000;
const getCoords = (area: {x: number, y: number}) => {
    const memory: Record<`${number}-${number}`, true> = {};
    let absCoords = {x: 0, y: 0};

    const moveRight = () => {
        const newAbsCoords = {x: absCoords.x + SCREEN_WIDTH, y: absCoords.y};
        if (newAbsCoords.x > area.x) {
            return false;
        }
        if (memory[`${newAbsCoords.x}-${newAbsCoords.y}`]) {
            return false;
        }

        memory[`${newAbsCoords.x}-${newAbsCoords.y}`] = true;
        absCoords = newAbsCoords;
        return { x: SCREEN_WIDTH, y: 0 };
    }
    const moveLeft = () => {
        const newAbsCoords = {x: absCoords.x - SCREEN_WIDTH, y: absCoords.y};
        if (newAbsCoords.x < 0) {
            return false;
        }
        if (memory[`${newAbsCoords.x}-${newAbsCoords.y}`]) {
            return false;
        }

        memory[`${newAbsCoords.x}-${newAbsCoords.y}`] = true;
        absCoords = newAbsCoords;
        return { x: -SCREEN_WIDTH, y: 0 };
    }
    const moveDown = () => {
        const newAbsCoords = {x: absCoords.x, y: absCoords.y + SCREEN_HEIGHT};
        if (newAbsCoords.y > area.y) {
            return false;
        }
        if (memory[`${newAbsCoords.x}-${newAbsCoords.y}`]) {
            return false;
        }

        memory[`${newAbsCoords.x}-${newAbsCoords.y}`] = true;
        absCoords = newAbsCoords;
        return { x: 0, y: SCREEN_HEIGHT };

    }
    const moveUp = () => {
        const newAbsCoords = {x: absCoords.x, y: absCoords.y - SCREEN_HEIGHT};
        if (newAbsCoords.y < 0) {
            return false;
        }
        if (memory[`${newAbsCoords.x}-${newAbsCoords.y}`]) {
            return false;
        }

        memory[`${newAbsCoords.x}-${newAbsCoords.y}`] = true;
        absCoords = newAbsCoords;
        return { x: 0, y: -SCREEN_HEIGHT };
    }

    const getNextActionName = (current: string) => {
        const actionNameIndex = prioritiesLoop.indexOf(current);
        return prioritiesLoop[actionNameIndex + 1] || prioritiesLoop[0];
    }

    const actions = {
        moveRight, moveLeft, moveUp, moveDown,
    }
    let history: [action: string, isSuccess: any] = ['moveRight', true];
    const path: any = [{x: 0, y: 0}];
    const move = () => {
        for(let i = prioritiesLoop.length; --i;) {
            const [lastAction, isSuccess] = history;
            let newAction = lastAction;
            if(!isSuccess) {
                newAction = getNextActionName(lastAction)
            }
            const success = actions[newAction as keyof typeof actions]();
            history = [newAction, success];

            if(success) {
                path.push(success);
                return true;
            }
        }
        return false;
    }
    memory['0-0' as any] = true;
    while (move()) {
    }
    return path;
}
const path = getCoords({x: 11000,  y: 10000});
console.log('path', path);
