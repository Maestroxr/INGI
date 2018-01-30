if (window.addEventListener) {
    window.addEventListener("message", onMessage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onmessage", onMessage, false);
}

function onMessage(event) {
    // Check sender origin to be trusted
    //if (event.origin !== "http://example.com") return;

    var data = event.data;

    if (typeof(window[data.func]) == "function") {
        window[data.func].call(null, data.message);
    }
}

// Function to be called from iframe
function parentFunc(message) {
    //alert(message["problem-data"]);
    //alert(message["problem-input"]);
    var problemData = message["problem-data"];
    var problemInputId = message["problem-input"];

    $('#unity-input-' + problemInputId).val(problemData);


    submitTask(false);
}