import client from "./client"

export const getPosts = async (pageNo, limit) => {
    try {
        const { data } = await client.get(`/book/posts?page=${pageNo}&limit=${limit}`);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data
        }
        return { error: error.message || error };
    }
};

export const getCart = async () => {
    try {
        const { data } = await client.get(`/user/cart`, {
            headers: {
                'token': localStorage.getItem("token"),
            }
        });
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data
        }
        return { error: error.message || error };
    }
};

export const updateBookAndUserCart = async (bookTitle) => {
    try {
        const { data } = await client.post(`/book/updateCartAndBooks`,{bookTitle}, {
            headers: {
                'token': localStorage.getItem("token"),
            }
        });
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data
        }
        return { error: error.message || error };
    }
};

export const getPostsWithTags = async (pageNo, limit, tagdata) => {
    try {
        const { data } = await client.get(`/book/posts/${tagdata}?page=${pageNo}&limit=${limit}`);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data
        }
        return { error: error.message || error };
    }
};

export const searchPosts = async (query, pageNo, limit) => {
    try {
        const { data } = await client.get(`/book/search?query=${query}&page=${pageNo}&limit=${limit}`);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data
        }
        return { error: error.message || error };
    }
};


export const getPost = async (slug) => {
    try {
        const { data } = await client.get(`/post/single/${slug}`);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data
        }
        return { error: error.message || error };
    }
};