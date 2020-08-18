
const domain     = 'sipjs.onsip.com';
const aliceURI   = 'alice.' + window.token + '@' + domain;
const aliceName  = 'Alice';

const bobURI     = 'bob.' + window.token + '@' + domain;
const bobName    = 'Bob';

const remoteVideoElement = document.getElementById(remoteVideo);
const button = document.getElementById(buttonId);

let onCall = false;

const configuration = {
    aor: aliceURI,
    delegate: {

        onCallCreated: () => {
            onCall = true;
        },

        onCallAnswered: () => {
            onCall = true;
        },

        onCallHangup: () => {
            onCall = false;
        }
    },

    media: {
        remote: {
            video: remoteVideoElement,
            audio: remoteVideoElement
        }
    },

    userAgentOptions: {
        displayName
    },
};

const simpleUser = new SimpleUser('wss://edge.sip.onsip.com', configuration);
simpleUser.connect();

button.addEventListener('click', function() {
    // No current call up
    if (!onCall) {
        simpleUser.call(bobURI);
    } else {
        simple.hangup();
    }
});