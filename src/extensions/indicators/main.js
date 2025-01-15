import indicators from './indicators.js'
import Lib1 from './Lib1.js'

// Extension's controller
export default class Main {

    constructor(tv, dc) {
        this.widgets = {}
        this.tv = tv
        this.dc = dc

        this.dc.ww.just('upload-module', {
            id: 'indicator',
            main: indicators.toString(),  // Mod = main module class (defined as a function)
            Lib1: Lib1.toString()
        })
    }

}