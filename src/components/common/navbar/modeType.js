const modeTypes = {
    getModeImage: (isChecked) => {
        switch(isChecked) {
            case false:
                return 'https://image.flaticon.com/icons/png/512/169/169367.png';
            case true:
                return 'https://img.icons8.com/cotton/2x/moon-satellite.png';
            default:
                return 'https://image.flaticon.com/icons/png/512/169/169367.png';
        }
    }
};

export default modeTypes;