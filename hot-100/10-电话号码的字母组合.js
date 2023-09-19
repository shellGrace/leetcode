/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(digits === '') return []
    let numMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    // abc -def,ghi,jkl
    const combinations = (ds) => {
        if (ds.length === 1) {
            return numMap[ds].split('')
        }
        const header = numMap[ds[0]].split('');
        const remain = combinations(ds.slice(1));
        const res = [];
        for(let i = 0; i < header.length; i++) {
            for(let j = 0; j < remain.length; j++) {
                res.push(header[i] + remain[j])
            }
        }
        return res;
    }

    return combinations(digits);
};

console.log(letterCombinations("234"));