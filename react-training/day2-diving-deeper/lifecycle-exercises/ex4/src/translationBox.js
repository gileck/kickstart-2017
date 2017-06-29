import React from 'react';


// You're not allowed to change this method
const expensiveTranslate = (englishValue, targetLanguage) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve(`${englishValue} - [${targetLanguage}]`);
        }, 2000);
    });
}

/**
 * TranslationBox is a Component that takes 2 "props":
 * 1. term - An English value to translate
 * 2. targetLanguage - A language to translate the term to
 * 
 * And displays the the translation inside a Box.
 */
class TranslationBox extends React.Component {

    constructor() {
        super();

        this.state = {
            translation: '' // HINT
        };
    }

    // componentWillReceiveProps(nextProps) {
    // TODO - You need to implmement this function
    // }

    render() {
        // TODO - Change the render function so it shows the translation without calling "expensiveTranslate"
        return (
            <div>
                <h3>Translation:</h3>
                <p className='translation'>No translation... :(</p>
            </div>
        );
    }
}

export default TranslationBox;