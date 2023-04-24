// export default class EventBus {
//     listeners: Record<string, Function[]>;
//
//     constructor() {
//         this.listeners = {};
//     }
//
//     on(event: string, callback: (...args: unknown[]) => void): void {
//         if (!this.listeners[event]) {
//             this.listeners[event] = [];
//         }
//         this.listeners[event].push(callback);
//     }
//
//     off(event: string, callback: (...args: unknown[]) => void): void {
//         if (!this.listeners[event]) {
//             throw new Error(`Нет события: ${event}`);
//         }
//
//         this.listeners[event] = this.listeners[event].filter(
//             (listener: any) => listener !== callback,
//         );
//     }

    emit(event: string, ...args: unknown[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event].forEach((listener: Function): void => {
            listener(...args);
        });
    }
}


export class EventBus {
    constructor() {
        this.listeners = {};
    }

    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event, callback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event, ...args) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function(listener) {
            listener(...args);
        });
    }
}
