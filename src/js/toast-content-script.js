/**
 * (c) 2020 Tyrus Malmstrom
 * This code is licensed under MIT license (see LICENSE.txt for details)
 */

chrome.runtime.onMessage.addListener(( request, sender, sendResponse ) => {
    if( request ) {
        iziToast.show({
            timeout : 20000,
            title: 'Hello',
            message: 'Welcome!',
            icon: 'fas fa-times',
            position : 'center',
            theme : 'dark',
            progressBarColor: 'rgb(0, 255, 184)',
            onOpening: function(instance, toast){
                console.info('callback abriu!');
            },
            onClosing: function(instance, toast, closedBy){
                console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
            }
        });
    }
});