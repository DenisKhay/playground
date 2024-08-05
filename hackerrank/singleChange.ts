function singleChange(str1: string, str2: string) {
    // lagala
    // dalada

    // l === d

    if(str1 === str2){
        return true;
    }

    if((str1.length >= str2.length + 2) || (str2.length + 2 >= str1.length)) {
        return false; // because diff is more than 2 symbols
    }
    for (let i = 0; i < str1.length; i++) {
        const s1 = str1[i], s2 = str2[i];
        if(s1 !== s2) {
            // s1 is not good
            // s2 is not good
            // both
            // we can compare s1 & s2+1
        }
    }
    return true;

}


console.log('single change', singleChange('goba', 'goba_rd'));
