import Alert from "./Alert.mjs";

export default function SendFormData(method, url) {
    /**
     * Retrieves input data from a form and returns it as a JSON object.
     * @param  {HTMLFormControlsCollection} elements  the form elements
     * @return {Object}                               form data as an object literal
    */
    const formToJSON = (elements) => 
    [].reduce.call(
        elements,
        (data, element) => {
            // Make sure the element has the required properties.
            if (isValidElement(element)) {
                data[element.name] = element.value;
            }

            return data;
        },
        {},         
    );


    /**
     * Checks that an element has a non-empty `name` and `value` property.
     * @param  {Element} element  the element to check
     * @return {Bool}             true if the element is an input, false if not
     */
    const isValidElement = (element) => {
        return element.name && element.value;
    };


    /**
     * A handler function to prevent default submission and send form data via AJAX.
     * @param  {Event} event  the submit event triggered by the user
     * @return {void}
     */
    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        // Call our function to get the form data.
        const data = formToJSON(form.elements);

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
    };

    const form = document.getElementsByClassName('form')[0];
    form.addEventListener('submit', handleFormSubmit);
}