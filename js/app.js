console.log("init");
orientationService.init();
positionService.init();

document.body.appendChild(document.createElement("app-console"));
/*
for (let i=1; i<3; i++) {
    setTimeout( () => {
        voteService.vote()
    }, 5000*i)
}
*/
