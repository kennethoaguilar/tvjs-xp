export default function(t, e, n) {
    console.log('Module constructor called');
    
    // Store references to verify we have them
    this.mod = mod;
    this.se = se;
    this.lib = lib;

    // Add hook with extra debugging
    this.pre_env = function(id, s) {
        console.log('pre_env called', {id, s});
        
        // Check if we can access se
        console.log('se available in hook:', !!this.se);
        
        // Try to inject the function
        try {
            this.se.std_plus.sma2 = function(src, len, _id, _tf) {
                let id = this._tsid(_id, `sma2(${len})`);
                let sum = 0;
                for (var i = 0; i < len; i++) {
                    sum = sum + src[i];
                }
                return this.ts(sum / len, id, src.__tf__);
            };
            console.log('Successfully injected sma2');
        } catch(e) {
            console.error('Failed to inject sma2:', e);
        }
    };

    // Check if there are any scripts in the queue
    console.log('Script queue:', se.queue);

    // Check if any scripts are mapped
    console.log('Script map:', Object.keys(se.map));
}