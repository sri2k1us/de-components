export const msgQueue = [];
export default function announce(msg) {
    msgQueue.push(msg);
}
