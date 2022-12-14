export async function getJobDetails(requestData) {
    const response = await fetch(`http://localhost:3002/job-details/${requestData.eventId}/details`);
    console.log(response)
    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.message || 'Could not get job details')
    }
    console.log(data)
    return data
}

export async function deleteNote(requestData) {
    const response = await fetch(`http://localhost:3002/job-details/${requestData.Id}/${requestData.calendarEventId}`, {
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
    if (!response.ok) {
        throw new Error(data.message || 'Could not get comments.');
    }

    const transformedComments = [];
    for (const key in data) {
        for (const eventKey in data[key].events) {
            if (data[key].events[eventKey].eventId === requestData.eventId) {
                const obj = {
                    title: data[key].events[eventKey].title,
                    description: data[key].events[eventKey].description,
                    time: data[key].events[eventKey].time,
                    key: data[key].events[eventKey]._id
                };
                transformedComments.push(obj)
            }
        }
    }
    return transformedComments
}