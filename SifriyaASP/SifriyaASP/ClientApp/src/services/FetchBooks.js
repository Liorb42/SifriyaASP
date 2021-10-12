
export async function  fetchBooksData() {
    const response = await fetch('books');
    const data = await response.json();
    return data;
}