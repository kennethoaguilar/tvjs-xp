import indicators from './indicators.js'

// Extension's controller
export default class Main {

    constructor(tv, dc) {
        this.tv = tv
        this.dc = dc

        this.dc.ww.just('upload-module', {
            id: 'indicator',
            main: indicators.toString()
        })
    }

}