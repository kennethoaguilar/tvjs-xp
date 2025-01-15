
// Extension's controller

import { Utils } from 'trading-vue-js'
import Vue from 'vue'
import Mod from './Mod'
import Lib1 from './Lib1'

export default class Main {

    constructor(tv, dc) {
        this.widgets = {}
        this.tv = tv
        this.dc = dc
        this.dc.ww.just('upload-module', {
            id: 'custom_ta',
            main: Mod.toString(),  // Mod = main module class (defined as a function)
            Lib1: Lib1.toString()  // as stringified functions
        })
    }

}
