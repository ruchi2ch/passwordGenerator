function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 async function password_generator(length) {
    let check;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}/;
    $("div.spinner-grow").css("visibility", "visible")
    await sleep(500);
    $("h2").html("Wait...!\n");
    await sleep(500);
    if (re.test(result)) {
        $("h2").html(result);
        $("div.spinner-grow").css("visibility", "hidden")
    }
    else {
        $("h2").html("Wait...!\n");
        $("div.spinner-grow").css("visibility", "visible")
        $("button").click();
        await sleep(500);
        $("div.spinner-grow").css("visibility", "hidden")
    }
    $("div.spinner-grow").css("visibility", "hidden");
}

