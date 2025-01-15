export default function (mod, se, lib) {
    // Add hook with extra debugging
    this.pre_env = function (id, s) {
        // src => input time-series
        // len => first parameter (length)
        // _id => generated id, should be underscored
        // _tf => optional timeframe, should be underscored
        se.std_plus['sma2'] = function (src, len, _id, _tf) {

            // Creates a recursive uuid for this calculation
            // branch (_id is generated by the parent call)
            let id = this._tsid(_id, `sma2(${len})`)
            let sum = 0
            for (var i = 0; i < len; i++) {
                sum = sum + src[i]
            }
            // Return a new TS with a tf, defined by src
            return this.ts(sum / len, id, src.__tf__)
        }
    }
}