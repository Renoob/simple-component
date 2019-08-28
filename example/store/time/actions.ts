export const TIME = "TIME";

export function getTime(info: { now?: number }) {
    return {
        type: TIME,
        ...info,
    };
}
