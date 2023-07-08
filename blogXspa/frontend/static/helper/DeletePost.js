import AjaxRequestResponse from "./AjaxRequestResponse.mjs";
import { closeModal } from "./modal.js";
import { fromDeleteToPosts } from "./redirect.js";

export default function DeletePost(id) 
{
    // Prepare data object with the passed in id.
    const data = {id: id};

    AjaxRequestResponse("DELETE", "http://blogx.local/api/post/delete.php", data);

    // Back to posts view
    fromDeleteToPosts();

    // Close modal
    closeModal();
};