export class EventHandler {
    private eventNameToCallback: Record<string, () => void>
    constructor () {
        this.eventNameToCallback = {}
    }

    registerEvent(name: string, callback: () => void) {
        this.eventNameToCallback[name] = callback
    }

    unregisterEvent(name: string) {
        delete this.eventNameToCallback[name]
    }

    execute(name: string) {
        if (!Object.keys(this.eventNameToCallback).includes(name)) {
            console.log('Not found callback of event name', name)
            return
        }
        return this.eventNameToCallback[name]()
    }
}
