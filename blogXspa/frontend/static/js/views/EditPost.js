import AbsatrctView from './AbstractView.js';
import Alert from '../../helper/Alert.js';

export default class EditPost extends AbsatrctView {
    constructor(params) {
        super(params);
        this.setTitle("Edit Post");
    }

    editForm() {
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
             * A handler function to prevent default submission and run our custom script.
             * @param  {Event} event  the submit event triggered by the user
             * @return {void}
             */
            const handleEditFormSubmit = (event) => {
                // Stop the form from submitting since we’re handling that with AJAX.
                event.preventDefault();
            
                // Call our function to get the form data.
                const data = formToJSON(form.elements);
            
                // Demo only: print the form data onscreen as a formatted JSON object.
                //  const dataContainer = document.getElementsByClassName('results__display')[0];
            
                // Use `JSON.stringify()` to make the output valid, human-readable JSON.
                //  dataContainer.textContent = JSON.stringify(data, null, '  ');
                let json_data = JSON.stringify(data, null, '  ');
                
                console.log(json_data)
            
                // Send the form data off to the API (server)
                const request = new XMLHttpRequest()
                request.onreadystatechange = respond;
                request.open("PUT", "http://blogx.local/api/post/update.php", true)
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
                            // document.getElementById('msg-success').innerHTML = resp.message;
                            Alert("Post updated successfully", "success");
                        }
                        else 
                        {
                            // document.getElementById('msg-error').innerHTML = resp.error;

                            Alert("Update failed.", "danger");
                        }
        
                    }
                }
            };

            // const form = document.getElementById("edit-form")[0];
            const form = document.getElementById("edit-form");
    
            console.log("FORM IS: ", form);
            form.addEventListener('submit', handleEditFormSubmit);
    }
    
    async getHTML() {
        const result = await this.getData();
        let posts = result.data;
        
        if (typeof(posts) === 'string' || typeof(posts) === null) {
            return `
            <h1>Oops!</h1>
            <section>
            <h2>404</h2>
            <p>Something went wrong</p>
            </section>
            `;
        }
        
        const singlePost = posts.find(post => post.id == this.params.id);
        
        this.setTitle(`Edit ${singlePost.title}`);


        // Give form time to load
        setTimeout(() => {
            // Pre-select the current category
            const category = document.getElementById('category_id');
            category.value = singlePost.category_id;

            this.editForm();
        }, 200);

        return `
        <h1>Edit ${singlePost.title}</h1>
        <section>
        <div class="container mt-4 px-5">

            <div class="info">
                <span id="msg-success" class="text-info"></span>
                <span id="msg-error" class="text-danger"></span>
                <form id="edit-form" class="edit-form w-75">
                    <div class="form-group mt-2">
                        <!--<label for="id">ID</label> -->
                        <input type="hidden" id="id" name="id" class="form-control" value="${singlePost.id}">
                    </div>
                    <div class="form-group mt-2">
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" class="form-control" value="${singlePost.title}" required>
                    </div>
                    <div class="form-group mt-2">
                        <label for="body">Body</label>
                        <textarea type="text" id="body" rows="8" name="body" class="form-control" required>${singlePost.body}</textarea>
                    </div>
                    <div class="form-group mt-2">
                        <label for="author">Author</label>
                        <input type="text" id="author" name="author" class="form-control" value="${singlePost.author}" required>
                    </div>
                    <div class="form-group mt-2">
                        <label for="category_id">Category</label>
                        <select name="category_id" id="category_id" class="form-control">
                            <option value="1">Technology</option>
                            <option value="2">Gaming</option>
                            <option value="3">Auto</option>
                            <option value="4">Entertainment</option>
                            <option value="5">Books</option>
                        </select>
                    </div>
                    <div class="form-group mt-4 w-25">
                        <button type="submit" id="submit" name="submit" class="btn btn-primary form-control">Update</button>
                    </div>
                </form>
                <!--<<div class="results">
                    <h2 class="results__heading">Form Data</h2>
                    <pre class="results__display-wrapper"><code class="results__display"></code></pre>
                </div>>-->
            </div>
        </div>
        </section>
        `;
    }
    
}

