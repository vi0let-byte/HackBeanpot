class Bundle {
    bundleId: string;
    bundleName: string;
    balloonsContained: string[]

    constructor(bundleName: string) {
        this.bundleId = crypto.randomUUID();
        this.bundleName = bundleName;
        this.balloonsContained = []
    }

    //method for adding balloons to bundle array
    //method for removing balloons

    addBalloon(balloonId: string) {
        if (!this.balloonsContained.includes(balloonId)) {
            this.balloonsContained.push(balloonId)
        }
    }

    removeBalloon(balloonId: string) {
        const index = this.balloonsContained.indexOf(balloonId);

        if (index > -1) {
            this.balloonsContained.splice(index, 1)
        }
    }
}