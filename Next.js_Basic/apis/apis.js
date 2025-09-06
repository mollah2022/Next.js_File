import wait from "@/utils/wait";

export async function getCatFacts(type, delay = false) {
    let fetchOptions = {};

    if (type === "dynamic") {
        fetchOptions = {
            cache: "no-store",
        };
    }
    const res = await fetch("https://catfact.ninja/fact", fetchOptions);

    if (delay) {
        await wait(3000);
    }

    return res.json();
}

export async function getPosts(type, delay = false) {
    let fetchOptions = {};
    // const page = Math.floor(Math.random() * 10) + 1; // 1-10

    if (type === "dynamic") {
        fetchOptions = {
            cache: "no-store",
        };
    }
    if (type === "revalidate") {
        fetchOptions = {
            next: {
                revalidate: 10, // in second
            },
        };
    }

    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5",
        fetchOptions
    );

    if (delay) {
        await wait(3000);
    }

    return res.json();
}

export async function getPost(postId) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    await wait(2000);

    return res.json();
}

export async function getUser(userId) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    await wait(4000);

    return res.json();
}
