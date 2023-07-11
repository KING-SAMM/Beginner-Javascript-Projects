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
        if (request.readyState == 4 && (request.status >= 200 && request.status < 400)) {
            console.log("Response is: ", request.response)
            const resp = JSON.parse(request.response);
    
            if(!resp.error) {
                Alert(resp.message, "success");
                console.log("RESP IS:", resp);
            } else {
                Alert(resp.error, "danger");
                console.log("RESP IS:", resp);
            }
            return;
        } 
        
        if (request.status >= 400) {
            Alert("Something's not right..", "danger");
            return;
        }
    }

    request.onerror = () => {
        Alert("Error sending request..", "danger");
    }
}


// Response from server 
// function respond() {
//     if (request.readyState == 4 && (request.status >= 200 && request.status < 400)) {
//         console.log("Response is: ", request.response)
//         const resp = JSON.parse(request.response);

//         if(!resp.error)
//         {
//             Alert(resp.message, "success");
//             console.log("RESP IS:", resp);
//         }
//         else 
//         {
//             Alert(resp.error, "danger");
//             console.log("RESP IS:", resp);
//         }
//         console.log("RESP IS:", resp);
//     }
// }

    // function respond() {
    //     if (request.readyState == 4) {
    //       let contentType = request.getResponseHeader("Content-Type");
    
    //       if (contentType.indexOf("application/json") !== -1) {
    //         // Handle JSON response
    //         if (request.status == 200) {
    //           const resp = JSON.parse(request.responseText);
    //           if (!resp.error) {
    //             Alert(resp.message, "success");
    //             console.log("RESP IS:", resp);
    //           } else {
    //             Alert(resp.error, "danger");
    //             console.log("RESP IS:", resp);
    //           }
    //         } else {
    //           // Handle non-200 status codes for JSON response
    //           console.log("Error:", request.status);
    //         }
    //       } else if (contentType.indexOf("text/html") !== -1) {
    //         // Handle HTML response
    //         console.log("HTML Response:", request.responseText);
    //       } else {
    //         // Handle other response types or errors
    //         console.log("Invalid response type");
    //       }
    //     }
    //   }