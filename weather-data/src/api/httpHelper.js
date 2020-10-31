

export async function handleResponse(response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not ok.");
}

export async function handlePostResponse(response) {
    console.log('***********')
    console.log(response)
    console.log('***********')
    if (response.created) return response.json();
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not created.");
}

export function handleError(error) {
    console.error("API call failed. " + error);
    throw error;
}





