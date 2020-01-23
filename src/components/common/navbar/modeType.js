const modeTypes = {
    getModeImage: (isChecked) => {
        switch(isChecked) {
            case false:
                return 'https://cdn.iconscout.com/icon/premium/png-512-thumb/day-mode-1724723-1464809.png';
            case true:
                return 'https://cdn.iconscout.com/icon/premium/png-256-thumb/night-mode-9-558148.png';
        }
    }
};

export default modeTypes;