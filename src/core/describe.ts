export const describe = (name: string, fn: any) => {
    global.easy.queue.push({ name, fn });
};
