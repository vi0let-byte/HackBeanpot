class Balloon {
    taskId: string;
    taskName: string;
    timeCreated: Date;
    timeDue: Date;
    bundleId: string | null

    constructor(taskName: string, timeDue: Date) {
        this.taskId = crypto.randomUUID();
        this.taskName = taskName;
        this.timeCreated = new Date();
        this.timeDue = timeDue;
        this.bundleId = null
    }

    calcDaysRemaining(): number {
        const current = new Date();
        const timeRemaining = this.timeDue.getTime() - current.getTime()
        const daysRemaining = timeRemaining / (1000 * 24 * 60 *60)
        return daysRemaining
    }
}