const textFormat = {
    formatPluralForm: (singleName, count) => {
        if (count === 1){
            return count + ' ' + singleName;
        } else if (count === 0){
            count = 'No';
            return count + ' ' + singleName + 's';
        }
        else {
            return count + ' ' + singleName + 's';
        }
    }
};

export default textFormat;