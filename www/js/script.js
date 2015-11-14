/**
 * Created by Max on 14.11.2015.
 */
/*
var qr_codes = [ 'd129c998-7dcd-4a8b-ad22-95d9f274e2a9', '789b28a7-1d6f-4e53-a0e5-cc47a329bce5', 'bb2eec62-0a88-4b13-a557-2a9c03c62c20',
    'c5ce0178-7a74-42da-b800-5fde70ee8b11', 'ca8e999d-e652-4d6a-9963-ac0f29123e74', '32976937-8ec6-442d-bec0-84594c6f1f7f',
    '3ea55d85-b43c-46bf-b1b6-d628a529d837', '791a0341-dc8f-46a1-871f-e0f8498601a0', 'a5cd794e-2a25-4781-b4de-af79180f4d36',
    '3c1da4e9-6363-4de4-8975-430d3245f7cf' ];
var game_data = { progress: 0, startTime: 0 };

function scan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if(!result.cancelled)
            {
                if(result.format == "QR_CODE")
                {
                    alert(result.text);
                    if (qr_codes[game_data.progress] === result.text) {
                        game_data.progress++;
                        updateProgress();
                        alert('success');
                    }
                }
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    )
}*/

function updateProgress() {

}