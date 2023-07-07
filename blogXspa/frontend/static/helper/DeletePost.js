import AjaxRequestResponse from "./AjaxRequestResponse.mjs";

export default function DeletePost(id) 
{
    // Prepare data object with the passed in id.
    const data = {id: id};

    AjaxRequestResponse("DELETE", "http://blogx.local/api/post/delete.php", data);
    
};