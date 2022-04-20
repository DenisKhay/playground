// To understand how react works.. Of course with some assumptions
type Component = () => unknown;
const getTheComponentHooks  = (component: Component, hooks: Map<Component, []>): unknown[] => {
    if(!hooks.has(component)) {
        hooks.set(component, []);
    }
    return hooks.get(component) ?? [];

}

const arraysAreShallowEqual = (arr1: unknown[], arr2: unknown[]) => {
    return arr1.every((a,i) => a === arr2[i]);
}

export const React = (() => {
    const hooks = new Map<Component, []>();
    let currentHook = 0;
    let currentComponent: Component;
    return {
        render(Component: any) {
            currentComponent = Component;
            currentHook = 0;
            return Component();
        },
        useState(state: any) {
            const theComponentHooks = getTheComponentHooks(currentComponent, hooks)
            if(!theComponentHooks[currentHook]) {
                theComponentHooks[currentHook] = state;
            }
            const hookIndex = currentHook;
            currentHook++;
            const setState: any = (state: any) => {
                theComponentHooks[hookIndex] = state;
                this.render(currentComponent);
            }
            return [theComponentHooks[hookIndex], setState]
        },
        useEffect(effect: any, deps: unknown[] = []) {
            const theComponentHooks = getTheComponentHooks(currentComponent, hooks);
            const oldDeps = theComponentHooks[currentHook];
            const notAFirstRun = typeof oldDeps !== 'undefined';
            const depsAreEqual = arraysAreShallowEqual(deps, (oldDeps as unknown[]) || []);
            if(notAFirstRun && depsAreEqual) {
                return;
            }
            effect();
            theComponentHooks[currentHook] = deps || [];
            currentHook++
        }
    };
})();

