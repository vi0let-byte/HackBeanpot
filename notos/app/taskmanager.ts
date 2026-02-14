class TaskManager {
    balloons: Map<string, Balloon>; //class property
    bundles: Map<string, Bundle>

    constructor() {
        this.balloons = new Map();
        this.bundles = new Map()
    }

    //method to create balloon and store in map
    createBalloon(taskInput: string, timeInput: Date): Balloon {
        const balloon = new Balloon(taskInput, timeInput)
        this.balloons.set(balloon.taskId, balloon)
        return balloon
    }

    //method to create bundle and store in map
    createBundle(nameInput: string): Bundle {
        const bundle = new Bundle(nameInput)
        this.bundles.set(bundle.bundleId, bundle)
        return bundle
    }

    //method to remove balloon
    removeBalloon(toPop: Balloon): void {
        const isDeleted = this.balloons.delete(toPop.taskId)
        return console.log(isDeleted)
    }

    removeBundle(toDelete: Bundle): void {
        const isDeleted = this.bundles.delete(toDelete.bundleId)
        return console.log(isDeleted)
    }

    //method to get unbundled balloons 
    
    //method to add balloon to bundle and update data in both
    //method to get all bundles
    //method to unbundle when clicked (get all balloons from bundle)
}