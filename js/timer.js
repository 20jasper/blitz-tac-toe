export class Timer {
    start() {
        this.startTime = Date.now()
    }

    stop() {
        this.endTime = Date.now()
        this.duration = this.endTime - this.startTime
    }
}