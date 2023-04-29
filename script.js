// birthYear = prompt('What is your bearth year?');
// placeOfHabitat = prompt ('What city do you live in?');
// sportLove = prompt ('What is your favourite sport?')
// currentYear = new Date().getFullYear();
// age = currentYear - birthYear;

// if (placeOfHabitat ===  'Kyiv' || placeOfHabitat ===  'Washington' || placeOfHabitat ===  'London'){
//     capitalLocated = ''
//     switch (placeOfHabitat) {
//         case 'Kyiv':
//             capitalLocated = 'Ukraine';
//             break;
//         case 'Washington':
//             capitalLocated = 'USA';
//             break;
//         case 'London':
//             capitalLocated = 'Great Britain';
//                 break;
//     }
//     alert('You are' + ' ' + age + ' years old! And you live in a capital of' + ' ' + capitalLocated + ', congrats!')
// }
// else {
//     alert ('You are' + ' ' + age + ' years old! And you live in' + ' ' + placeOfHabitat)
// };

// ***************************************************************************************************************************************


birthYear = prompt('What is your birth year?');
if(birthYear !== null){
    placeOfHabitat = prompt ('What city do you live in?');
    if(placeOfHabitat !== null){
        favouriteSport = prompt ('What is your favourite sport?');
        if(favouriteSport !== null){
            currentYear = new Date().getFullYear();
            age = currentYear - birthYear;
            message = 'You are' + ' ' + age + ' years old!' + ' ' + '\n';
            if (placeOfHabitat ===  'Kyiv' || placeOfHabitat ===  'Washington' || placeOfHabitat ===  'London'){
                capitalLocated = ''
                switch (placeOfHabitat) {
                    case 'Kyiv':
                        capitalLocated = 'Ukraine';
                        break;
                    case 'Washington':
                        capitalLocated = 'USA';
                        break;
                    case 'London':
                        capitalLocated = 'Great Britain';
                            break;
                }
                message += 'And you live in a capital of' + ' ' + capitalLocated + ', congrats!' + '\n';
            }
            else {
                message += 'And you live in' + ' ' + placeOfHabitat + '\n';
            };

            // if (favouriteSport.toLowerCase() === 'football') {
            //     message += 'Cool! You want to be like Lionel Messi!';
            //   } else if (favouriteSport.toLowerCase() === 'boxing') {
            //     message += 'Cool! You want to be like Vitalii Klychko!';
            //   } else if (favouriteSport.toLowerCase() === 'hockey') {
            //     message += 'Cool! You want to be like Wayne Gretzky';
            //   };

            if (favouriteSport.toLowerCase() ===  'hockey' || favouriteSport.toLowerCase() ===  'boxing' || favouriteSport.toLowerCase() ===  'football'){
                sportPerson = ''
                switch (favouriteSport.toLowerCase()) {
                    case 'hockey':
                        sportPerson = 'Wayne Gretzky';
                        break;
                    case 'boxing':
                        sportPerson = 'Vitalii Klychko';
                        break;
                    case 'football':
                        sportPerson = 'Lionel Messi';
                            break;
                }
                message += 'Cool! You want to be like' + ' ' + sportPerson + '!';
            }
            else {
                message += 'You have chosen a great way to spend your physical energy! Keep on working hard!';
            };
            alert(message);
        } 
        else{ alert('Too bad you don\'t want to share your favourite sport!')};
    }
    else{alert('Too bad you don\'t want to share the city you live in!')};
}    
else{alert('Too bad you don\'t want to share your age!');
};