export async function deleteNote(requestData) {
    const response = await fetch(`http://localhost:3002/job-details/${requestData.eventId}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data)
    if (!response.ok) {
        throw new Error(data.message || 'Could not delete job!');
    }
    return (`${requestData} was deleted!`);
}

export async function deleteJob(requestData) {
    const response = await fetch(`http://localhost:3002/jobs/${requestData}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data)
    if (!response.ok) {
        throw new Error(data.message || 'Could not delete job!');
    }
    return (`${requestData} was deleted!`);
}

export async function addNote(requestData) {
    const response = await fetch(`http://localhost:3002/job-details/${requestData.Id}`, {
        method: 'POST',
        body: JSON.stringify(requestData.commentData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Could not add comment.');
    }
    return { commentId: data.status };
}

export async function getAllNotes(requestData) {
    const response = await fetch(`http://localhost:3002/job-details/${requestData.Id}`);
    const data = await response.json();
    console.log(data)
    if (!response.ok) {
        throw new Error(data.message || 'Could not get comments.');
    }

    console.log(data[0].events)

    const transformedComments = [];
    for (const key in data) {
        for (const eventKey in data[key].events) {
            if (data[key].events[eventKey].eventId === requestData.eventId) {
                const obj = {
                    title: data[key].events[eventKey].title,
                    description: data[key].events[eventKey].description
                };
                transformedComments.push(obj)
            }
        }
    }
    console.log(transformedComments)
    return transformedComments
}