import Alert from "./Alert.mjs";

export default function AjaxRequestResponse(method, url, data) {
    let json_data = JSON.stringify(data, null, '  ');
    
    // Send the form data off to the API (server)
    const request = new XMLHttpRequest()
    request.onreadystatechange = respond;
    request.open(method, url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(json_data)

    // Response from server 
    function respond() {
        if (request.readyState == 4 && request.status == 200) {
            const resp = JSON.parse(request.response);
            // console.log(resp.message);
            // console.log(resp.error);

            if(!resp.error)
            {
                Alert(resp.message, "success");
            }
            else 
            {
                Alert(resp.error, "danger");
            }

        }
    }
}