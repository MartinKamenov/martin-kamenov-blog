const modeTypes = {
    getModeImage: (isChecked) => {
        switch(isChecked) {
            case false:
                return 'https://previews.123rf.com/images/helena777/helena7771908/helena777190800148/128804415-flat-sun-icon-summer-pictogram-on-transparent-background-sunlight-symbol-.jpg';
            case true:
                return 'https://img.icons8.com/cotton/2x/moon-satellite.png';
            default:
                return 'https://previews.123rf.com/images/helena777/helena7771908/helena777190800148/128804415-flat-sun-icon-summer-pictogram-on-transparent-background-sunlight-symbol-.jpg';
        }
    }
};

export default modeTypes;